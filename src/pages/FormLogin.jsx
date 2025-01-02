import { useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo-color.svg';
import imgBg from '../../public/images/bg-login.png';
import logoWhite from '../../public/images/logo-white.svg';
import axios from 'axios';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import alertify from 'alertifyjs';

const API_URL = 'http://127.0.0.1:5000';

const FormLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
      console.log('Sending login request:', { username });

      const response = await axios.post(
        `${API_URL}/login`,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      console.log('Login response:', response.data);

      if (response.data.access_token) {
        localStorage.setItem('token', response.data.access_token);
        localStorage.setItem('isAuthenticated', 'true');
        alertify.success('Đăng nhập thành công!');
        navigate('/installation');
      }
    } catch (error) {
      console.error('Lỗi đăng nhập:', error.response || error);
      const errorMessage =
        error.response?.data?.msg || 'Tên đăng nhập hoặc mật khẩu không đúng!';
      alertify.error(errorMessage);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="hidden relative lg:flex h-full items-center w-1/2 justify-center bg-gray-200">
        <img
          src={imgBg}
          alt=""
          className="w-full h-full object-cover absolute inset-0"
        />
        <img
          src={logoWhite}
          alt=""
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex w-full h-screen justify-center items-center lg:w-1/2 bg-gray-100">
        <div className="bg-white px-20 py-20 rounded-3xl border-1 border-gray-100 shadow-lg ">
          <div className="flex justify-center">
            <img src={logo} alt="" />
          </div>
          <div className="mt-8">
            <div>
              <label className="font-medium text-lg">Username</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                className="w-full p-4 border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              />
            </div>
            <div>
              <label className="font-medium text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full p-4 border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              />
            </div>
            <div className="mt-8 flex justify-between items-center">
              <button className="text-black-500 font-medium text-base underline">
                Forgot Password?
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-green-400 text-white p-4 rounded-xl text-lg font-semibold"
              >
                Sign in
              </button>
              <button
                onClick={() => navigate('/register')}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-white-500 text-green-400 p-4 rounded-xl text-lg font-semibold border-2 border-gray-300"
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
