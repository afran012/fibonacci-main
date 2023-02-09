import React, { useEffect, useState } from 'react'
import Navbar from "./Navbar"
import "../styles/Home.css"
import { Button } from 'react-bootstrap'
import calculateFibonacci from '../hooks/calculateFibonacci'
import TimeNow from './timeNow'


const Home = () => {
  const [serie, setSerie] = useState([])
  useEffect(() => {      
    return () => {      
    }
  }, [serie])
  
  return (
    <div className='home'>

      <Navbar />
      <Button className="ini" type='button' onClick={()=>{
        calculateFibonacci()
        setSerie (calculateFibonacci())
        console.log(serie)
      }}>CalcularFibonacci</Button>
      <TimeNow></TimeNow>
      
      <div>{serie.map((n)=>{
        return <div>{n}</div>     
      })}</div>

    </div>
  )
}

export default Home
