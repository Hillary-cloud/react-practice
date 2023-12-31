import React from "react";
import EditEmployee from "./EditEmployee";

const Employee = (prop) => {
  return (
    <>
      <div className="py-8 px-8 max-w-sm mx-3 my-2 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
        <img
          className="block mx-auto object-cover rounded-full w-[100px] h-[100px] sm:mx-0 sm:shrink-0"
          src={prop.img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{prop.name}</p>
            <p className="text-slate-500 font-medium capitalize">{prop.role}</p>
            <p className="text-slate-500 font-medium capitalize">{prop.age} years</p>
          </div>
          {prop.editEmployee}
          
        </div>
      </div>
      {/* <h1>employee's name is {prop.name}</h1>
      {prop.age ? (
        <p>
          and {prop.name} is {prop.age} years old
        </p>
      ) : (
        <p>
          and {prop.name} is a {prop.role}
        </p>
      )} */}
    </>
  );
};

export default Employee;
