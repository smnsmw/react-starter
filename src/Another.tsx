import React from "react";
import { FC, useState } from "react";

export const Another: FC<any> = () => {
    const [state, setState] = useState(5);
    return (
        <div className={'another'} style={{border: '1px solid gray', display: 'inline-block'}}>
            {state}
            <button onClick={() => setState((s) => ++s)}>With gray, so</button>
        </div>
    )
}