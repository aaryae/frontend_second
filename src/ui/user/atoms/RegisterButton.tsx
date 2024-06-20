import { navbar } from '@data/localization/landingPage/navbar'
import useLang from 'hooks/useLang'
import { Link } from 'react-router-dom'

const RegisterButton = () => {
  const { lang } = useLang()
  return (
    <div className='flex gap-1 justify-center items-center cursor-pointer'>
      {/* <SignalIcon color='#af4133' size={16} /> */}
      <Link to='/register' className='tracking-wider'>
        {navbar.register[lang]}
      </Link>
    </div>
  )
}

export default RegisterButton
