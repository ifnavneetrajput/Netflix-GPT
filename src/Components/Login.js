import { useState ,useRef} from "react";
import Header from "./Header";
import { validate } from "../utilis/validate";
import { auth } from "../utilis/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { USER_AVTAR } from "../utilis/constants";

const Login = () => {


  const [isSignInform, setisSignInform] = useState(true);
  const [errorMessage, seterrorMessage] = useState(false);
    const dispatch = useDispatch();
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
    
    if (!isSignInform) {
      // sign up logic
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
             updateProfile(user, {
               displayName: name.current.value,
               photoURL: USER_AVTAR,
             })
               .then(() => {
                  const { uid, email, displayName, photoURL } =
                    auth.currentUser;
                  dispatch(
                    addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL,
                    })
                  );
             
               })
               .catch((error) => {
                 seterrorMessage(error.message);
               });
            
         

           
          })

          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode+"-"+errorMessage)
           
          });
    } else {
      // sign in 
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            
           
         
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            seterrorMessage(errorCode + "-" + errorMessage);
          });

    }
    

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
        <div className="text-center mt-8 mb-8 text-gray-500 text-sm font-medium">
          <p>
            Disclaimer: This is a student project created solely for educational
            purposes. It is not affiliated with Netflix.
          </p>
        </div>
        
      </form>
    </div>
  );
};


export default Login;
