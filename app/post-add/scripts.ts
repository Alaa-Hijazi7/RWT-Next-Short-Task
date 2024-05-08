import * as yup from 'yup'

export const schema = yup.object().shape({
  stepOne: yup.object().shape({
    firstField: yup.string().required('First field is required'),
    secondField: yup.string().required('Second field is required'),
    thirdField: yup.string().required('Third field is required'),
  }),
  stepTwo: yup.object().shape({
    images: yup
      .array()
      .of(
        yup.mixed().test('fileType', 'Unsupported file format', (value: any) => {
          if (!value) return true
          return value && value.type.startsWith('image/')
        }),
      )
      .max(5, 'Max 5 images are allowed')
      .required('Images are required')
      .test('fileSize', 'one or more files are too large max 2MB', (value: any) => {
        if (!value) return true
        return value.every((file: any) => file.size <= 2 * 1024 * 1024)
      }),
  }),
})


export const DEFAULT_VALUES = {
  stepOne: {
    firstField: '',
    secondField: '',
    thirdField: '',
  },
  stepTwo: {
    images: [],
  },
}