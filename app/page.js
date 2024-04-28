import CowCard from '../components/CowCard'
import Data from '../Data'
export default function Home() {
  return (
    <div className=" grid justify-center grid-cols-1 sm:grid-cols-2 items-center">
      {Data.map((Cow) => {
        return (
          <div key={Cow.id}>
            {' '}
            <CowCard Data={Cow} />
          </div>
        )
      })}
    </div>
  )
}