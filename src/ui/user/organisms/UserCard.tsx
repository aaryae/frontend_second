import { image } from '@config/constant/image'
import Cards from 'ui/landingPage/molecules/Cards'
import HeadingSecondary from '../atoms/HeadingSecondary'

const UserCard = () => {
  return (
    <div className='max-w-7xl mx-auto'>
    <HeadingSecondary value='About Us'/>
    <div className="flex flex-wrap gap-1 justify-center">
    <Cards imageprops={image.image1} headingvalue='Heading' value='This is one of the most important in the images of this world because it was painted by the greatest of the greatest man in the history of the world '/>
    <Cards imageprops={image.image2} headingvalue='Heading' value='This is one of the most important in the images of this world because it was painted by the greatest of the greatest man in the history of the world '/>
    <Cards imageprops={image.image3} headingvalue='Heading' value='This is one of the most important in the images of this world because it was painted by the greatest of the greatest man in the history of the world '/>
    <Cards imageprops={image.image4} headingvalue='Heading' value='This is one of the most important in the images of this world because it was painted by the greatest of the greatest man in the history of the world '/>
    <Cards imageprops={image.image5} headingvalue='Heading' value='This is one of the most important in the images of this world because it was painted by the greatest of the greatest man in the history of the world '/>

    </div>
    </div>
  )
}

export default UserCard