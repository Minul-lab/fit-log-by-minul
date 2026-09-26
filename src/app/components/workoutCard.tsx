import Image from "next/image";
import { FaRegClock, FaFire, FaStar } from "react-icons/fa";
import { Iworkout } from "../types/workoutType";
import Link from "next/link";
import { link } from "fs";

const WorkoutCard = ({workoutData}:{workoutData:Iworkout}) => {
  return (
    <Link href={`/${workoutData.id}`}>
      <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-slate-700 hover:border-[#c2f800] bg-[#15171c] text-white">
        {/* Image */}
        <div className="relative h-55 w-full">
          <Image
            src={workoutData.image}
            alt={workoutData.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="mb-5 flex gap-2">
            {workoutData.muscleGroups.map((muscle, ind) => {
              return (
                <span
                  key={ind}
                  className="rounded-full bg-[#c2f800] px-3 py-1 text-sm font-semibold text-black"
                >
                  {muscle}
                </span>
              );
            })}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-extrabold">{workoutData.name}</h2>

          {/* Category */}
          <p className="mt-1 text-slate-400">{workoutData.equipment}</p>

          {/* Stats */}
          <div className="mt-5 flex items-center gap-5 border border-slate-700 px-3 py-3 text-sm text-slate-300">
            <div className="flex items-center gap-2">
              <FaRegClock />
              <span>{workoutData.duration}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaFire />
              <span>{workoutData.caloriesBurned}</span>
            </div>

            <div className="flex items-center gap-2">
              <FaStar />
              <span>{workoutData.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
