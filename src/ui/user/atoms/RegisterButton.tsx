import { Link } from "react-router-dom"

const RegisterButton = () => {
  return (
    <div className='flex gap-1 justify-center items-center cursor-pointer'>
      {/* <SignalIcon color='#af4133' size={16} /> */}
      <Link to='/register' className='tracking-wider'>
        Register
      </Link>
    </div>
  )
}

export default RegisterButton