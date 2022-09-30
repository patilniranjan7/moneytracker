import React from "react";

export default function Header() {
  return (
      <div className="h-20 bg-stone-600 align-middle flex flex-col justify-center items-center relative">
        <h1 className="  font-bold text-3xl">Money Management</h1>
        <h4 className="font-bold  leading-5 text-lg opacity-70 mt-1">(buy without interest)</h4>
        <span className="absolute top-4 right-5 text-2xl p-1 cursor-pointer blink-animation">
            <img src="https://cdn-icons-png.flaticon.com/512/992/992651.png" className="h-10"/>
        </span>
        <span className="absolute top-4 left-5 text-3xl p-1 cursor-pointer blink-animation">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828906.png" className="h-10"/>
        </span>
      </div>
  );
}
