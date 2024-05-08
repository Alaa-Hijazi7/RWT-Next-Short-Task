'use client'

import { useForm } from 'react-hook-form'
import { FormErrorMessage, FormLabel, FormControl, Input, Button, useToast } from '@chakra-ui/react'
import schema from './schema'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInResponse, signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import PasswordInput from '@/app/components/password'
import { useRouter } from 'next/navigation'


export default function HookForm() {
  const router = useRouter()
  const toast = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })

  async function onSubmit(values: { email: string; password: string }) {
    try {
      const res: SignInResponse | undefined = await signIn('credentials', {
        ...values,
        redirect: false,
      })

      if (res?.status === 200) {
        toast({
          title: 'Welcome!',
          description: "You've successfully logged in",
          status: 'success',
          duration: 3000,
          isClosable: true,
          position: 'bottom-right'
        })
        router.push('/post-add')

        return
      }

      toast({
        title: 'Failed to login',
        description: 'Make sure your credentials are correct',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right'
      })
    } catch (error: any) {
      toast({
        title: 'Failed to login',
        description: 'something went wrong',
        status: 'error',
        duration: 3000,
        isClosable: true,
        position: 'bottom-right'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email} isRequired>
        <FormLabel htmlFor='email'>
          Email
        </FormLabel>
        <Input id='email' placeholder='email' type='text' {...register('email')} />
        <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
      </FormControl>

      <FormControl mt={25} isInvalid={!!errors.password} isRequired>
        <FormLabel htmlFor='email'>
          Password
        </FormLabel>
        <PasswordInput register={register} name='password' />
        <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
      </FormControl>
      <Button mt={4} isLoading={isSubmitting} type='submit'>
        Log in
      </Button>
    </form>
  )
}
