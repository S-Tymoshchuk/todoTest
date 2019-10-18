import React from 'react';
import TaskAdd from './../Task-add/TaskAdd';
import TaskList from './../Task-list/TaskList';

const App = () => {
    return (
        <div className="App">
            <TaskAdd/>
            <TaskList/>
        </div>
    )
}
export default App;