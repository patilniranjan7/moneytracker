import React, { useState } from "react";
import AddCard from "../../layout/AddCard";

export default function Header() {
  
  const [showModal, setShowModal] = useState({show:false, heading:''});
  return (
    <>
      <div className="h-20 header align-middle flex flex-col justify-center items-center relative">
        <h1 className="  font-bold text-3xl">Money Management</h1>
        <h4 className="font-bold  leading-5 text-lg opacity-70 mt-1">(buy without interest)</h4>
        <span className="absolute top-4 right-5 text-2xl p-1 cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-10" onClick={()=>{
              setShowModal({heading:"Income" , show : true})
            }}/>
        </span>
        <span className="absolute top-4 left-5 text-3xl p-1 cursor-pointer">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" className="h-10" onClick={()=>{
              setShowModal({heading:"Expenditure" , show : true})
            }}/>
        </span>
      </div>
      
      <AddCard showModal={showModal.show} setShowModal={(val)=>{setShowModal({...showModal, show : val})}} heading={showModal.heading}/>
    </>
  );
}
