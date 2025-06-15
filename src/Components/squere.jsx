import React from 'react';

export default function Squere ({value, onSquareClick}) {
    // const [value, setValue] = React.useState(null);
    //
    // function handleClick() {
    //     // setValue("x")
    //     console.log("click");
    // }

    return (
        <>
            <button onClick={onSquareClick}
                    className="square">{value}</button>
        </>
    )
}


