import React , { useEffect }from "react";
import SlideBar from "../components/SlideBar"
import HeaderInformation from "../components/HeaderInformation";

import TableInformation from '../components/TableInformation';

export default function Dashboard() {
   useEffect(() => {
    document.title = 'Dashboard';
  }, []);
  return (
    <div className="flex">
      <SlideBar />
      <div className="grid relative md:ml-48">
        <HeaderInformation/>
        <TableInformation/>
      </div>
    </div>
  );
}
