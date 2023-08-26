import React, {useContext, useState,useEffect}from 'react';
import { MemoryContext } from '../Context/MemoryContext';
import { AdminContext } from '../Context/AdminContext';
export default function MemoryGame() {
  const {currentCrads, UpdateScore}= useContext(MemoryContext);
  const {admin} = useContext(AdminContext);
  return (
    <div>memoryGame</div>
  )
}
