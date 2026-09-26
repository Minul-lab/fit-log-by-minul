"use client";

import React, { useState , ReactNode} from "react";
import { createContext } from "react"; // ✅ Import from 'react'

export const WorkoutCreateContexts = createContext({}); // ✅ Create context
const WorkoutProvider = ({ children }:{children: React.ReactNode}) => {
  
  const [todaysPlan, setTodaysPlan] = useState([]);
  const [saveLater, setSaveLater] = useState([]);

  const sharedData = {
    todaysPlan,
    setTodaysPlan,
    saveLater,
    setSaveLater,
  };

  return (
    <WorkoutCreateContexts.Provider value={sharedData}>
      {children} 
    </WorkoutCreateContexts.Provider>
  );
};

export default WorkoutProvider;
