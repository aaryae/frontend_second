import { langugaeType } from '@interface/global.interface'
import { languageEnum } from '@type/global.types'
import { createContext, useEffect, useState } from 'react'

const LanguageContext = createContext<langugaeType>({
  lang: languageEnum.en,
  setLang: () => {},
})

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<languageEnum>(localStorage.getItem('languageMode') as languageEnum || languageEnum.en)

  useEffect(()=>{
    localStorage.setItem("languageMode",lang)
  },[lang])
  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
}

export default LanguageContext
