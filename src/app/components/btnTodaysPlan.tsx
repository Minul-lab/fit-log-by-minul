"use client";
import React, { useContext } from "react";
import { Iworkout } from "../types/workoutType";
import { WorkoutCreateContexts } from "../context/workoutContext";
import { Bounce, toast } from "react-toastify";

const BtnTodaysPlan = ({ dataDetail }: { dataDetail: Iworkout }) => {
  const { todaysPlan, setTodaysPlan } = useContext(WorkoutCreateContexts);

  const handleTodaysPlan = () => {
    setTodaysPlan([...todaysPlan, dataDetail]); 
    // console.log("btn triggered", [...todaysPlan]);
    toast.success("Added to today's plan", {
      position: "top-right",
      
      transition: Bounce,
    });
  };

  return (
    <div>
      <button
        className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        onClick={handleTodaysPlan}
      >
        📋 Add to today's plan
      </button>
    </div>
  );
};

export default BtnTodaysPlan;
