import inputtype from '@interface/components.interface'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

const Input = ({ type, placeholder, id,register,autocomplete='off' }: inputtype) => {
    
    const[showpassword, setshowpassword]=useState<boolean>(false)


  return (
    <>
    <div className='relative'>

      <input
        className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none'
        type={type==='password' && showpassword?'text':type}
        placeholder={placeholder}
        id={id}
        autoComplete={autocomplete}
        {...register(id)}
      />
        {
            type==='password'&&
            <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={()=>{
                setshowpassword(prevshowpassword=>!prevshowpassword)
            }}>
                {showpassword? <Eye strokeWidth={1} size={20} />:<EyeOff strokeWidth={1} size={20}/>}
               
            </div>
        }

    </div>
    </>
  )
 
}

export default Input
