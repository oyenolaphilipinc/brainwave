import React from 'react';
import Header from './Header';
import github from "../assets/github-icon.svg";
import google from "../assets/google-icon.svg";
import dribble from "../assets/dribble-icon.svg"
import Footer from './Footer';
import baby from "../assets/baby.svg";

const Login = () => {
  return (
    <>
      <Header />
      <div className="md:flex md:justify-between">
        <div className="md:ml-40 mt-[10rem]">
          <div>
            <h1 className="text-xl font-bold mb-12 text-center">Welcome back, <span className="text-purple-500">Buddy!</span></h1>
          </div>
          <div>
            <form className="ml-10">
              <label htmlFor="email" className="text-gray-500">Email</label><br/>
              <input type='text' id="email" placeholder="youremail@example.com" className="border border-gray-700 pl-3 appearance-none w-11/12 py-2 rounded outline-blue-500 mb-6" /><br/>
              <label htmlFor="password" className="text-gray-500">Password</label><br/>
              <input type='password' id="password" placeholder="***********" className="border border-gray-700 pl-3 appearance-none w-11/12 py-2 rounded outline-blue-500 mb-2" />
              <p className="text-purple-500 text-sm mb-8">Forgot your password?</p>
              <button type="submit" className="border w-11/12 py-3 bg-white text-black font-bold rounded mb-4">Login</button>
              <p className="text-center text-sm text-gray-400 mb-8">or log in with:</p>
              <div className="flex mb-16 justify-center">
                <div className="border px-7 py-1 rounded mr-4">
                    <img src={google} width={40} height={30}/>
                </div>
                <div className="border px-7 py-2 rounded mr-4">
                    <img src={github} width={30} height={30}/>
                </div>
                <div className="border px-7 py-2 rounded">
                    <img src={dribble} width={30} height={30}/>
                </div>
              </div>
              <p className="text-sm text-center mb-12"><span className="text-gray-500">Don't have an account?</span> <span className="text-purple-500"><a href="/signup">Sign Up</a></span></p>
            </form>
          </div>
        </div>
        {/* Consider removing this empty div or adding content */}
        <div className="hidden md:flex bg-purple-400 w-6/12 mt-[5rem]">
            <img src={baby} width={520} height={500} alt='Happy Baby' className="mx-auto animate-pulse" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
