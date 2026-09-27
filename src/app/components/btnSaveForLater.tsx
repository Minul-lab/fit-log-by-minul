"use client";
import React, { useContext } from "react";
import { Iworkout } from "../types/workoutType";
import { WorkoutCreateContexts } from "../context/workoutContext";
import { Bounce, toast } from "react-toastify";

const BtnSaveForLater = ({ dataDetail }: { dataDetail: Iworkout }) => {
  const { saveLater, setSaveLater } = useContext(WorkoutCreateContexts) as {
    saveLater: Iworkout[];
    setSaveLater: React.Dispatch<React.SetStateAction<Iworkout[]>>;
  };
  const handleSaveForLater = () => {
    const alreadySaved = saveLater.some(
      (workout) => workout.id === dataDetail.id,
    );

    if (alreadySaved) {
      toast.info("Already added to Save Later", {
        position: "top-right",
        transition: Bounce,
      });
      return;
    }

    setSaveLater([...saveLater, dataDetail]);

    toast.success("Saved for later", {
      position: "top-right",
      transition: Bounce,
    });
  };
  return (
    <div>
      <button
        className="border border-gray-700 hover:bg-gray-900 text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        onClick={handleSaveForLater}
      >
        💾 Save for later
      </button>
    </div>
  );
};

export default BtnSaveForLater;
