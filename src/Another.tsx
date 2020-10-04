import React from "react";
import { FC, useState } from "react";
import styles from './another.module.scss';
export const Another: FC<any> = () => {
    const [state, setState] = useState(1);
    return (
        <div className={'another'} style={{border: '1px solid gray', display: 'inline-block'}}>
            {state}
            <button className={styles.red} onClick={() => setState((s) => ++s)}>With gay, md</button>
        </div>
    )
}