import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { NextAuthOptions } from 'next-auth'
import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const user = { email: 'admin@admin.com', password: 'admin' }

const login = async (credentials: any): Promise<any> => {
  try {
    if (credentials?.email === user.email && credentials?.password === user.password) {
      return Promise.resolve({ id: 1, name: 'Admin??' })
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    console.log(error, 'there was an error in the login function')
    throw new Error('Invalid credentials')
  }
}

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials, req) => {
        try {
          const user = await login(credentials)
          if (user) {
            return Promise.resolve(user)
          }
        } catch (error) {
          throw new Error('Invalid credentials')
        }
      },
    }),
  ],
  session: {
    maxAge: 60 * 60,
  },
}

async function getSessionHandler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  return res.status(200).json(session)
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST, getSessionHandler }
