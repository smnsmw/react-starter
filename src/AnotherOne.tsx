import React from "react";
import { FC, useState } from "react";

export const AnotherOne: FC<any> = () => {
    const [state, setState] = useState(5);
    return (
        <div className={'another'} style={{border: '1px solid red', display: 'inline-block'}}>
            {state}
            hello state unchanged, goo
            <button onClick={() => setState((s) => ++s)}>with red one</button>
        </div>
    )
}