/* theme.ts */
import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    primary: '#2196F3',
    black: '#000000',
    gray: {
      'gray-1': '#B0B0B0',
    },
    red: {
      '1': '#FF3D00',
    }
  },
  fonts: {
    heading: 'var(--font-poppins)',
    body: 'var(--font-poppins)',
  },
})

export default theme