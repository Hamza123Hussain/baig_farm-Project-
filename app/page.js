import CowCard from '../components/CowCard'
import Data from '../Data'
export default function Home() {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className="sm:mt-5 text-[9px] sm:text-4xl  bg-gradient-to-r from-black to-black text-transparent bg-clip-text mb-10 sm:mb-0  sm:py-10 px-2">
        THE FINAL PRICES WILL BE DECIDED AT THE TIME OF PURCHASE
      </h1>

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
    </div>
  )
}
