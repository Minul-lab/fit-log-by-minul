
import { Iworkout } from '../types/workoutType';
import WorkoutCard from './workoutCard';



const getWorkouts = async() => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data =await res.json();
    return data;
}

const Library = async() => {
    const workoutDatas = await getWorkouts();
    // console.log(workoutDatas)
    return (
      <div className="container mx-auto">
        <p className="max-w-xl text-4xl font-extrabold text-white mt-5 mb-1">
          THE LIBRARY
        </p>
        <p className="mb-5 max-w-lg text-lg text-slate-400">
          Twelve lifts covering every major muscle group
        </p>
        
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
            {workoutDatas.map((workoutData: Iworkout) => {
              return (
                <WorkoutCard key={workoutData.id} workoutData={workoutData} />
              );
            })}
          </div>
        
      </div>
    );
};

export default Library;