import React from 'react'
import SlideBar from '../components/SlideBar'
import BookHeader from '../components/BookHeader'
import BooksCards from '../components/BooksCards'

export default function Book() {
  return (
    <div className="flex">
      <SlideBar />
      <div className="grid relative md:ml-48 w-11/12">
        <BookHeader/>
        <BooksCards/>
      </div>
     
    </div>
  )
}
