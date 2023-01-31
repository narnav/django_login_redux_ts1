import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { loginAsync, selectUserName, selectLogged, selectEmail ,logout} from './loginSlice';
import styles from './Counter.module.css';

export const  Login=()=> {
    const userName = useAppSelector(selectUserName);
    const email = useAppSelector(selectEmail);

    const logged = useAppSelector(selectLogged);
    const dispatch = useAppDispatch();
    const [username, setuser] = useState("")
    const [password, setpwd] = useState("")

    return (
        <div>

            {logged ? <div>
                userName:{userName}, email:{email}{" "}
                <button onClick={()=>dispatch(logout())}>Logout</button>
            </div> :
                <div className={styles.row}>
                    UserName:<input onChange={(e) => setuser(e.target.value)} />
                    Pwd:<input onChange={(e) => setpwd(e.target.value)} /><br />
                    <button onClick={() => dispatch(loginAsync({ username, password }))}>login</button>
                </div>}
        </div>
    );
}
