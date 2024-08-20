const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="h-full p-6 w-full bg-grey-600 rounded-md bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login 
            <span className="text-amber-300"> Chat Application</span>
            </h1>

            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              {"Don't"} have a account? </a>

              <div>
                <button className="btn bg-stone-500 btn-block btn-sm mt-2 mb-2">Login</button>
              </div>

            </form>
    </div>


    </div>
  )
}

export default Login


// STARTER CODE FOR THIS FILE

/*
const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="h-full p-6 w-full bg-grey-600 rounded-md bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login 
            <span className="text-amber-300"> Chat Application</span>
            </h1>

            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Username</span>
                </label>
                <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
                </div>

                <div>
                <label className="label p-2">
                    <span className="text-base label-text">Password</span>
                </label>
                <input type="text" placeholder="Enter Password" className="w-full input input-bordered h-10" />
                </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              {"Don't"} have a account? </a>

              <div>
                <button className="btn bg-stone-500 btn-block btn-sm mt-2 mb-2">Login</button>
              </div>

            </form>
    </div>


    </div>
  )
}

export default Login
*/