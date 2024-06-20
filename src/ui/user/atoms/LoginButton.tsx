import { navbar } from '@data/localization/landingPage/navbar'
import useLang from 'hooks/useLang'
import { Link } from 'react-router-dom'

const LoginButton = () => {
  const { lang } = useLang()

  return (
    <div className='flex gap-1 justify-center items-center cursor-pointer'>
      {/* <LogIn color='#af4133' size={16} /> */}
      <Link to='/login' className='tracking-wider'>
        {navbar.login[lang]}
      </Link>
    </div>
  )
}

export default LoginButton
