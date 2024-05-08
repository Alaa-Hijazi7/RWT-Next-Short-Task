'use client'

import theme from '@/theme'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'
import Navbar from './components/navbar'
import "./globals.css"

export function Providers({ children, session }: { children: React.ReactNode; session?: any }) {
  return (
    <ChakraProvider theme={theme}>
      <SessionProvider session={session}>
        <Navbar />
        <Box p={5}>

        {children}
        </Box>
      </SessionProvider>
    </ChakraProvider>
  )
}
