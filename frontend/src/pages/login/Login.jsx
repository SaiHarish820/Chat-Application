const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
    <div className="h-full w-full bg-blue-600 rounded-md bg-clip-padding backdrop-filter 
    backdrop-blur-lg bg-opacity-20">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
            Login 
            <span className="text-blue-300"> Chat Application</span>
            </h1>

            <form>
                <div>
                <label className="label p-2">
                    <span className="text-base label-text"> Username</span>
                </label>
                </div>
            

            </form>
    </div>


    </div>
  )
}

export default Login