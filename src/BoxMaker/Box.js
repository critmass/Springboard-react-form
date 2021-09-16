import React from "react";

const Box = ({boxDetails, deleteBox}) => {
    const style = {
        backgroundColor:boxDetails.color,
        width:boxDetails.width,
        height:boxDetails.height
    }
    const handleClick = e => {
        deleteBox(boxDetails.id)
    }

    return (
        <div
            style={style}
            className="box "
            onClick={handleClick}
        />
    )
}

export default Box