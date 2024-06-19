const Cards = ({ value, headingvalue, imageprops }: { value: string; headingvalue: string; imageprops: string }) => {
  return (
    <div className='relative inline-block group'>
      <img className='w-[400px] h-[250px]' src={imageprops} alt='img' />
      <p className='absolute p-3 text-center drop-shadow-2xl inset-0 flex items-center flex-col justify-center text-sm text-[#ffffffd0] bg-black bg-opacity-55 opacity-0 transition-opacity duration-300 group-hover:opacity-100 '>
        <span className='font-extrabold text-xl py-3'>{headingvalue}</span>
        {value}
      </p>
    </div>
  )
}

export default Cards
