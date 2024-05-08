'use client'

import { Box, Button } from '@chakra-ui/react'
import { useSession, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()

  return (
    <Box
      w='100%'
      bg='primary'
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: '40px 103px',
        minHeight: '127px',
      }}
    >
      {session?.user && <Button sx={{w: 'fit-content'}} onClick={() => signOut()}>Log Out</Button>}
    </Box>
  )
}
