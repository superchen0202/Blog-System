import React, {useState, useEffect, ChangeEvent} from 'react';
import NavBar from '@/components/shared/NavBar';

type Login = {
  // authenticity_token: string,
  email: string,
  password: string,
  password_confirmation: string,
}

const Login: React.FC = (props) => {

  const [Info, setInfo] = useState<Login>({
    // authenticity_token:'',
    email: '',
    password: '',
    password_confirmation:''
  });

  const SubmitHandler = (event: React.FormEvent<HTMLButtonElement>) =>{
    event.preventDefault();
    console.log(Info);
  }

  return (

      <div className='shadow-lg w-[720px] h-[480px] px-60 py-5 mt-20 mx-auto my-auto'>
        
        <NavBar />

        <form action="http://localhost:3000/users" method="post">

          {/* logo */}
          <img src="images/logo.svg"/>

          <h2 className='font-bold'>註冊即可查看朋友的相片和影片</h2>

          {/* input text */}
          <div className='mt-5'>

            <input placeholder='電子郵件地址'
                  required = {true}
                  type="text"
                  className='input-field'
                  value={Info.email}
                  onChange = {(event: React.ChangeEvent<HTMLInputElement>)=>{
                    setInfo({...Info, email: event.currentTarget.value})
                  }}
            />

            <input placeholder='密碼'
                  required = {true}
                  type="password"
                  className='input-field'
                  value={Info.password}
                  onChange = { (event: React.ChangeEvent<HTMLInputElement>)=>{
                    setInfo({...Info, password: event.currentTarget.value})
                  }}
            />

            <input placeholder='確認密碼'
                  type="password"
                  className='input-field'
                  value={Info.password_confirmation}
                  onChange = { (event: React.ChangeEvent<HTMLInputElement>)=>{
                    setInfo({...Info, password_confirmation: event.currentTarget.value})
                  }}
            />

          </div>

          <button type="submit"
                  className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2"
                  onKeyDown={SubmitHandler}
                  onClick={SubmitHandler}
          >
            註冊
          </button>
        </form>

          {/* 說明文字 */}
          <div className='mt-5'>
            <p className='text-gray-700 mb-3 text-sm'>
              使用我們服務的用戶可能上傳了你的聯絡資料到 Instagram。瞭解詳情
            </p>
            <p className='text-gray-700 mb-3 text-sm'>
              註冊即表示你同意我們的服務條款、《隱私政策》和《Cookie 政策》。
            </p>
          </div>
      </div>
  )
}

export default React.memo(Login);