import { useForm } from "react-hook-form";
import './App.css'

function App() {
 const{ register, handleSubmit, watch, formState: { errors } } = useForm();
 
 function onSubmit(data){
  console.log("form is submitted",data)
 }
 
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label >First Name: </label>
          <input {...register('firstName',{ required: true, minLength: {value:3, message:'min len atleast 3' }
           })}/>
           {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <br />
        <div>
          <label >Middle Name: </label>
          <input {...register('middleName')} />
        </div>
        <br />
        <div>
          <label >Last Name: </label>
          <input {...register('LastName')}/>
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  )

}
export default App
