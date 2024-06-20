export enum languageEnum {
  en = 'en',
  ne = 'ne',
}



//loginType
export type loginType={
  email:string;
  password:string;
}

//registerType 
export type registerType={
  firstName:string,
  lastName:string,
  email:string,
  password:string,
  confirmPassword:string,
  phoneNumber:number
}