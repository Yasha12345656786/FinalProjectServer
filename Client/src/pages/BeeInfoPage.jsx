import { useState,useEffect } from "react";

import React from 'react'

export default function BeeInfoPage() {
    const [pages,SetPages]=useState([]);

    async function LoadData(){
        try {
            let res = await fetch('https://cloud.mongodb.com/v2/64785ecc5d09866b3e8e35f3#/metrics/replicaSet/64785f4404e4584bb71555b4/explorer/KenDvorim/BeeInfoPages/find');
            let data = await res.json();
        } catch (error) {
            
        }
    }
  return (
    <div>BeeInfoPage</div>
  )
}
