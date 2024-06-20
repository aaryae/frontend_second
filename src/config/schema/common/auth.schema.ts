import { languageEnum } from '@type/global.types'
import { getMultiLanguageMessage } from 'functions/yup.schema.languageChange'
import { PHONE_NUMBER } from 'regex'
import * as yup from 'yup'

export const loginSchema = (lang: languageEnum) => {
  const schema = yup.object({
    email: yup
      .string()
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Email is required',
          ne: 'इमेल आवश्यक छ',
        })
      )
      .email(
        getMultiLanguageMessage(lang, {
          en: 'Please enter valid email',
          ne: 'कृपया मान्य इमेल लेख्नुहोस्',
        })
      ),
    password: yup.string().required(
      getMultiLanguageMessage(lang, {
        en: 'Password is required',
        ne: 'पासवर्ड आवश्यक छ',
      })
    ),
    rememberMe: yup.boolean().optional(),
  })
  return schema
}

export const registerSchema = (lang: languageEnum) => {
  const schema = yup.object({
    firstName: yup.string()
      .required(
        getMultiLanguageMessage(lang, {
          en: 'First name is required',
          ne: 'पहिलो नाम आवश्यक छ',
        })
      ),
     
    lastName: yup.string()
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Last name is required',
          ne: 'थर नाम आवश्यक छ',
        })
      )
     ,

    email: yup.string()
      .email(
        getMultiLanguageMessage(lang, {
          en: 'Please enter valid email',
          ne: 'कृपया मान्य इमेल लेख्नुहोस्',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Email is required',
          ne: 'इमेल आवश्यक छ',
        })
      ),
    phoneNumber: yup.string()
      .matches(
        PHONE_NUMBER,
        getMultiLanguageMessage(lang, {
          en: 'Please enter valid phone number',
          ne: 'कृपया मान्य फोन नम्बर लेख्नुहोस्',
        })
      )
      .required(
        getMultiLanguageMessage(lang, {
          en: 'Phone number is required',
          ne: 'फोन नम्बर आवश्यक छ',
        })
      ),
  
  })

  return schema
}