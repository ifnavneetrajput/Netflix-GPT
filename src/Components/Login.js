import { useState ,useRef} from "react";
import Header from "./Header";
import { validate } from "../utilis/validate";
const Login = () => {

  const [isSignInform, setisSignInform] = useState(true);
  const [errorMessage, seterrorMessage] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);


  const toggleSignInform = () => {
    setisSignInform(!isSignInform);
  }

  const handleButtonClick = () => {

    const message = validate(email.current.value, password.current.value)
    seterrorMessage(message);
    if (message) return;
      console.log(name.current.value);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold py-3 px-2 text-2xl">
          {isSignInform ? "Sign-In" : "Sign-Up"}
        </h1>

        {!isSignInform && (
          <input
            ref={name}
            className=" m-2 py-3 px-2 w-full rounded-lg bg-gray-700"
            type="text"
            placeholder="Full Name "
          />
        )}

        <input
          ref={email}
          className=" m-2 py-3 px-2 w-full rounded-lg bg-gray-700"
          type="text"
          placeholder="Enter your email "
        />
        <input
          ref={password}
          className=" m-2 py-3 px-2 w-full rounded-lg bg-gray-700"
          type="password"
          placeholder="password"
        />
        <h1 className="text-red-600">{errorMessage}</h1>
        <button
          onClick={handleButtonClick}
          className="text-center rounded-lg bg-red-600 w-full m-2 py-3 px-2"
        >
          Submit
        </button>

        <p className="m-2 py-3 px-2 cursor-pointer" onClick={toggleSignInform}>
          {isSignInform
            ? " New to Netflix ? Sign-Up now"
            : "Already have an account ?? Sign-In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
