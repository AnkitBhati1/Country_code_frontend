import Head from "next/head";

import { useState, useEffect } from "react";

export default function Search({setData}) {

  const [error , setError] = useState(null);

  const validate = (value) => {
    if (value.length === 0) {
      setError("Please enter a country");
      return false;
    } 
  }


  const myfunction = (e) => {
    e.preventDefault(); 
    const country_name = e.target.elements.country.value;
    validate(country_name)
    fetch (`https://sproutacademy.in/api/`, {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        "country_name" : country_name
      })
    })
    .then(res => res.json())
    .then(data => {
      if(data.error){
        setError(data.error);
      }
      else{
        setData(data);
      }
    })
  }
  

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className="flex flex-col items-center justify-center min-h-screen py-2 sm:flex-row">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center text-9xl text-blue-900">Welcome</p>
          </div>
          <div className="mt-20 mx-auto block p-6 rounded-lg shadow-lg bg-white max-w-lg ">
            <form onSubmit={myfunction}>
              <div className="form-group mb-6">
                <label htmlFor="country" className="form-label inline-block mb-2 text-gray-700 font-semibold">Enter Name of country</label>
                <input className="form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" name="country" placeholder="Enter country name" />
                    {error && <p className="text-red-500 text-xs italic">Please enter country name!!</p>}
              </div>
              <button type="submit" className="
                    px-6
                    py-2.5
                    bg-blue-600
                    text-white
                    font-medium
                    text-xs
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    hover:bg-blue-700 hover:shadow-lg
                    focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
                    active:bg-blue-800 active:shadow-lg
                    transition
                    duration-150
                    ease-in-out"  >Submit</button>
                    
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
