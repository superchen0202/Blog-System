import React, { useState } from 'react';
import Container from '@/components/shared/Container';
import NavBar from '@/components/shared/NavBar';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { login, getCurrentUser } from '@/service/authService';

const Login: React.FC = () => {

  const [userInfo, setUserInfo] = useState<loginInfo>({
    username: '',
    password: '',
  });
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const SubmitHandler = (event: React.FormEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();
    
    login(userInfo)
    .then(data => {
      dispatch(getCurrentUser());
      navigate('/');
    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <NavBar/>

      <Container>
        <div className='login-form-container'>
          
          <form action="#" method="post">

            <h2 className='font-bold'>登入</h2>

            {/* input text */}
            <div className='mt-5'>

              <input placeholder='用戶名稱'
                    required = {true}
                    autoComplete = "username"
                    type="text"
                    className='input-field'
                    value={userInfo.username}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, username: event.currentTarget.value})
                    }}
              />

              <input placeholder='密碼'
                    required = {true}
                    autoComplete = "current-password"
                    type="password"
                    className='input-field'
                    value={userInfo.password}
                    onChange = { (event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, password: event.currentTarget.value})
                    }}
              />

            </div>

            <button type="submit" className="login-btn" onClick={SubmitHandler} //onKeyDown={SubmitHandler}
            >
              登入
            </button>

          </form>

        </div>
      </Container>
    </>
  )
}

export default React.memo(Login);