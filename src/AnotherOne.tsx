import React from "react";
import { FC, useState } from "react";

export const AnotherOne: FC<any> = () => {
    const [state, setState] = useState(5);
    return (
        <div className={'another-one'} style={{border: '1px solid red', display: 'block'}}>
            {state}
             <br/>
             hello state unchanged, goo 3
            <button onClick={() => setState((s) => ++s)}>with red one</button>
        </div>
    )
}