import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { login, getCurrentUser, showLoginSuccess } from '@/service/authService';
import { ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

const Login: React.FC = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<LoginInfo>({username: '', password: ''});
  const [validateResult, setValidateResult] = useState({isUsernameError: false, isPasswordError: false});
  const [errorMsg, setErrorMsg] = useState('');
  const refUserName = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refPassword = useRef() as React.MutableRefObject<HTMLInputElement>;

  const TypingUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, username: event.currentTarget.value});
    setValidateResult({...validateResult, isUsernameError: false});
    setErrorMsg('');
  };

  const TypingPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({...userInfo, password: event.currentTarget.value});
    setValidateResult({...validateResult, isPasswordError: false});
    setErrorMsg('');
  };

  const formValidator = () =>{

    if(userInfo.username === ""){
      setValidateResult({...validateResult, isUsernameError: true});
      refUserName.current.focus();
      return false;
    }

    if(userInfo.password === ""){
      setValidateResult({...validateResult, isPasswordError: true});
      refPassword.current.focus();
      return false;
    }

    return true;
  };

  const SubmitHandler = (event: React.FormEvent<HTMLFormElement>) =>{
    
    event.preventDefault();

    if(formValidator()){
      login(userInfo)
      .then(data => {
        dispatch(getCurrentUser());
        dispatch(showLoginSuccess(true));
        navigate('/');
      })
      .catch(error => {
        setErrorMsg("帳號或密碼錯誤!");
        refUserName.current.focus();
      })
      .finally( () => setUserInfo({username: '', password: ''}) );
    }
  };
   
  return (
    <div className='flex justify-center items-center'>

      <form onSubmit={SubmitHandler} className="w-[80%] mt-10">
        
        <h2 className='text-3xl font-bold mb-10'>登入您的帳號</h2> 

        {/* 用戶名稱 */}
        <label htmlFor="username">
          用戶名稱
          <input type="text"
                 ref={refUserName}
                 value={userInfo.username}
                 onChange={TypingUserName}
                 className={`input-field ${validateResult.isUsernameError?"field-warning":"focus-input"}`}
          />
        </label>

        {/* 用戶欄位驗證錯誤訊息 */}
        <div className={`${validateResult.isUsernameError? "":"invisible"} text-red-500 text-sm height-[18px] mb-2`}>
          { "請輸入用戶名稱!" }
        </div>

        {/* 密碼 */}
        <label htmlFor="password">
          密碼
          <input type="password"
                 ref={refPassword}
                 value={userInfo.password}
                 onChange={TypingPassword}
                 className={`input-field ${validateResult.isPasswordError?"field-warning":"focus-input"}`}
          />
        </label>        
        
        {/* 密碼欄位驗證錯誤訊息 */}
        <div className={`${validateResult.isPasswordError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
          { "請輸入密碼!" }
        </div>

        <button className='login-btn'>登入</button>
        
        {/* 顯示錯誤訊息 */}
        { errorMsg && <ErrorInfo message={errorMsg}/> }

      </form>

    </div>
  )
};

export default React.memo(Login);