"use client";
import Image from "next/image";
import { Bounce, toast } from "react-toastify";
import { Iworkout } from "../types/workoutType";
import Link from "next/link";
import { useContext } from "react";
import { WorkoutCreateContexts } from "../context/workoutContext";
import { WorkoutCardplanProps } from "../types/workoutCardPlanProps";
const WorkoutCardplan = ({ workout, source }: WorkoutCardplanProps) => {
  const { todaysPlan, setTodaysPlan, saveLater, setSaveLater } = useContext(
    WorkoutCreateContexts,
  );
  const handleRemove = () => {
    if (source === "today") {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== workout.id));
      toast.error("Removed from today's plan", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } else {
        toast.error("Removed from saved", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      setSaveLater((prev) => prev.filter((item) => item.id !== workout.id));
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-gray-800 bg-[#12151b] p-4 sm:flex-row sm:items-center my-2">
      {/* Image */}
      <div className="relative h-48 w-full sm:h-22 sm:w-40">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="rounded-xl object-cover"
        />
      </div>

      {/* Information */}
      <div className="flex-1">
        <h3 className="text-lg font-bold uppercase text-white">
          {workout.name}
        </h3>

        <p className="text-sm text-gray-400">{workout.equipment}</p>

        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-200">
          <span>◯ {workout.duration} min</span>

          <span>🔥 {workout.caloriesBurned} kcal</span>

          <span>☆ {workout.rating}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 sm:shrink-0">
        <Link href={`/${workout.id}`}>
          <button className="flex-1 rounded-full border border-gray-600 px-5 py-2 text-sm text-white hover:bg-gray-800 sm:flex-none">
            View Details
          </button>
        </Link>

        <button className="flex-1 rounded-full bg-[#c2f800] px-5 py-2 text-sm font-medium text-black hover:bg-[#b5e800] sm:flex-none">
          Mark as Done
        </button>
        <button className="btn btn-outline btn-error rounded-full" onClick={()=>handleRemove()}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default WorkoutCardplan;
