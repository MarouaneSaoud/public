import React from 'react'
import SlideBar from '../components/SlideBar'
import BookFormcmp from '../components/BookFormcmp'
export default function BookForm() {
  return (
    <div className="flex">
    <SlideBar />
    <div className="grid relative md:ml-48">
      <BookFormcmp/>
    </div>

  </div>
   
  )

}
