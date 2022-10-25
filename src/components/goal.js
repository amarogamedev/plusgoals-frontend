import React from "react";
import { Accordion, ProgressBar } from 'react-bootstrap';

import { BsTrash } from "react-icons/bs"

import TaskList from "./tasklist";
import GoalService from "../app/service/goalservice";
import ModalController from "./custommodal";

export default class Goal extends React.Component {

    state = {
        text: '',
        done: false,
        id: '',
        goalList: null,
        taskList: []
    }

    constructor(props) {
        super(props);
        this.service = new GoalService();
        this.state = {
            text: this.props.text,
            done: this.props.done,
            id: this.props.id,
            goalList: this.props.goalList,
        }
        this.refreshTaskList();
    }

    markDone = () => {
        this.setState({ done: !this.state.done }, () => {
            this.service.updateGoal
                (this.state.id, {
                    text: this.state.text,
                    done: this.state.done
                }).then((response) => {
                    this.refreshTaskList();
                }).catch((error) => {
                    console.log(error.response.data);
                });
        });
    }

    changeName = (event) => {
        this.setState({ text: event.target.value }, () => {
            this.service.updateGoal
                (this.state.id, {
                    text: this.state.text,
                    done: this.state.done
                }).then((response) => {

                }).catch((error) => {
                    console.log(error.response.data);
                });
        });
    }

    delete = () => {
        this.service.deleteGoal
            (this.state.id).then((response) => {
                this.state.goalList.refreshGoalList();
            }).catch((error) => {
                console.log(error.response.data);
            });
    }

    refreshTaskList = () => {
        this.service.findAllTasksByGoalId(this.state.id)
            .then(response => {
                const list = response.data;
                this.setState({ taskList: null }, () => {
                    this.setState({ taskList: list });
                })
            }).catch(error => {
                console.log(error.response.data)
            })
    }

    updatedTaskList() {
        if (this.state.taskList) {
            return (
                <TaskList taskList={this.state.taskList} goalId={this.state.id} goal={this} />
            )
        }
    }

    updatedGoalProgress() {
        if (this.state.taskList) {
            let progress = this.getProgressPercentage();
            if (progress < 100) {
                return (
                    <div className="div me-2">
                        <ProgressBar animated variant="info" now={progress} label={`${progress}%`}>
                        </ProgressBar>
                    </div>
                )
            }
            else {
                return (
                    <div className="div me-2">
                        <ProgressBar animated variant="success" now={100} label={`${100}%`}>
                        </ProgressBar>
                    </div>
                )
            }
        }
    }

    getProgressPercentage() {
        let totalValue = 0;
        let partialValue = 0;
        for (let index = 0; index < this.state.taskList.length; index++) {
            totalValue += 1;
            if (this.state.taskList[index].done) {
                partialValue += 1;
            }
        }
        if(totalValue === 0) {
            return 0;
        }
        let percentage = 100 * partialValue / totalValue;
        return Math.round(percentage);
    }

    render() {
        return (
            <Accordion defaultActiveKey={['']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Button as="div">
                        <div className="div w-100">
                            <div className="container d-flex align-items-center mb-2">
                                <input className="form-check-input" type="checkbox" checked={this.state.done} onChange={this.markDone} onClick={e => { e.stopPropagation(); }} />
                                <input className="form-control mx-2 ms-3" value={this.state.text} onChange={this.changeName} placeholder="New goal" onClick={e => { e.stopPropagation(); }} />
                                <ModalController title="Confirm deletion?"
                                    icon={<BsTrash />}
                                    description="This action cannot be reversed, are you sure you want to delete this goal and it's tasks?"
                                    function={this.delete}
                                />
                            </div>
                            {this.updatedGoalProgress()}
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        {this.updatedTaskList()}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}