import React from "react";
import SlideBar from "../components/SlideBar";
import GetBookDetail from '../components/GetBookDetail'
export default function BookDetail(){
  return (
    <div className="flex">
    <SlideBar />
    <div className="grid relative md:ml-48 w-11/12">
     <GetBookDetail/>
    </div>
   
  </div>
  );
}
