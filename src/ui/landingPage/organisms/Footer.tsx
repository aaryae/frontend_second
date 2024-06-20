const Footer = () => {
  return (
    <footer className='bg-black text-white  shadow m-0'>
      <div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
        <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='https://aarya.com/' className='hover:underline'>
            THEAARYAE™
          </a>
          . All Rights Reserved.
        </span>
        <ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
          <li>
            <a href='#' className='hover:underline me-4 md:me-6'>
              Demos
            </a>
          </li>
          <li>
            <a href='#' className='hover:underline me-4 md:me-6'>
              Privacy Policy
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
