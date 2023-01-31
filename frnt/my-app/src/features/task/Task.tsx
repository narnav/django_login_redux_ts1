import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectLogged,selectAccess } from '../login/loginSlice';
import {getAllTasksAsync,selectTasks} from './taskSlice';
export const  Task=()=> {

    const logged = useAppSelector(selectLogged);
    const access = useAppSelector(selectAccess);
    const tasks = useAppSelector(selectTasks);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if(logged)
        {
            dispatch(getAllTasksAsync(access))
        }
    }, [logged])

    
    return (
        <div style={{backgroundColor:"wheat",padding:"100px"}}>
            Tasks<hr/>
            {logged ?
            tasks.map((task,i)=><div>id:{task.id},desc: {task.description},title:{task.title},completed{task.completed?"true":"flase"}</div>):""}
            {/* {logged ?<button onClick={()=>dispatch(getAllTasksAsync(access))} > get tasks </button>:"not logged"} */}

            
        </div>
    );
}
