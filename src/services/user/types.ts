
export interface PagedResult<T> {
    totalCount: number;
    items: T[];
  }
  
  export interface GetAllUserOutput {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean;
    fullName: string;
    lastLoginTime: Date;
    creationTime: Date;
    roleNames: string[];
    id: number;
  }
  
  
  export type LoginCredentials =  {
    userNameOrEmailAddress: string;
    password: string;
    rememberClient: boolean;
  }
  
  export interface LoginUserResponse {
    accessToken: string;
    encryptedAccessToken: string;
    expireInSeconds: number;
    userId: number;
  }
  
  export interface User {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean;
    roleNames: string[];
    password: string;
    id: number;
  }
  
  export interface IUserInput {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean;
    roleNames: string[];
    password: string;
  }
  
  interface IGetUser {
    id: number;
  }
  
  export interface IGetAllUser {
    keyword: string;
    maxResultCount: number;
    skipCount: number;
    isActive?: boolean;
  }
  
  export type RegisterCredentials = {
    name: string,
    surname: string,
    userName: string,
    emailAddress: string,
    password: string,
    captchaResponse: string,
  }
  export interface IForgotPassword {
    emailAddress: string
  }
  
  export interface RegisterUserResponse {
    canLogin: boolean,
  }
  
  export interface ResetPasswordCredentials {
    adminPassword: string,
    userId: number,
    newPassword: string,
  }
  
  export interface IChangePassword {
    currentPassword: string,
    newPassword: string,
  }
  
  export interface ResetPasswordResponse{
    change: boolean,
  }

  
  export interface PagedFilterAndSortedRequest {
    maxResultCount: number;
    skipCount: number;
  }
  
  export interface PagedResult<T> {
    totalCount: number;
    items: T[];
  }
  
  export interface GetAllUserOutput {
    userName: string;
    name: string;
    surname: string;
    emailAddress: string;
    isActive: boolean;
    fullName: string;
    lastLoginTime: Date;
    creationTime: Date;
    roleNames: string[];
    id: number;
  }
  
  
  export interface ResetPassword {
    emailAddress: string,
    newPassword: string,
    token: string,
  }
  