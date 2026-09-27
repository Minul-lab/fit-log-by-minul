
import { Iworkout } from '../types/workoutType';
import WorkoutCard from './workoutCard';

const getWorkouts = async () => {
  const res = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );
  const data = await res.json();
  return data;
};

const Library = async () => {
  const workoutDatas = await getWorkouts();

  return (
    <div className="container mx-auto">
      <p className="mt-5 mb-1 max-w-xl text-4xl font-extrabold text-white">
        THE LIBRARY
      </p>

      <p className="mb-5 max-w-lg text-lg text-slate-400">
        Twelve lifts covering every major muscle group
      </p>

      <div className="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {workoutDatas.map((workoutData: Iworkout) => {
          return (
            <WorkoutCard
              key={workoutData.id}
              workoutData={workoutData}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Library;

