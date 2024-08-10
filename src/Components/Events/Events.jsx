import React from 'react'
import Header from '../Header'
import EventSlider from './EventSlider'

function Events() {
  return (
    <div>
      <Header />
      <h1 className="mb-2 text-4xl font-bold text-center text-white font-good">Choose your Adventure</h1>
      <h1 className="mb-4 text-lg font-medium text-center text-white font-poppins">Adventurer, the multiverse awaits! Choose your world and let the epic journey begin!</h1>

      <EventSlider />
    </div>
  )
}

export default Events
