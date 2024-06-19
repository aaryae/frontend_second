import HeadingSecondary from '@ui/user//atoms/HeadingSecondary'
import ButtonSecondary from '@ui/user/atoms/ButtonSecondary'
import Label from '@ui/user/atoms/Label'
import Input from '@utils/theme/components/Input'

const Login = () => {
  return (
    <div className='flex items-center justify-center py-72 bg-[#b5aa6f3b] w-full '>
      <div className='bg-[#ffffff] shadow-box	border border-white p-8 rounded-lg shadow-lg w-full max-w-md index'>
        <HeadingSecondary value='Login' />
        <form>
          <div className='mb-4'>
            <Label value='username' />
            <Input type='email' id='username' placeholder='Enter your username' />
          </div>
          <div className='mb-6'>
            <Label value='password' />
            <Input id='password' type='password' placeholder='********' />
          </div>
          <div className='flex items-center justify-between'>
            <ButtonSecondary theme={false} value='Sign In' icons='' />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
