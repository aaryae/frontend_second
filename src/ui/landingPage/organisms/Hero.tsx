import Button from '@ui/landingPage/atoms/ButtonPrimary'
import ButtonSecondary from '@ui/landingPage/atoms/ButtonSecondary'
import Heading from '@ui/landingPage/atoms/Heading'
import UniqueHeading from '@ui/landingPage/atoms/HeadingUnderlined'
import Paragraph from '@ui/landingPage/atoms/Paragraph'
import Navbar from '@ui/landingPage/organisms/Navbar'
import { Paperclip, ShoppingBagIcon } from 'lucide-react'
import UserCard from './AboutUs'

const Hero = () => {
  return (
    <>
      <div className='bg-[#b5aa6f3b] '>
        
    
        <Navbar />
        <div className='flex py-56 flex-col justify-center items-center  index gap-5 max-w-5xl mx-auto '>
          <UniqueHeading value='WELCOME TO OUR WEBSITE,' />
          <Heading value='Revamp Your Closet, Revitalize Your Confidence' />
          <div className='max-w-3xl'>
            <Paragraph value='Theaaryae is a fully Responsive Landing page Template in all devices for the perfect choice for your new startup or ongoing business. It is built with the latest bootstrap v5.3.2 You can simply update its contents, images, and scss according to your company info' />
          </div>
          <div className='flex'>
            <Button value='Purchase' icons={<ShoppingBagIcon />} />
            <ButtonSecondary theme={true} value='Documentation' icons={<Paperclip />} />
          </div>
        </div>
      </div>
      <UserCard />
    </>
  )
}

export default Hero
