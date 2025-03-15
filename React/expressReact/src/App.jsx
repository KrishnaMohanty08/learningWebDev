import { useState } from 'react'
import './App.css'
import {useForm} from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    setError,
    formState:{errors,isSubmitting},
  }=useForm();

  const delay =(d)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve()
      },d*1000);
    })
  }
  const onSubmit =async (data)=>{
    //await delay(2);
    let r= await fetch ('http://localhost:3000/',{method:"POST",body:JSON.stringify(data)})
    let res =await r.text()
    console.log(data,res);
    // if(data.username!="shubham"){
    //   setError("notValid",{message:"Username or Password invalid"})
    // }
    // if(data.username=="meena"){
    //   setError("block",{message:"User is Blocked"})
    // }
  }
  return (
    <>
    {isSubmitting && <div>loading....</div>}
      <div className="container">

        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <input {...register("username",{required:true,minLength:{value:3,message:"min length is 3"},
            maxLength:{value:8,message:"max length is 8"}})} type="text" />
            {errors.username && <div className='red'>{errors.username.message} </div>}
          
          <input placeholder='password' {...register("password",{required:true,pattern:{value:/^[A-Za-z]+$/i,message:"chala ja bsdk"}})} type="password" />
          {errors.password && <div className='red'>{errors.password.message}</div>}
          
          <select {...register("gender")}>
            <option value="female">female</option>
            <option value="female">male</option>
            <option value="female">gay</option>
          </select>

          <input disabled={isSubmitting} type="submit" name="Submit" />
          {errors.notValid &&<div className="red">{errors.notValid.message}</div>}
          {errors.block &&<div className="red">{errors.block.message}</div>}
        </form>

      </div>
    </>
  )
}

export default App
