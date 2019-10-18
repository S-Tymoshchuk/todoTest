import React from 'react';
import {connect} from 'react-redux';

import {addTaskActionCreator} from './../../redux/reducer';
import {updateTestAct} from "../../redux/reducer";

const TaskAdd = (props) => {
    console.log(props)
    let sendTask = () => {
        let currentLabel = props.newTaskText;
        if (currentLabel === '') {
            alert("INPUT YOUR TASK ! ! !")
        } else {
            props.addTask(currentLabel);
        }
    }

    let onPostChange = (e) => {
        let text = e.target.value;
        props.updateTask(text)
        console.log(text)
    }


    return (
        <div>
            <input placeholder={'input your task'}
                   onChange={onPostChange}/>
            <button onClick={sendTask}>add task</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state,
        newTaskText: state.newTaskText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (labelNewTask) => {
            dispatch(addTaskActionCreator(labelNewTask));
        },
        updateTask: (text) => {
            dispatch(updateTestAct(text))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskAdd);