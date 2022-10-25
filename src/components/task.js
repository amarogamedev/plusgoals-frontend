import React from "react";
import { BsTrash } from "react-icons/bs"
import TaskService from "../app/service/taskservice";
import ModalController from "./custommodal";

export default class Task extends React.Component {

    state = {
        text: '',
        done: false,
        id: ''
    }

    constructor(props) {
        super(props);
        this.service = new TaskService();
        this.list = this.props.list;
        this.state = {
            text: this.props.text,
            done: this.props.done,
            id: this.props.id
        }
    }

    markDone = () => {
        this.setState({ done: !this.state.done }, () => {
            this.service.updateTask
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
            this.service.updateTask
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
        this.service.deleteTask
            (this.state.id).then((response) => {
                this.list.updateList();
            }).catch((error) => {
                console.log(error.response.data);
            });
    }

    render() {
        return (
            <div className="container d-flex align-items-center mb-2">
                <input className="form-check-input" type="checkbox" checked={this.state.done} onChange={this.markDone} onClick={e => { e.stopPropagation(); }} />
                <input className="form-control mx-2" value={this.state.text} onChange={this.changeName} placeholder="New task" onClick={e => { e.stopPropagation(); }} />
                <ModalController title="Confirm deletion?"
                    icon={<BsTrash />}
                    description="This action cannot be reversed, are you sure you want to delete this task?"
                    function={this.delete}
                />
            </div>
        )
    }
}