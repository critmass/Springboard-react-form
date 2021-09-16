import React from "react";
import { Button } from "reactstrap";

const Todo = ({deleteMe, color, details}) => {
    const handleClick = () => {
        deleteMe(details.id)
    }
    const style = {backgroundColor:color}
    return (
        <div style={style}>
            <Button onClick={handleClick}>X</Button> {details.content}
        </div>
    )
}

export default Todo