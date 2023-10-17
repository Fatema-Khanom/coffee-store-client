
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './CoffeeCard';

function App() {
  const coffees = useLoaderData();
 

  return (
    <>
      
      <h1 className='text-6xl text-orange-400'>Hot Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-6 mt-10'>
        {
          coffees.map(coffee=> <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>
      
    </>
  )
}

export default App
