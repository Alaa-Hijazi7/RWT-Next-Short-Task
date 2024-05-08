import { Box, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 127px)',
        gap: '1rem',
      }}
    >
      <h1>Home Page</h1>

      <Link href='/auth/signin'>
        <Button>Login</Button>
      </Link>
    </Box>
  )
}
