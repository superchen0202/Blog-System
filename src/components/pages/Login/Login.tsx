import React, {useState, useEffect, ChangeEvent} from 'react';
import NavBar from '@/components/shared/NavBar';
import { login } from '@/service/api';
import { setAuthToken } from '@/service/utils';

type LoginProps = {
  userName: string,
  password: string,
}

const Login: React.FC = () => {

  const [Info, setInfo] = useState<LoginProps>({
    userName: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const SubmitHandler = (event: React.FormEvent<HTMLButtonElement>) =>{
    
    event.preventDefault();
    console.log(Info);

    login(Info.userName, Info.password)
    .then(data =>{

      if(data.ok === 0){
        return setErrorMessage(data.message);
      }

      // 成功的話就把 token 存到 localStorage
      setAuthToken(data.token);
    })

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
                  autoComplete = "userName"
                  type="text"
                  className='input-field'
                  value={Info.userName}
                  onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                    setInfo({...Info, userName: event.currentTarget.value})
                  }}
            />

            <input placeholder='密碼'
                  required = {true}
                  autoComplete = "current-password"
                  type="password"
                  className='input-field'
                  value={Info.password}
                  onChange = { (event: React.ChangeEvent<HTMLInputElement>)=>{
                    setInfo({...Info, password: event.currentTarget.value})
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