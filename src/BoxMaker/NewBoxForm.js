import React, { useState } from "react";
import { Button, Card, CardBody, Input, InputGroup, InputGroupAddon } from "reactstrap"
import { v4 as uuidv4 } from "uuid"

const NewBoxForm = ({addBox}) => {
    const [inputValues, setInputValues] = useState(
        {
            w:50,
            h:50,
            c:"#000000"
        }
    )
    const handleChange = e => {
        const { value, name } = e.target
        setInputValues( oldValues => ({...oldValues, [name]:value}) )
    }
    const handleSubmit = e => {
        addBox({
            id:uuidv4(),
            height:`${inputValues.h}px`,
            width: `${inputValues.w}px`,
            color:    inputValues.c
        })
    }

    return (
        <Card>
            <CardBody>
                <InputGroup>
                    <InputGroupAddon>
                        Width
                    </InputGroupAddon>
                    <Input
                        type="number"
                        max={500}
                        min={50}
                        name="w"
                        value={inputValues.w}
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon>
                        Height
                    </InputGroupAddon>
                    <Input
                        type="number"
                        max={500}
                        min={50}
                        name="h"
                        value={inputValues.h}
                        onChange={handleChange}
                    />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon>
                        Color
                    </InputGroupAddon>
                    <Input
                        type="color"
                        name="c"
                        value={inputValues.c}
                        onChange={handleChange}
                    />
                </InputGroup>
                <Button onClick={handleSubmit}>Make Box</Button>

            </CardBody>
        </Card>
    )
}

export default NewBoxForm