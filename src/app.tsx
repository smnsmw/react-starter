import React, { FC } from 'react';
import ReactDom from 'react-dom';

export const App: FC<any> = () => {
    return (
        <div>Holaso</div>
    )
}

ReactDom.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
);