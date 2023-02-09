import React from 'react'


import { useEffect, useRef } from "react";
// import "./styles.css";

const TimeNow = () => {
  const h1 = useRef();
  const ti = () => {
    const fechahora = new Date();
    const hora = fechahora.getHours();
    const minuto = fechahora.getMinutes();
    const segundo = fechahora.getSeconds();
    return `${hora}:${minuto}:${segundo}`;
  };
  useEffect(() => {
    const cl = setInterval(() => {
      h1.current.innerHTML = `${ti()}`;
    }, 1000);
    console.log("asd");
    return () => clearInterval(cl);
  }, []);
  console.log("asdsss");
  return (
    <div className="App">
      <h1 ref={h1}>{ti()}</h1>
    </div>
  );
}

export default TimeNow