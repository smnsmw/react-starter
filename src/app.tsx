import React, { FC, Fragment, useState } from 'react';
import ReactDom from 'react-dom';
import { Another } from './Another.tsx';
import { AnotherOne } from './AnotherOne.tsx';

export const App: FC<any> = () => {
    const [state, setState] = useState(0);
    return (
        <div className={'app'}>
            <Another/>
            <AnotherOne/>
            <br/>
            <span>coun {state}</span>
            <div>Am root</div>
            <button onClick={() => setState((s) => ++s)}>increse</button>
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);