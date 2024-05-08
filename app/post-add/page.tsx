'use client'

import BasicInformation from './BasicInformation'
import ImagesUpload from './ImagesUpload'
import ReviewInformation from './ReviewInformation'
import { Box, Button, Progress, Step, StepIcon, StepIndicator, StepStatus, Stepper, Text, useSteps, useToast } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { DEFAULT_VALUES, schema } from './scripts'
import { styles } from './styles'

export default function PostAddPage() {
  const toast = useToast()
  const formDetails = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: yupResolver(schema),
  })
  const steps = [
    { title: 'Basic information', component: <BasicInformation {...{ formDetails }} /> },
    { title: 'Images Upload', component: <ImagesUpload {...{ formDetails }} /> },
    {
      title: 'Review information',
      component: <ReviewInformation {...{ formDetails }} />,
    },
  ]

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  })

  const max = steps.length - 1
  const progressPercent = (activeStep / max) * 100

  const handleNext = () => {
    if (activeStep + 1 === steps.length) {
      setActiveStep(0)
      formDetails.reset()

      return
    }
    if (activeStep < max) {
      setActiveStep(activeStep + 1)
    }
  }
  const handleBack = () => {
    if (activeStep + 1 === steps.length) {
      setActiveStep(0)
      formDetails.reset()

      return
    }
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleSubmission = (values: any) => {
    if (activeStep + 1 === steps.length) {
      toast({
        title: 'Ad posted successfully',
        status: 'success',
        duration: 3000,
        position: 'bottom-right',
        isClosable: true,
      })
    }
    handleNext()
  }

  const children = steps[activeStep].component

  return (
    <Box
      as='section'
      sx={{
        ...styles.section,
        ...(activeStep + 1 === steps.length ? { height: 'unset', pt: '78px' } : {}),
      }}
    >
      <Text fontSize='3xl' fontWeight={600} mb='48px'>
        Post Your Ad
      </Text>
      <Box position='relative' sx={{ w: '100%', maxWidth: '441px' }}>
        <Stepper size='sm' index={activeStep} gap='0'>
          {steps.map((step, index) => {
            const paddingTop = activeStep === index + 1 ? '11px' : activeStep < index + 1 ? '25px' : '11px'
            const textColor = activeStep === index ? 'primary' : activeStep < index ? 'gray' : 'primary'

            return (
              <Step key={index}>
                <StepIndicator bg='white' sx={styles.stepIndicator}>
                  <StepStatus complete={<StepIcon />} />
                  <Text w='max-content' fontSize='smaller' pt={paddingTop} color={textColor}>
                    {step.title}
                  </Text>
                </StepIndicator>
              </Step>
            )
          })}
        </Stepper>
        <Progress value={progressPercent} position='absolute' height='3px' width='full' top='10px' zIndex={-1} />
      </Box>

      <Box sx={styles.children} as='form' onSubmit={formDetails.handleSubmit(handleSubmission)} id={steps[activeStep].title}>
        {children}
      </Box>

      <Box sx={styles.actions}>
        {activeStep > 0 && (
          <Button className='outline' onClick={handleBack} sx={styles.outline}>
            {activeStep + 1 === steps.length ? 'Cancel' : 'Previous'}
          </Button>
        )}
        <Button type='submit' form={steps[activeStep].title} sx={{maxW: "233px"}}>
          {activeStep + 1 === steps.length ? 'Post' : 'Next'}
        </Button>
      </Box>
    </Box>
  )
}
