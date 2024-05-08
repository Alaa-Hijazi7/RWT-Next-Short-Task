import { Box, FormControl, FormErrorMessage, FormLabel, Select } from '@chakra-ui/react'
import { styles } from './styles'

export default function BasicInformation({ formDetails }: any) {
  const {
    formState: { errors },
    register,
  } = formDetails
  const ourStepErrors = errors?.stepOne || {}

  return (
    <Box sx={styles.stepWrapper}>
      <Box sx={styles.doubleField}>
        <FormControl isInvalid={!!ourStepErrors.firstField}>
          <FormLabel htmlFor='stepOne.firstField'>Select a Make</FormLabel>
          <Select placeholder='firstField' size='md' id='stepOne.firstField' {...register('stepOne.firstField')}>
            <option value='audi'>Audi</option>
            <option value='bmw'>BMW</option>
            <option value='mercedes'>Mercedes</option>
          </Select>
          <FormErrorMessage>{ourStepErrors.firstField && ourStepErrors.firstField.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!ourStepErrors.secondField}>
          <FormLabel htmlFor='stepOne.secondField'>Select a Model</FormLabel>
          <Select placeholder='secondField' size='md' id='stepOne.secondField' {...register('stepOne.secondField')}>
            <option value='audi'>Audi</option>
            <option value='bmw'>BMW</option>
            <option value='mercedes'>Mercedes</option>
          </Select>
          <FormErrorMessage>{ourStepErrors.secondField && ourStepErrors.secondField.message}</FormErrorMessage>
        </FormControl>
      </Box>
      <FormControl mt={5} isInvalid={!!ourStepErrors.thirdField}>
        <FormLabel htmlFor='stepOne.thirdField'>Select a Make</FormLabel>
        <Select placeholder='thirdField' size='md' id='stepOne.thirdField' {...register('stepOne.thirdField')}>
          <option value='audi'>Audi</option>
          <option value='bmw'>BMW</option>
          <option value='mercedes'>Mercedes</option>
        </Select>
        <FormErrorMessage>{ourStepErrors.thirdField && ourStepErrors.thirdField.message}</FormErrorMessage>
      </FormControl>
    </Box>
  )
}
