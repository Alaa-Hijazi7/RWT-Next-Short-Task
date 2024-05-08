'use client'

import { Box, Text } from '@chakra-ui/react'
import HookForm from './LoginForm'

export default function LoginPage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 'calc(100vh - 221px)',
        form: {
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <Text fontSize='5xl' fontWeight={600} mb='48px'>
        Log in
      </Text>{' '}
      <HookForm />
    </Box>
  )
}
