import { useState } from 'react';
import './App.css';
// import "./output.css";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container bg-white">
      <h1 className="underline">
        Hello world!
      </h1>
      <p className="text-6xl mb-5">
        Welcome ---- New Application!
      </p>
      <div className="flex flex-col items-center mt-16">
       <h1 className="text-4xl text-center">
         Tailwind CSS makes styling React components easier!
       </h1>
       <button className="bg-black text-white p-2.5 w-fit mt-9 ">
         Get Started
       </button>
     </div>

      <div className="flex flex-col items-center mt-16">
       <h1 className="text-4xl text-center">
        Tailwind CSS makes styling React components easier!
       </h1>
       <button className="bg-black text-white italic text-amber-900	 text-lg	p-2.5 w-fit mt-9 ">
         Get Started
       </button>
     </div>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count + 1)}>Countaf asf</button>
    </div>
  );
};
