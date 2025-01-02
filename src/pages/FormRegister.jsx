import { useNavigate } from 'react-router-dom';
import logo from '../../public/images/logo-color.svg';
import imgBg from '../../public/images/bg-login.png';
import logoWhite from '../../public/images/logo-white.svg';
import axios from 'axios';
import 'alertifyjs/build/css/alertify.min.css';
import 'alertifyjs/build/css/themes/default.min.css';
import alertify from 'alertifyjs';

const API_URL = 'http://localhost:5000';

const FormRegister = () => {
  const navigate = useNavigate();

  const validateForm = (username, email, password) => {
    if (!username.trim()) {
      alertify.error('Vui lòng nhập tên người dùng!');
      return false;
    }

    if (!email.trim()) {
      alertify.error('Vui lòng nhập email!');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alertify.error('Email không hợp lệ!');
      return false;
    }

    if (password.length < 8) {
      alertify.error('Mật khẩu phải có ít nhất 8 ký tự!');
      return false;
    }

    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const username = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirmPassword').value;

    if (!validateForm(username, email, password)) {
      return;
    }

    if (password !== confirm_password) {
      alertify.error('Mật khẩu xác nhận không khớp!');
      return;
    }

    try {
      const response = await axios.post(
        `${API_URL}/register`,
        {
          username: username,
          email: email,
          password: password,
          confirm_password: confirm_password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201) {
        alertify.success('Đăng ký thành công!');
        navigate('/login');
      }
    } catch (error) {
      console.error('Lỗi đăng ký:', error);
      const errorMessage =
        error.response?.data?.msg || 'Có lỗi xảy ra khi đăng ký!';
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
            <img src={logo} alt="" className="" />
          </div>
          <div className="mt-8">
            <div>
              <label className="font-medium text-lg">Username</label>
              <input
                type="text"
                id="fullname"
                placeholder="Enter your username"
                className="w-full p-4 border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              />
            </div>
            <div>
              <label className="font-medium text-lg">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
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
            <div>
              <label className="font-medium text-lg">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="w-full p-4 border-2 border-gray-100 rounded-xl mt-1 bg-transparent"
              />
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleRegister}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-green-400 text-white p-4 rounded-xl text-lg font-semibold"
              >
                Register
              </button>
              <button
                onClick={() => navigate('/login')}
                className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 bg-white-500 text-green-400 p-4 rounded-xl text-lg font-semibold border-2 border-gray-300"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
