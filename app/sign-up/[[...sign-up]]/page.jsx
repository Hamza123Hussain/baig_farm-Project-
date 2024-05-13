import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=" flex justify-center items-center p-6 min-h-screen">
      {' '}
      <SignUp path="/sign-up" />
    </div>
  )
}
