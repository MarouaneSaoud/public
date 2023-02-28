import React from 'react'
import SlideBar from '../components/SlideBar'
import ModifierBook from '../components/ModifierBook'
export default function BookForm() {
  return (
    <div className="flex">
    <SlideBar />
    <div className="grid relative md:ml-48">
      <ModifierBook/>
    </div>

  </div>
   
  )

}
