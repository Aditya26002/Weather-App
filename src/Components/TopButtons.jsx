import React from 'react'

const TopButtons = () => {

    const cities = [
        {
            id: 1,
            name: "Paris",
        },
        {
            id: 2,
            name: "London",
        },
        {
            id: 3,
            name: "New York",
        },
        {
            id: 4,
            name: "Tokyo",
        },
        {
            id: 5,
            name: "Sydney",
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
        {cities.map((city) => (
            <button key={city.id} className='text-lg font-medium hover:bg-gray-700/20 px-3 py-2 rounded-md'>
                {city.name}
            </button>
        ))}
    </div>
  )
}

export default TopButtons