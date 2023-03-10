import React from "react";
import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const GuestGreeting = () => <h1 className={style.user}>歡迎進站</h1>;
const UserGreeting = () => <h1 className={style.guest}>請輸入帳密登入</h1>;

const LoginButton = () =>{

    const [isLoggedIn, setLoggedIn] = React.useState(false);

    const atClick = () =>{
        setLoggedIn(!isLoggedIn);
    };

    return(
        <div>
            <button className="button" onClick={atClick}>
                {isLoggedIn ? '登出' : '登入' }
            </button>

            { isLoggedIn ? <GuestGreeting/> : <UserGreeting/> }
            
            <div className="flex justify-center mt-5">
                
                <button id="light" className="px-4 py-2 rounded-full bg-white border-gray-400 border-2" onClick={()=>{alert('change to Dark')}}>
                    日間模式
                    <FontAwesomeIcon icon={faSun} className="text-yellow-500"/>
                </button>

                <button id="dark" className="px-4 py-2 rounded-full bg-gray-700 border-gray-400 border-2 text-white" onClick={()=>{alert('change to Light')}}>
                    夜間模式
                    <FontAwesomeIcon icon={faMoon} className="text-yellow-500" />
                </button>
            </div>

        </div>
    )
};

export default React.memo(LoginButton);