import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import {
    Button,
    Card,
    CardBody,
    Input,
    InputGroup,
    InputGroupAddon
} from "reactstrap";

const NewTodoForm = ({addTodo}) => {
    const [newTodo, setNewTodo] =useState("")
    const handleChange = e => {
        setNewTodo(e.target.value)
    }
    const handleClick = e => {
        if(newTodo) {
            addTodo({content:newTodo, id:uuidv4()})
            setNewTodo("")
        }
    }
    return (
        <Card>
            <CardBody>
                <InputGroup>
                    <InputGroupAddon>
                        <Button onClick={handleClick}>
                            Add Todo
                        </Button>
                    </InputGroupAddon>
                    <Input
                        type="text"
                        value={newTodo}
                        onChange={handleChange}
                    />
                </InputGroup>
            </CardBody>
        </Card>
    )
}

export default NewTodoForm