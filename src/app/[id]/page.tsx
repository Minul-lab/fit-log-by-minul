import { promises } from 'dns';
import Image from 'next/image';
import React from 'react';
interface IworkoutDetail {
    params: Promise<{
        id:string;
    }>;
}

const page = async({params}:IworkoutDetail) => {
    const {id} = await params;
    const getWorkoutDetails = async() => {
        const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
        const data = await res.json();
        return data;
    }
    const dataDetail = await getWorkoutDetails();
    
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Image Section */}
          <div className="lg:col-span-2">
            <Image src={dataDetail.image} width={500} height={1000} alt={dataDetail.name}></Image>
          </div>

          {/* Details Section */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
              {dataDetail.name}
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {dataDetail.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {dataDetail.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="bg-lime-400 text-black px-3 py-1 rounded-full text-xs font-semibold"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Info Grid */}
            <div className="bg-gray-900 rounded-xl p-6 mb-8 border border-gray-800">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Equipment
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.equipment}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Difficulty
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.difficulty}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Sets
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.sets}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Reps
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.reps}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Duration
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.duration}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-gray-800">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Calories
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.calories}
                  </span>
                </div>

                <div className="flex justify-between items-center py-3">
                  <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Rating
                  </span>
                  <span className="text-gray-300 font-medium">
                    {dataDetail.rating}
                  </span>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-wide">
                Instructions
              </h2>
              <ol className="space-y-3 list-decimal list-inside">
                {dataDetail.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-gray-400 text-sm leading-relaxed"
                  >
                    {instruction}
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                📋 Add to today's plan
              </button>
              <button className="border border-gray-700 hover:bg-gray-900 text-gray-300 font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2">
                💾 Save for later
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default page;