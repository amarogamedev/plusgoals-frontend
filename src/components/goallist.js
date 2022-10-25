import React from "react";
import { Button } from "react-bootstrap";
import { BsPlusLg } from "react-icons/bs";
import Goal from "./goal";
import GoalService from "../app/service/goalservice";

export default class GoalList extends React.Component {

    state = {
        goalList: []
    }

    constructor() {
        super();
        this.service = new GoalService();
        this.updateList();
    }

    componentDidMount () {
        this.mounted = true;
    }

    updateList = () => {
        this.service.findAll()
            .then(response => {
                const list = response.data;
                this.setState({ goalList: list })
            }).catch(error => {
                console.log(error.response.data)
            })
    }

    createGoal = () => {
        this.service.createGoal({
            text: ''
        }).then((response) => {
            this.updateList();
        }).catch((error) => {
            console.log(error.response.data);
        });
    }

    updatedGoalList = () => {
        if(!this.mounted) {
            return;
        }
        const goals = this.state.goalList.map(goal => {
            return (
                <Goal key={goal.id} text={goal.text} done={goal.done} id={goal.id} list={this} taskIds={goal.taskIds}/>
            )
        });
        return goals;
    }

    render() {
        return (
            <div className="container">
                <this.updatedGoalList />
                <div className="d-grid gap-2">
                    <Button onClick={this.createGoal}><BsPlusLg /> Create new goal</Button>
                </div>
            </div>
        )
    }
}