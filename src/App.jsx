import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard';
import { useState } from 'react';
import Header from './Components/Header';
function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (

    <div className=' bg-white text-black'>
      <Header></Header>
      <h1 className='text-3xl font-semibold flex justify-center my-10'>Hot & Cold Coffee : {coffees.length}</h1>
      <div className='md:grid grid-cols-2 gap-6 m-20'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
