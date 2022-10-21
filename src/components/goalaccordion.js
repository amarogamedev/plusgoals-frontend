import React from "react";
import { Accordion, Button } from 'react-bootstrap';

import Goal from "./goal";
import Task from "./task";

function GoalAccordion() {

    return (
        <Accordion defaultActiveKey={['']} alwaysOpen>
            <Accordion.Item eventKey="0">
                <Accordion.Button as="div">
                    <Goal />
                </Accordion.Button>
                <Accordion.Body>
                    <Task /><Task /><Task />
                    <div className="d-grid gap-2">
                        <Button variant="outline-primary">+ Create new task</Button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    )
}

export default GoalAccordion;