"use client";
import React, { useContext, useState } from "react";
import { WorkoutCreateContexts } from "../context/workoutContext";
import Link from "next/link";
import WorkoutCardplan from "../components/workoutPlanCard";

const MyPlan = () => {
  const { todaysPlan, saveLater } = useContext(WorkoutCreateContexts);
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(!isActive);
  };
  // Calculate stats from todaysPlan
  const totalExercises = todaysPlan.length;
  const totalMinutes = todaysPlan.reduce((acc:number, exercise:number) => {
    // Parse duration string like "25 min" to get the number
    const minutes = parseInt(exercise.duration) || 0;
    return acc + minutes;
  }, 0);
  const totalCalories = todaysPlan.reduce((acc, exercise) => {
    // Parse calories string like "180 kcal" to get the number
    const calories = parseInt(exercise.caloriesBurned) || 0;
    return acc + calories;
  }, 0);
  // for saved later
  const totalExercises2 = saveLater.length;
  const totalMinutes2 = saveLater.reduce((acc, exercise) => {
    // Parse duration string like "25 min" to get the number
    const minutes = parseInt(exercise.duration) || 0;
    return acc + minutes;
  }, 0);
  const totalCalories2 = saveLater.reduce((acc, exercise) => {
    // Parse calories string like "180 kcal" to get the number
    const calories = parseInt(exercise.caloriesBurned) || 0;
    return acc + calories;
  }, 0);

  return (
    <div className="container mx-auto">
      <h2 className="text-4xl font-extrabold font-white">MY PLAN</h2>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
        Cap of five lifts for today. Finish them , then load more.
      </p>
      <div className="container mx-auto bg-[#21252f] rounded-2xl grid grid-cols-3 py-12 place-items-center mt-5">
        <div className="flex flex-col">
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
            Exercises
          </p>
          <h2 className="text-4xl font-extrabold font-white">
            {isActive ? totalExercises : totalExercises2}
          </h2>
        </div>
        <div>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
            Minutes
          </p>
          <h2 className="text-4xl font-extrabold font-white">
            {isActive ? totalMinutes : totalMinutes2}
          </h2>
        </div>
        <div>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-400">
            Calories
          </p>
          <h2 className="text-4xl font-extrabold font-white">
            {isActive ? totalCalories : totalCalories2}
          </h2>
        </div>
      </div>
      <div className="mt-5">
        <button
          className={`p-4 border border-[#c2f800] rounded-l-xl ${
            isActive ? "bg-[#c2f800] text-black" : "bg-transparent text-white"
          }`}
          onClick={handleActive}
        >
          Today's Plan
        </button>

        <button
          className={`py-4 px-8 border border-[#c2f800] rounded-r-xl ${
            !isActive ? "bg-[#c2f800] text-black" : "bg-transparent text-white"
          }`}
          onClick={handleActive}
        >
          Saved
        </button>
      </div>
      <div className="my-4 p-5 border border-slate-500 rounded-4xl">
        {isActive ? (
          <div>
            {todaysPlan.length > 0 ? (
              <div className="grid grid-cols-1">
                {todaysPlan.map((workout) => (
                  <WorkoutCardplan
                    key={workout.id}
                    workout={workout}
                    source="today"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 place-items-center p-5">
                <h2 className="max-w-xl text-5xl font-extrabold leading-[1.05] text-white">
                  Nothing here Yet
                </h2>
                <p className="text-slate-500 text-md my-3">
                  Browse the Library and add a lift to get today moving
                </p>
                <Link href="/">
                  <button className="flex-1 rounded-full border border-gray-600 px-5 py-2 text-sm hover:text-slate-900 hover:bg-[#c2f800] sm:flex-none">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        ) : (
          <div>
            {saveLater.length > 0 ? (
              <div className="grid grid-cols-1">
                {saveLater.map((workout) => (
                  <WorkoutCardplan
                    key={workout.id}
                    workout={workout}
                    source="saved"
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 place-items-center p-5">
                <h2 className="max-w-xl text-5xl font-extrabold leading-[1.05] text-white">
                  Nothing here Yet
                </h2>
                <p className="text-slate-500 text-md my-3">
                  Browse the Library and add a lift to get today moving
                </p>
                <Link href="/">
                  <button className="flex-1 rounded-full border border-gray-600 px-5 py-2 text-sm hover:text-slate-900 hover:bg-[#c2f800] sm:flex-none">
                    Go to workouts
                  </button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPlan;
