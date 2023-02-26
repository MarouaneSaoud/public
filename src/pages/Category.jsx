import React , {useState}from 'react'
import SlideBar from '../components/SlideBar';
import CategoryTable from '../components/CategoryTable';
import CategoryHeader from '../components/CategoryHeader';


export default function () {
  
  return (
    <div className="flex">
      <SlideBar />
      <div className="grid relative md:ml-48 w-11/12">
        <CategoryHeader/>
        <CategoryTable/>
      </div>
     
    </div>
  )
}
