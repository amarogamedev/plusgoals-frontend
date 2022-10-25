import React from "react";
import { Accordion } from 'react-bootstrap';

import { BsTrash } from "react-icons/bs"

import TaskList from "./tasklist";
import GoalService from "../app/service/goalservice";
import ModalController from "./custommodal";

export default class Goal extends React.Component {

    state = {
        text: '',
        done: false,
        id: '',
        taskIds: []
    }

    constructor(props) {
        super(props);
        this.service = new GoalService();
        this.list = this.props.list;
        this.state = {
            text: this.props.text,
            done: this.props.done,
            id: this.props.id,
            taskIds: this.props.taskIds
        }
    }

    markDone = () => {
        this.setState({ done: !this.state.done }, () => {
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
                this.list.updateList();
            }).catch((error) => {
                console.log(error.response.data);
            });
    }

    render() {
        return (
            <Accordion defaultActiveKey={['']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Button as="div">
                        <div className="container d-flex align-items-center">
                            <input className="form-check-input" type="checkbox" checked={this.state.done} onChange={this.markDone} onClick={e => { e.stopPropagation(); }} />
                            <input className="form-control mx-2" value={this.state.text} onChange={this.changeName} placeholder="New goal" onClick={e => { e.stopPropagation(); }} />
                            <ModalController title="Confirm deletion?"
                                icon={<BsTrash />}
                                description="This action cannot be reversed, are you sure you want to delete this goal and it's tasks?"
                                function={this.delete}
                            />
                        </div>
                    </Accordion.Button>
                    <Accordion.Body>
                        <TaskList id={this.state.id} />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}