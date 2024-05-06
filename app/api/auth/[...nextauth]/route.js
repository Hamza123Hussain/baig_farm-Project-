import NextAuth from 'next-auth'

import Google from 'next-auth/providers/google'

const authOptions = {
  // Configure one or more authentication providers
  providers: [
    Google({
      clientId: process.env.Google_id,
      clientSecret: process.env.Google_secret,
    }),
    // ...add more providers here
  ],
}
export default authOptions

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
