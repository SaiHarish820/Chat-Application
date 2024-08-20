import GenderCheckbox from "./GenderCheckbox"

const SignUp = () => {
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
                <input type="text" placeholder="Confirm Password" className="w-full input input-bordered h-10 mb-2" />
                </div>

                <GenderCheckbox/>


            <a href="#" className="text-sm hover:underline hover:text-blue-600 inline-block mb-2">
              Already have a account? </a>

              <div>
                <button className="btn bg-stone-500 btn-block btn-sm mt-2 mb-2">SignUp</button>
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