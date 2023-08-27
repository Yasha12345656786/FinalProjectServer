import { useState,useEffect } from "react";

import React from 'react'

export default function BeeInfoPage() {
    const [page,SetPage]=useState('');

    async function LoadData(){
        try {
            let res = await fetch('https://www.pestworldforkids.org/pest-guide/bees/');
            let data = await res.json();
            //SetPage(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
      LoadData();
    },[])
  return (
    <>
    <h1>Bee Info Pages</h1>
    <p>Here You Can Learn More About Bees...</p>

    </>
  )
}
