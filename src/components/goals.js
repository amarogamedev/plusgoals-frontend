import React from "react";
import { Button } from "react-bootstrap";

import GoalAccordion from "./goalaccordion";

import GoalService from "../app/service/goalservice";

class Goals extends React.Component {

    state = {
        text: '',
    }

    constructor() {
        super();
        this.service = new GoalService();
    }

    createGoal = () => {
        this.service.createGoal({text: this.state.text
        }).then((response) => {
            console.log(response.data);
        }).catch((erro) => {
            console.log(erro.response.data);
        });
    }

    render() {
        return (
            <div className="container">
                <GoalAccordion />
                <div className="d-grid gap-2">
                    <Button onClick={this.createGoal}>+ Create new goal</Button>
                </div>
            </div>
        )
    }
}

export default Goals;