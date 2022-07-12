import React,{useState} from 'react'

const SignUp = () => {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [displayName,setDisplayName]=useState("")
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(email,password,displayName)
  }
  return (
    <>
    <h1 className='font-bold text-center text-2xl font-[Poppins] mt-3'>SignUp</h1>
      <form onSubmit={handleSubmit} className='bg-white w-9/12 md:w-7/12 p-3 md:p-10 md:mb-9 lg:mb-9 mx-auto rounded-md'>
        <label className='my-9'>
          <span className='text-gray-500'>Email:</span>
          <input
            type={"email"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setEmail(e.target.value)}
            value={email}
            required
          />
        </label>

        <label className='my-9'>
          <span className='text-gray-500 '>Password:</span>
          <input
            type={"password"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setPassword(e.target.value)}
            value={password}
            required
          />
        </label>

        <label className='my-9'>
          <span className='text-gray-500 '>Display Name:</span>
          <input
            type={"text"}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            onChange={(e)=>setDisplayName(e.target.value)}
            value={displayName}
            required
          />
        </label>

          <button type={"submit"} className="border-solid border-2 border-emerald-500 text-emerald-500 rounded-lg px-1 my-3">
            Login
          </button>
        </form>
    </>
  )
}

export default SignUp