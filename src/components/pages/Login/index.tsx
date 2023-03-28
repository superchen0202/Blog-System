import React, { useState, useEffect, useRef } from 'react';
import Container from '@/components/shared/Container';
import NavBar from '@/components/shared/NavBar';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { login, getCurrentUser, showLoginSuccess } from '@/service/authService';
import { ErrorInfo } from '@/components/shared/LoadingAndErrorInfo';

const Login: React.FC = () => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState<loginInfo>({username: '', password: ''});
  const [isValidate, setIsValidate] = useState({usernameError: false, passwordError: false});
  const refUserName = useRef() as React.MutableRefObject<HTMLInputElement>;
  const refPassword = useRef() as React.MutableRefObject<HTMLInputElement>;
  const [errorMsg, setErrorMsg] = useState('');
  
  const formValidator = () =>{

    if(userInfo.username === ""){
      setIsValidate({...isValidate, usernameError: true});
      refUserName.current.focus();
      return false;
    }

    if(userInfo.password === ""){
      setIsValidate({...isValidate, passwordError: true});
      refPassword.current.focus();
      return false;
    }

    return true;
  }

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
        setErrorMsg("Request failed with status code 400")
        refUserName.current.focus();
      })
      .finally( () => setUserInfo({username: '', password: ''}));
    }
  }
   
  return (
    <>
      <NavBar/>

      <Container>
        <div className='flex justify-center items-center'>
          
          <form onSubmit={SubmitHandler} className="w-[80%] mt-10">
            
            <h2 className='text-3xl font-bold mb-10'>登入您的帳號</h2> 

            {/* 用戶名稱 */}
            <label htmlFor="username">
              用戶名稱
              <input type="text" ref={refUserName} value={userInfo.username}
                     className={`input-field ${isValidate.usernameError?"field-warning":"focus-input"}`} 
                     onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, username: event.currentTarget.value})
                      setIsValidate({...isValidate, usernameError: false})
                      setErrorMsg('');
                     }}
              />
            </label>

            <div className={`${isValidate.usernameError? "":"invisible"} text-red-500 text-sm height-[18px] mb-2`}>
              { "請輸入用戶名稱!" }
            </div>

            {/* 密碼 */}
            <label htmlFor="password">
              密碼
              <input type="password" ref={refPassword} value={userInfo.password}
                     className={`input-field ${isValidate.passwordError?"field-warning":"focus-input"}`}
                     onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, password: event.currentTarget.value})
                      setIsValidate({...isValidate, passwordError: false})
                      setErrorMsg('')
                     }}
              />
            </label>
            
            <div className={`${isValidate.passwordError? "":"invisible"} text-red-500 text-sm height-[36px] mb-2`}>
              { "請輸入密碼!" }
            </div>

            <button className='login-btn'>登入</button>

            { errorMsg && <ErrorInfo message={errorMsg}/> }

          </form>

        </div>
      </Container>

    </>
  )
}

export default React.memo(Login);