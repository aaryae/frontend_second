import { footer } from '@data/localization/landingPage/footer'
import useLang from 'hooks/useLang'

const Footer = () => {
  const { lang } = useLang()

  return (
    <footer className='bg-black text-white  shadow m-0'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          {`${footer.date[lang]}`}
          <a href='https://aarya.com/' className='hover:underline'>
            {`${footer.rights[lang]}`}
          </a>
          .{`${footer.date[lang]}`}
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='#' className='hover:underline me-4 md:me-6'>
              {`${footer.support[lang]}`}
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline me-4 md:me-6'>
              {`${footer.privacy[lang]}`}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
