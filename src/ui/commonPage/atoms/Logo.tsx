import { Box } from 'lucide-react'
import { Link } from 'react-router-dom'

const Logo = ({color}:{color:string}) => {
  return (
    <Link to='/'>
      <div className={`flex justify-center items-center w-fit p-3 gap-2 cursor-pointer ${color}`}>
        <Box size={28} color='#af4133' />
        <h1 className='font-extrabold tracking-wide text-xl font-sans '>THEAARYAE</h1>
      </div>
    </Link>
  )
}

export default Logo
