import React from 'react';

let TaskListItem = ({task, deleteItem,taskID, toggleImportantTask}) => {


    return (
        <div >
            {task}
            <button onClick={()=>{toggleImportantTask(taskID)}} >important</button>
            <button onClick={()=>{deleteItem(taskID)}}>delete</button>
        </div>
    )
}

export default TaskListItem;