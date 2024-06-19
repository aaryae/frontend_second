import { Link } from 'react-router-dom'

const LoginButton = () => {
  return (
    <div className='flex gap-1 justify-center items-center cursor-pointer'>
      {/* <LogIn color='#af4133' size={16} /> */}
      <Link to='/login' className='tracking-wider'>
        login
      </Link>
    </div>
  )
}

export default LoginButton
