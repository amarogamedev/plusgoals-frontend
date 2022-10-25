import React from "react";
import { Button } from "react-bootstrap";
import GoalService from "../app/service/goalservice";
import { BsPlusLg } from "react-icons/bs";
import TaskService from "../app/service/taskservice";
import Task from "./task";

export default class TaskList extends React.Component {

    state = {
        id: '',
        taskList: []
    }

    constructor(props) {
        super(props);
        this.service = new TaskService();
        this.goalService = new GoalService();
        this.state = {
            id: this.props.id,
            taskList: this.props.list
        }
        this.updateList();
    }

    componentDidMount () {
        this.mounted = true;
    }

    updateList = () => {
        this.goalService.findAllTasks(this.state.id)
            .then(response => {
                const list = response.data;
                this.setState({ taskList: list })
            }).catch(error => {
                console.log(error.response.data)
            })
    }

    createTask = () => {
        this.service.createTask({
            text: '',
            goalId: this.state.id
        }).then((response) => {
            this.updateList();
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    updatedTaskList = () => {
        if(!this.mounted) {
            return;
        }
        const tasks = this.state.taskList.map(task => {
            return (
                <Task key={task.id} text={task.text} done={task.done} id={task.id} list={this} />
            )
        });
        return tasks;
    }

    render() {
        return (
            <div className="container">
                <this.updatedTaskList/>
                <div className="d-grid gap-2">
                    <Button variant="outline-primary" onClick={e => { e.stopPropagation(); this.createTask();}}><BsPlusLg /> Add task</Button>
                </div>
            </div>
        )
    }
}