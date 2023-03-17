import React, {useState, useEffect} from 'react';
import NavBar from '@/components/shared/NavBar';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '@/slice/hooks';
import { User } from '@/slice/authSlice';
import { login } from '@/slice/authSlice';
import { clearMessage } from '@/slice/message';

const Login: React.FC = () => {

  const [loginInfo, setLoginInfo] = useState<User>({
    username: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate();
  const isLoggedIn = useAppSelector((state) => state.authReducer.isLoggedIn);
  const message = useAppSelector((state) => state.messageReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch])

  const SubmitHandler = (event: React.FormEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();

    dispatch(login(loginInfo))
    .unwrap()
    .then( data =>
      navigate('/')
    )
  }

  return (

      <div className='shadow-lg w-[720px] h-[360px] px-60 py-5 mt-20 mx-auto my-auto'>
        
        <NavBar />

        <form action="http://localhost:3000/users" method="post">

          <h2 className='font-bold'>登入</h2>

          {/* input text */}
          <div className='mt-5'>

            <input placeholder='用戶名稱'
                  required = {true}
                  autoComplete = "username"
                  type="text"
                  className='input-field'
                  value={loginInfo.username}
                  onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                    setLoginInfo({...loginInfo, username: event.currentTarget.value})
                  }}
            />

            <input placeholder='密碼'
                  required = {true}
                  autoComplete = "current-password"
                  type="password"
                  className='input-field'
                  value={loginInfo.password}
                  onChange = { (event: React.ChangeEvent<HTMLInputElement>)=>{
                    setLoginInfo({...loginInfo, password: event.currentTarget.value})
                  }}
            />

          </div>

          <button type="submit"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  onKeyDown={SubmitHandler}
                  onClick={SubmitHandler}
          >
            登入
          </button>
        </form>

      </div>
  )
}

export default React.memo(Login);