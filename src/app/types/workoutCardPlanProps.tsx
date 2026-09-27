import { Iworkout } from "./workoutType";
export interface WorkoutCardplanProps {
  workout: Iworkout;
  source: "today" | "saved";
}
