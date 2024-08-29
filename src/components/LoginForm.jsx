import { useNavigate } from "react-router-dom";
import GoogleLogo from "./../assets/GoogleLogo";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { addUser } from "@/utils/userSlice";

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginForm = async () => {
    try {
      window.location.href =
        "https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:5173";
    } catch (err) {
      console.error("Login Error: ", err);
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log(urlParams);
    
    const token = urlParams.get("token");

    if (token) {
      dispatch(addUser(token));
      localStorage.setItem("token",token);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      navigate("/dashboard");
    }
  }, [dispatch, navigate]);

  return (
    <div className="w-full max-w-md">
      <div className="w-full p-6 sm:p-8 rounded-2xl border border-[#343A40] flex flex-col justify-center items-center gap-8 sm:gap-12 bg-gradient-to-b from-[#111214] to-[#121212]">
        <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-8">
          <div className="text-center w-full font-sans font-semibold text-[#FFFFFF] text-lg sm:text-xl">
            Create a new account
          </div>
          <button
            className="w-full h-12 py-2 px-4 flex items-center justify-center border border-[#707172] rounded-md hover:border-blue-400 transition-all duration-200 ease-in-out"
            onClick={handleLoginForm}
          >
            <div className="flex items-center justify-center gap-3">
              <GoogleLogo className="w-5 h-5 sm:w-[21px] sm:h-[21px] mt-1" />
              <span className="text-[#CCCCCC] font-sans font-normal text-sm sm:text-base">
                Sign Up with Google
              </span>
            </div>
          </button>
        </div>

        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <button className="w-full sm:w-auto sm:min-w-[195px] rounded-[4px] h-12 py-3 px-6 sm:px-9 bg-gradient-to-r from-[#4B63DD] to-[#0524BF] text-sm sm:text-base">
            Create an Account
          </button>
          <div className="flex gap-1 text-sm sm:text-base">
            <span className="text-[#909296]">Already have an account?</span>
            <span className="text-[#C1C2C5] font-normal cursor-pointer">
              Sign In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
