import { support } from '@data/localization/landingPage/support'
import Heading from '@ui/landingPage/atoms/Heading'
import Paragraph from '@ui/landingPage/atoms/Paragraph'
import useLang from 'hooks/useLang'
import { Facebook, Instagram, TwitterIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

const Support = () => {
  const { lang } = useLang()

  return (
    <>
      <div className='bg-[#b5aa6f3b] py-60'>
        <div className='index  max-w-7xl mx-auto'>
          <Heading value={`${support.support[lang]}`} />
          <hr className='bg-black h-1' />
          <div className='py-20'>
            <Paragraph value={`${support.content[lang]}`} />
            <Paragraph value={`${support.content2[lang]}`} />
          </div>
          <hr />
          <div className='flex  gap-3 text-center justify-center items-center w-full p-4'>
            <Link to='https://www.facebook.com/'>
              <Facebook />
            </Link>

            <Link to='https://www.instagram.com/'>
              <Instagram />
            </Link>
            <Link to='https://www.twitter.com/'>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Support
