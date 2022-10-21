import React from "react";
import { Button } from "react-bootstrap";
import { BsTrash } from "react-icons/bs"

function Goal() {
    return (
        <div className="container d-flex align-items-center">
            <input className="form-check-input" type="checkbox" value="" />
            <input className="form-control mx-3" id="goalName" rows="1" placeholder="New goal" />
            <Button variant="outline-primary"><BsTrash/></Button>
        </div>
    )
}

export default Goal;