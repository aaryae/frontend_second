import { languageEnum } from '../types/global.types'

// import { languageEnum } from "@types/global.types";

export interface langugaeType {
  lang: languageEnum
  setLang: React.Dispatch<React.SetStateAction<languageEnum>>
}
