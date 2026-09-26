"use client";
import React, { useContext } from "react";
import { Iworkout } from "../types/workoutType";
import { WorkoutCreateContexts } from "../context/workoutContext";
const BtnSaveForLater = ({dataDetail}:{dataDetail:Iworkout}) => {
    const {saveLater, setSaveLater} = useContext(WorkoutCreateContexts)
        const handleSaveForLater = ()=> {
            
            setSaveLater([...saveLater, dataDetail])
            alert("save later updated")
        }
  return (
    <div>
      <button className="border border-gray-700 hover:bg-gray-900 text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      onClick={handleSaveForLater}>
        💾 Save for later
      </button>
    </div>
  );
};

export default BtnSaveForLater;
