import React from 'react'
import { useForm } from 'react-hook-form'

const Form = ({onSubmit,todo}) => {
    const {
    register,
    handleSubmit,
    setError,
    formState:{errors,isSubmitting},
}=useForm();
    const [isSubmitted, setIsSubmitted] = React.useState(false)
    const today=new Date().toISOString().split("T")[0]
    
  return (
    <>
      {isSubmitted && <div>loading.ed</div>}
      <div className="container">
      <form action="" onSubmit={handleSubmit(onSubmit)} className='text-black'>

            {/*Todo Name*/}
            <label htmlFor="TodoName">Todo Name :</label>
            <input {...register("TodoName",{required:true,minLength:{value:3,message:"minimum length is 3"},
            maxLength:{value:10,message:"too long name"}})} type="text" placeholder='work 1..' className='bg-white'/>
            {errors.TodoName && <div className='text-red-500 text-sm'>{errors.TodoName.message}</div>}
            <br/>
            {/*Disc*/}
            <label htmlFor="disc">Discription of the work:</label>
            <input {...register("disc",{required:true,minLength:{value:10,message:"minimum length is 10"},
            maxLength:{value:100,message:"too long discription"}})} type="text" placeholder='i will complete....' className='bg-white'/>
            {errors.disc && <div className='text-red-500 text-sm'>{errors.disc.message}</div>}
            <br/>
            {/*Date*/}
            <label htmlFor="CreationDate">Creation Date:</label>    
            <input {...register("CreationDate",{required:true,validate:(value)=>{
                new Date(today) < new Date() ||"Past dates only"
            }})} type="date" min={today}/>
            {errors.CreationDate && <div className='text-red-500 text-sm'>{errors.CreationDate.message}</div>}
            <br/>
            {/*Date*/}
            <label htmlFor="SubmissionDate">Submission Date:</label>
            <input {...register("SubmissionDate",{required:true,validate:(value)=>{
                new Date(value) >new Date() ||"Always more then new date"
            }})} type="date" min={today}/>
            {errors.SubmissionDate && <div className='text-red-500 text-sm'>{errors.SubmissionDate.message}</div>}
            <br/>
            {/*Priority*/}  
            <select {...register("Priority")}>
                <option value="Critical">Critical</option>
                <option value="Important">Important</option>
                <option value="">not Important</option>
            </select>

          {/* Buttons */}
          <div className="flex justify-end gap-2">
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              {todo ? "Update" : "Submit"}
            </button>
            <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => onSubmit(null)}>
              Cancel
            </button>
          </div>
            
            
        </form>
      </div>
    </>
  )
}

export default Form
