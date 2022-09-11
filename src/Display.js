import React from "react";

const Display = (props) => {
    const { personData } = props;

    const personList = personData.map((info) => {
        return (
            <React.Fragment key={info.contact}>
                {info.firstName}
                {info.age}
            </React.Fragment>
        )
    });

    return (
        //jsx
        <React.Fragment>
            {personList}
        </React.Fragment>
    )
}

export default Display;

//in es6
// arr.map((ele) => {
//     return ele
// })