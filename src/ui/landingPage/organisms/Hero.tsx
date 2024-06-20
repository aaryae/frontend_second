import { hero } from '@data/localization/landingPage/hero'
import Button from '@ui/landingPage/atoms/ButtonPrimary'
import ButtonSecondary from '@ui/landingPage/atoms/ButtonSecondary'
import Heading from '@ui/landingPage/atoms/Heading'
import UniqueHeading from '@ui/landingPage/atoms/HeadingUnderlined'
import Paragraph from '@ui/landingPage/atoms/Paragraph'
import Navbar from '@ui/landingPage/organisms/Navbar'
import useLang from 'hooks/useLang'
import { Paperclip, ShoppingBagIcon } from 'lucide-react'
import UserCard from './AboutUs'

const Hero = () => {
  const { lang } = useLang()

  return (
    <>
      <div className='bg-[#b5aa6f3b] '>
        <Navbar />
        <div className='flex py-56 flex-col justify-center items-center  index gap-5 max-w-5xl mx-auto '>
          <UniqueHeading value={`${hero.welcome[lang]}`} />
          <Heading value={`${hero.slogan[lang]}`} />
          <div className='max-w-3xl'>
            <Paragraph value={`${hero.aboutsite[lang]}`} />
          </div>
          <div className='flex'>
            <Button value={`${hero.purchase[lang]}`} icons={<ShoppingBagIcon />} />
            <ButtonSecondary theme={true} value={`${hero.documentation[lang]}`} icons={<Paperclip />} />
          </div>
        </div>
      </div>
      <UserCard />
    </>
  )
}

export default Hero
