import { loginSchema } from '@config/schema/common/auth.schema'
import { login } from '@data/localization/user/login'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginType } from '@type/global.types'
import Input from '@ui/commonPage/atoms/Input'
import Rememberme from '@ui/commonPage/atoms/Rememberme'
import ButtonPrimary from '@ui/landingPage/atoms/ButtonPrimary'
import Heading from '@ui/landingPage/atoms/Heading'
import Label from '@ui/landingPage/atoms/Label'
import useLang from 'hooks/useLang'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

const Login = () => {
  const { lang } = useLang()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>({
    resolver: yupResolver(loginSchema(lang)),
  })

  const onSubmit = (data: loginType) => {
    console.log(data)
  }

  return (
    <div className='flex items-center justify-center py-64 bg-[#00000013] h-screen  '>
      {/* shadow-box	border border-white  shadow-lg*/}
      <div className='bg-transparent  p-8 rounded-lg  index relative w-[98vw] md:w-[50vw] lg:w-[30vw]  '>
        <Heading value={`${login.helloWelcome[lang]}`} />
        <hr />
        <form className='py-10 px-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <Label value='Email' required={false} />
            <Input type='email' id='email' placeholder='Enter your Email' register={register} />
            {errors.email && <span className='text-red-500 text-sm mt-1'>{errors.email?.message}</span>}
          </div>
          <div className='mb-6'>
            <Label value='password' required={false} />
            <Input id='password' type='password' placeholder='Enter your Password' register={register} />
            {errors.password && <span className='text-red-500 text-sm mt-1'>{errors.password?.message}</span>}

          </div>
          <Rememberme />
          <div className='flex items-center justify-between'>
            <ButtonPrimary type='submit' value='Sign In' icons='' />
          </div>
        </form>
        <Link to='/register'>
          <h1 className='text-sm absolute bottom-[5px]  text-[#af4133]  hover:underline cursor-pointer '>
            {`${login.account[lang]}`} <span className='font-bold'>{`${login.signUp[lang]}`}</span>
          </h1>
        </Link>
      </div>
    </div>
  )
}

export default Login
