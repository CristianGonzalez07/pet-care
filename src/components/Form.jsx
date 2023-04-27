import { useForm } from "react-hook-form";
import Button from "./Button";

export default function Form({inputs, onSubmit}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {inputs.map((input, index)=> {
        return (
          <div className="mb-5" key={`input-${index}`}>
            <label 
              htmlFor={input.label}
              className="block mb-2 text-sm font-medium text-primary-dark font-sigmar"
            >
              {input.label}
            </label>
            {input.label === "message" ? 
              <textarea
                id={input.label} 
                type={input.type}
                className="h-[270px] bg-transparent border-4 rounded-[20px] border-primary text-primary-dark text-sm block w-full p-2.5 outline-none"
                {...register(input.label, { required: true })}
                 
              /> : 
              <input
                id={input.label} 
                type={input.type}
                className="bg-transparent border-4 rounded-[20px] border-primary text-primary-dark text-sm block w-full p-2.5 outline-none"
                {...register(input.label, { required: true })}
                 
              />
            }
            {errors[input.label] && input.error}
          </div>
        )
      })}
      <div className="flex justify-center mt-10">
        <Button text="Send Message" icon="ic:round-email" onClick={() => {console.log("click")}}/>
      </div>
    </form>
  )
}
