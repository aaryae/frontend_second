import Input from '@ui/commonPage/atoms/Input'
import ButtonPrimary from '@ui/landingPage/atoms/ButtonPrimary'
import Heading from '@ui/landingPage/atoms/Heading'
import Label from '@ui/landingPage/atoms/Label'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const { register } = useForm()

  return (
    <>
      <div className='bg-[#00000013] h-screen'>
        <div className='max-w-4xl mx-auto  font-[sans-serif] text-[#333] p-6 py-64 relative'>
          <div className='text-center mb-16'>
            <Heading value='Sign up into your account' />
            <hr />
          </div>
          <form>
            <div className='grid sm:grid-cols-2 gap-y-7 gap-x-12'>
              <div>
                <Label value='First Name' />
                <Input type='text' id='firstName' placeholder='Enter your First Name' register={register} />
              </div>
              <div>
                <Label value='Last Name' />
                <Input type='text' id='LastName' placeholder='Enter your Last Name' register={register} />
              </div>

              <div>
                <Label value='Phonenumber' />
                <Input type='tel' id='phonenumber' placeholder='Enter your Phone Number' register={register} />
              </div>
              <div>
                <Label value='Email' />
                <Input type='email' id='username' placeholder='Enter your Email' register={register} />
              </div>
              <div>
                <Label value='Password' />
                <Input id='password' type='password' placeholder='Password' register={register} />
              </div>
              <div>
                <Label value='Confirm Password' />
                <Input id='confirmpassword' type='password' placeholder='Confirm Password' register={register} />
              </div>
            </div>
            <br />
            <ButtonPrimary value='Sign Up' icons='' />

            <Link to='/login'>
              <h1 className='text-sm absolute bottom-[220px] text-[#af4133]  hover:underline cursor-pointer'>
                Already have an account? <span className='font-bold'>Sign In</span>
              </h1>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
