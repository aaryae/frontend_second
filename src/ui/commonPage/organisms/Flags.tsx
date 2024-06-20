import { image } from '@config/constant/image';
import { languageEnum } from '@type/global.types';
import useLang from 'hooks/useLang';
import useToggle from 'hooks/useToggle';

const Flags = () => {
  const [changeFlag, toggleFlag]=useToggle();
  const { setLang } =useLang();


  return (
    <div className='inline-block top-[27px] right-[100px] h-[30px] text-center rounded-full bg-white overflow-hidden cursor-pointer'
    onClick={()=>{
      toggleFlag()
      changeFlag?setLang(languageEnum.en):setLang(languageEnum.ne)
    }} >
      {
      changeFlag?<img src={image.nepalFlag} alt="flag" className='h-full w-[30px] cursor-pointer' />:<img src={image.usFlag} alt="flag" className='h-full w-[30px] cursor-pointer' />
      }        
    </div>
  )
}

export default Flags