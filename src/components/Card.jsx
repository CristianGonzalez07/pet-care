import React from "react";

export default function Card({ value }) {
  return (
    <div className="h-[500px] bg-texture bg-fixed rounded-[20px] group">
      <img 
        src={value.img}
        className="h-[300px] rounded-t-[20px] w-full"
      />
      <div className="h-[200px] group-hover:bg-primary rounded-b-[20px]">
        <div className="flex justify-center p-2">
          <h1 className="font-sigmar text-primary-dark text-2xl group-hover:text-white">{value.title}</h1>
        </div>
        <div className="flex justify-center m-2">
          <h2 className="font-sigmar text-primary-light text-md group-hover:text-white">{value.description}</h2>
        </div>
      </div>
    </div>
  );
}
