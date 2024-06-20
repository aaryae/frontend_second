import { image } from '@config/constant/image'
import { cards } from '@data/localization/landingPage/cards'
import HeadingSecondary from '@ui/landingPage/atoms/HeadingSecondary'
import Cards from '@ui/landingPage/molecules/Cards'
import useLang from 'hooks/useLang'

const UserCard = () => {
  const { lang } = useLang()
  return (
    <div className='max-w-7xl mx-auto py-10'>
      <HeadingSecondary value={`${cards.aboutUs[lang]}`} />
      <div className='flex flex-wrap gap-1 justify-center'>
        <Cards imageprops={image.image1} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image2} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image3} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image4} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image5} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image6} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image7} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image8} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image9} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
        <Cards imageprops={image.image10} headingvalue={`${cards.heading[lang]}`} value={`${cards.paragraph[lang]}`} />
      </div>
    </div>
  )
}

export default UserCard
