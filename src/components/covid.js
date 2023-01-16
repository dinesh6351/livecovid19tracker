import React, { useEffect, useState } from 'react'
import './style.css'
export const Covid = () => {
        
    const[data,setData]=useState([]); 
    const getCovidData= async()=>{
        try {
      const res= await fetch('https://data.covid19india.org/data.json');
      const actualData=await res.json();
      console.log(actualData.statewise)
      setData(actualData.statewise[0]);
        } catch (error) {
            console.log(error);
        }
    }
        
    useEffect(()=>{
        getCovidData();
    },[]);
  return (
    <>
    <section>
        <h1>🔴 LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
            <li className='card ca1'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>OUR </span>COUNTRY</p>
                    <p className="card_total card_samll">INDIA</p>
                </div>
            </div>
            </li>

            <li className='card ca2'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>TOTAL </span>RECOVERED</p>
                    <p className="card_total card_samll">{data.recovered}</p>
                </div>
            </div>
            </li>
            <li className='card ca3'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>TOTAL </span>CONFIRMED</p>
                    <p className="card_total card_samll">{data.confirmed}</p>
                </div>
            </div>
            </li>

            <li className='card ca2'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>TOTAL </span>DEATHS</p>
                    <p className="card_total card_samll">{data.deaths}</p>
                </div>
            </div>
            </li>

            <li className='card ca3'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>TOTAL </span>ACTIVE</p>
                    <p className="card_total card_samll">{data.active}</p>
                </div>
            </div>
            </li>

            <li className='card ca1'>
            <div className="card_main">
                <div className="card_inner">
                    <p className="card_name"><span>LAST </span>UPDATE</p>
                    <p className="card_total card_samll">{data.lastupdatedtime}</p>
                </div>
            </div>
            </li>
        </ul>
        </section>
    </>
  )
}
