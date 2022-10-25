import React from "react";
import { Button } from "react-bootstrap";
import { BsPencil } from "react-icons/bs";
import GoalService from "../app/service/goalservice";
import Task from "./task";

export default class TaskList extends React.Component {

    state = {
        taskList: [],
        goalId: 0,
        goal: null
    }

    constructor(props) {
        super(props);
        this.service = new GoalService();
        this.state = {
            taskList: this.props.taskList,
            goalId: this.props.goalId,
            goal: this.props.goal
        }
    }

    createTask = () => {
        this.service.createTask({
            text: '',
            goalId: this.state.goalId
        }).then((response) => {
            this.state.goal.refreshTaskList();
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    updatedTaskList = () => {
        const tasks = this.state.taskList?.map(task => {
            return (
                <Task key={task.id} text={task.text} done={task.done} id={task.id} list={this} />
            )
        });
        return tasks;
    }

    render() {
        return (
            <div className="container g-0 p-0">
                <this.updatedTaskList />
                <div className="d-grid gap-2">
                    <Button variant="outline-light" onClick={e => { e.stopPropagation(); this.createTask(); }}><BsPencil /> Add task</Button>
                </div>
            </div>
        )
    }
}