import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {
    const [listOfBoxes, setListOfBoxes] = useState([])

    const addBox = (newBox) => {
        setListOfBoxes( list => [...list, newBox])
    }
    const deleteBox = (boxId) => {
        setListOfBoxes( list => list.filter( box => {
            return box.id !== boxId
        }))
    }

    return (
        <div>
            <NewBoxForm addBox={addBox}/>
            <div>
                {listOfBoxes.map( box => {
                    return (<Box
                                id={box.id}
                                boxDetails={box}
                                deleteBox={deleteBox}
                            />)
                })}
            </div>
        </div>
    )
}

export default BoxList