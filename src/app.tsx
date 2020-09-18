import React, { FC, Fragment, useState } from 'react';
import ReactDom from 'react-dom';
import { Another } from './Another';
import { AnotherOne } from './AnotherOne';

export const App: FC<any> = () => {
    const [state, setState] = useState(0);
    return (
        <div className={'app'}>
            <Another/>
            <AnotherOne/>
            <br/>
            <span>coun {state}</span>
            <div>Am root12</div>
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