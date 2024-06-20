import LanguageContext from '@context/Language'
import { langugaeType } from '@interface/global.interface'
import { useContext } from 'react'

const useLang = () => {
  const contextValue = useContext(LanguageContext)

  const languageType: langugaeType = {
    lang: contextValue.lang,
    setLang: contextValue.setLang,
  }

  return languageType
}

export default useLang
