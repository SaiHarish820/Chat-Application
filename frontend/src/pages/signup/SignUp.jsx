import { useState } from "react"
import GenderCheckbox from "./GenderCheckbox"
import { Link } from "react-router-dom"
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const [inputs, setInputs] = useState({
    fullName : "",
    username : "",
    password : "",
    confirmPassword : "",
    gender : ""
  });
  
  const {loading, signup} = useSignup();

  const handleCheckboxChange  = (gender) =>{
    setInputs({...inputs, gender})
  }

  const handleSubmit  = async(e)=> {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="h-full p-6 w-full bg-grey-600 rounded-md bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300 p-1 mb-2">
            SignUp 
            <span className="text-amber-300"> Chat Application</span>
            </h1>

            <form onSubmit={handleSubmit}>
            <div>
                <label className="label p-2">
                    <span className="text-base label-text">Fullname</span>
                </label>
                <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" 
                value={inputs.fullName}
                onChange={(e)=> setInputs({...inputs, fullName : e.target.value})}
                />
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text"> Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" 
                value={inputs.username}
                onChange={(e)=> setInputs({...inputs, username : e.target.value})}
                />
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input
              type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                />
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Confirm Password</span>
                </label>
                <input
                
              type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                />
                </div>

                <GenderCheckbox onCheckboxChange = {handleCheckboxChange} selectedGender = {inputs.gender} />


            <Link to="/login" className="text-sm hover:underline hover:text-blue-600 inline-block mb-2">
              Already have a account? </Link>

              <div>
                <button className="btn bg-stone-500 btn-block btn-sm mt-2 mb-2"
                disabled={loading}>

                  {loading ? <span className=" loading loading-spinner "></span> : "Sign Up"}
                </button>
              </div>

            </form>
    </div>


    </div>
  )
}

export default SignUp

// STARTER CODE FOR THIS FILE

/*const SignUp = () => {
    return (
      <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="h-full p-6 w-full bg-grey-600 rounded-md bg-clip-padding backdrop-filter 
      backdrop-blur-lg bg-opacity-20">
          <h1 className="text-3xl font-semibold text-center text-gray-300 p-1 mb-2">
              SignUp 
              <span className="text-amber-300"> Chat Application</span>
              </h1>
  
              <form>
              <div>
                  <label className="label p-2">
                      <span className="text-base label-text">Fullname</span>
                  </label>
                  <input type="text" placeholder="Enter Fullname" className="w-full input input-bordered h-10" />
                  </div>
  
                  <div>
                  <label className="label p-2">
                      <span className="text-base label-text"> Username</span>
                  </label>
                  <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                  </div>
  
                  <div>
                  <label className="label p-2">
                      <span className="text-base label-text">Password</span>
                  </label>
                  <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                  </div>
  
                  <div>
                  <label className="label p-2">
                      <span className="text-base label-text">Confirm Password</span>
                  </label>
                  <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                  </div>
  
  
              <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block mb-2">
                Already have a account? </a>
  
                <div>
                  <button className="btn bg-stone-500 btn-block btn-sm mt-2 mb-2">SignUp</button>
                </div>
  
              </form>
      </div>
  
  
      </div>
    )
  }
  
  export default SignUp*/