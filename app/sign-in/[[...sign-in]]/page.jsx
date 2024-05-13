import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className=" flex justify-center items-center p-6">
      <SignIn path="/sign-in" />
    </div>
  )
}
