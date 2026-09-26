"use client"
import React, { useContext } from 'react';
import { WorkoutCreateContexts } from '../context/workoutContext';

const MyPlan = () => {
    const {todaysPlan ,saveLater} = useContext(WorkoutCreateContexts);
    console.log(saveLater)
    return (
        <div>
            Myplan page
        </div>
    );
};

export default MyPlan;