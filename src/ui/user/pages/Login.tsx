import Input from '@ui/commonPage/atoms/Input'
import Rememberme from '@ui/commonPage/atoms/Rememberme'
import ButtonPrimary from '@ui/landingPage/atoms/ButtonPrimary'
import Heading from '@ui/landingPage/atoms/Heading'
import Label from '@ui/landingPage/atoms/Label'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'



const Login = () => {

  const {register}=useForm()


  return (
    <div className='flex items-center justify-center py-64 bg-[#00000013] h-screen  '>
      {/* shadow-box	border border-white  shadow-lg*/}
      <div className='bg-transparent  p-8 rounded-lg  index relative w-[98vw] md:w-[50vw] lg:w-[30vw]  '>
        <Heading value='Hello Welcome,' />
        <hr />
        <form  className='py-10 px-4'>
          <div className='mb-4'>
            <Label value='Email' required={false}/>
            <Input type='email' id='username' placeholder='Enter your Email' register={register} />
          </div>
          <div className='mb-6'>
            <Label value='password' required={false}/>
            <Input id='password' type='password' placeholder='Enter your Password' register={register}/>
          </div>
            <Rememberme/>
          <div className='flex items-center justify-between'>
            <ButtonPrimary  value='Sign In' icons='' />
          </div>
          
        </form>
        <Link to="/register">
      <h1 className='text-sm absolute bottom-[5px]  text-[#af4133]  hover:underline cursor-pointer '>Don't have an account? <span className='font-bold'>Sign Up</span></h1>

        </Link>
      </div>
    </div>
  )
}

export default Login
