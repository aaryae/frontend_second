import { registerSchema } from '@config/schema/common/auth.schema'
import { registerUser } from '@data/localization/user/register'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerType } from '@type/global.types'
import Input from '@ui/commonPage/atoms/Input'
import ButtonPrimary from '@ui/landingPage/atoms/ButtonPrimary'
import Heading from '@ui/landingPage/atoms/Heading'
import Label from '@ui/landingPage/atoms/Label'
import useLang from 'hooks/useLang'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Register = () => {
  const { lang } = useLang()
  const { register ,handleSubmit , formState: { errors }, } = useForm<registerType>(
    {
      resolver: yupResolver(registerSchema(lang)),
    }
  )

    const onSubmit=()=>{
      console.log("send")
    }
  return (
    <>
      <div className='bg-[#00000013] h-screen'>
        <div className='max-w-4xl mx-auto  font-[sans-serif] text-[#333] p-6 py-64 relative'>
          <div className='text-center mb-16'>
            <Heading value={`${registerUser.accountSignUp[lang]}`} />
            <hr />
          </div>
          <form onChange={handleSubmit(onSubmit)}>
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
                {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email?.message}</span>}

              </div>
              <div>
                <Label value='Email' />
                <Input type='email' id='email' placeholder='Enter your Email' register={register} />
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
            <ButtonPrimary type='submit' value='Sign Up' icons='' />

            <Link to='/login'>
              <h1 className='text-sm absolute bottom-[220px] text-[#af4133]  hover:underline cursor-pointer'>
                {`${registerUser.account[lang]}`}
                <span className='font-bold'>{`${registerUser.signIn[lang]}`}</span>
              </h1>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
