import { object, string } from 'yup'

export default object({
  email: string().email('Please enter a valid email address').required('Email is required'),
  password: string().required('Password is required'),
})