"use client";

import React, { useContext, useState } from "react";
import { WorkoutCreateContexts } from "../context/workoutContext";
import Link from "next/link";
import WorkoutCardplan from "../components/workoutPlanCard";
import { Iworkout } from "../types/workoutType";

const MyPlan = () => {
  const { todaysPlan, saveLater } = useContext(WorkoutCreateContexts) as {
    todaysPlan: Iworkout[];
    saveLater: Iworkout[];
  };

  const [sort, setSort] = useState<"duration" | "calories" | "name">(
    "duration",
  );

  const [isActive, setIsActive] = useState(true);

  // Current workout list
  const crntWorkout = isActive ? todaysPlan : saveLater;

  // Sort workouts
  const sortedWorkout = [...crntWorkout].sort((a, b) => {
    if (sort === "duration") {
      return a.duration - b.duration;
    }

    if (sort === "calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    return a.name.localeCompare(b.name);
  });

  // Today's plan
  const totalExercises = todaysPlan.length;

  const totalMinutes = todaysPlan.reduce((acc, exercise) => {
    return acc + (exercise.duration || 0);
  }, 0);

  const totalCalories = todaysPlan.reduce((acc, exercise) => {
    return acc + (exercise.caloriesBurned || 0);
  }, 0);

  // Saved
  const totalExercises2 = saveLater.length;

  const totalMinutes2 = saveLater.reduce((acc, exercise) => {
    return acc + (exercise.duration || 0);
  }, 0);

  const totalCalories2 = saveLater.reduce((acc, exercise) => {
    return acc + (exercise.caloriesBurned || 0);
  }, 0);

  const currentPlan = isActive ? todaysPlan : saveLater;

  return (
    <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <section className="pt-6 sm:pt-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          MY PLAN
        </h2>

        <p className="mt-3 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </section>

      {/* Stats */}
      <section className="mt-5 grid grid-cols-1 overflow-hidden rounded-2xl bg-slate-700 sm:grid-cols-3 sm:gap-px">
        <div className="bg-[#21252f] px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base text-slate-400 sm:text-lg">Exercises</p>

          <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
            {isActive ? totalExercises : totalExercises2}
          </h2>
        </div>

        <div className="bg-[#21252f] px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base text-slate-400 sm:text-lg">Minutes</p>

          <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
            {isActive ? totalMinutes : totalMinutes2}
          </h2>
        </div>

        <div className="bg-[#21252f] px-6 py-6 sm:px-8 sm:py-8">
          <p className="text-base text-slate-400 sm:text-lg">Calories</p>

          <h2 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
            {isActive ? totalCalories : totalCalories2}
          </h2>
        </div>
      </section>

      {/* Tabs + Sort */}
      <div className="mt-5 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Tabs */}
        <div className="flex w-full sm:w-auto">
          <button
            className={`flex-1 rounded-l-xl border border-[#c2f800] px-4 py-3 text-sm sm:flex-none sm:px-6 sm:text-base ${
              isActive ? "bg-[#c2f800] text-black" : "bg-transparent text-white"
            }`}
            onClick={() => setIsActive(true)}
          >
            Today's Plan
          </button>

          <button
            className={`flex-1 rounded-r-xl border border-l-0 border-[#c2f800] px-4 py-3 text-sm sm:flex-none sm:px-8 sm:text-base ${
              !isActive
                ? "bg-[#c2f800] text-black"
                : "bg-transparent text-white"
            }`}
            onClick={() => setIsActive(false)}
          >
            Saved
          </button>
        </div>

        {/* Sort */}
        <div className="w-full sm:w-auto">
          <select
            value={sort}
            onChange={(e) =>
              setSort(e.target.value as "duration" | "calories" | "name")
            }
            className="w-full rounded-xl border border-[#c2f800] bg-[#15171C] px-4 py-3 text-white outline-none sm:w-40 sm:py-2"
          >
            <option value="name">Name</option>
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
          </select>
        </div>
      </div>

      {/* Workout list */}
      <section className="my-5 rounded-2xl border border-slate-600 p-3 sm:p-5">
        {currentPlan.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {sortedWorkout.map((workout) => (
              <WorkoutCardplan
                key={workout.id}
                workout={workout}
                source={isActive ? "today" : "saved"}
              />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center px-4 py-10 text-center">
            <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Nothing here Yet
            </h2>

            <p className="my-3 max-w-md text-sm text-slate-500 sm:text-base">
              Browse the Library and add a lift to get today moving
            </p>

            <Link href="/">
              <button className="rounded-full border border-gray-600 px-5 py-2 text-sm text-white transition hover:bg-[#c2f800] hover:text-slate-900">
                Go to workouts
              </button>
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default MyPlan;
