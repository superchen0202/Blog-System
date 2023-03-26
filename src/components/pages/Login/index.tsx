import React, { useState } from 'react';
import Container from '@/components/shared/Container';
import NavBar from '@/components/shared/NavBar';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/service/hooks';
import { login, getCurrentUser } from '@/service/authService';

const Login: React.FC = (props) => {

  const [userInfo, setUserInfo] = useState<loginInfo>({
    username: '',
    password: '',
  });
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const SubmitHandler = (event: React.FormEvent<HTMLFormElement | HTMLButtonElement>) =>{
    
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
        <div className='flex justify-center items-center'>
          
          <form onSubmit={SubmitHandler} className="w-[80%] mt-10">
            
            <h2 className='text-3xl font-bold mb-10'>登入您的帳號</h2> 

            {/* 用戶名稱 */}
            <label htmlFor="username" className='mb-2'>
              用戶名稱
              <input id='username' className='input-field' type="text" value={userInfo.username}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, username: event.currentTarget.value})
                    }}
              />
            </label>

            {/* 密碼 */}
            <label htmlFor="password" className='mb-2'>
              密碼
              <input type="password" className='input-field' value={userInfo.password}
                    onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                      setUserInfo({...userInfo, password: event.currentTarget.value})
                    }}
              />
            </label>

            <button className='login-btn'>登入</button>
          </form>

        </div>
      </Container>

    </>
  )
}

export default React.memo(Login);