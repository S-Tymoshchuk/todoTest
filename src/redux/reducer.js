const ADD_TASK = 'ADD-TASK';
const DELETE_TASK = 'DELETE-TASK';


let initialState = {
    tasks: [
        {id: 1, label: 'first task', important: false},
        {id: 2, label: 'second task', important: false},
        {id: 3, label: 'third task', important: false}
    ],
    newTaskText: ''
};


let reducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TASK:
            let newTask = {
                id: state.tasks.length + 2,
                label: state.newTaskText,
                important: false
            };
            return {
                ...state,
                tasks: [...state.tasks, newTask]
            };
        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter((task) => {
                    return task.id !== action.id
                })
            };

        case "UPDATE-TASK":
            return {
                ...state, newTaskText: action.labelNewTask
            };


        default:
            return state;
    }
};


export const addTaskActionCreator = (labelNewTask) => {
    return {
        type: ADD_TASK, labelNewTask
    }
};
export const updateTestAct = (labelNewTask) => {
    return {
        type: "UPDATE-TASK", labelNewTask
    }
};

export const deleteTaskActionCreator = (id) => {
    return {
        type: DELETE_TASK, id
    }
};

export const importantTaskActionCreator = (id) => {
    return {

    }
};


export default reducer;