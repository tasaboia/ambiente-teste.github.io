import { http } from "../httpServices";
import { 
  GetAllUserOutput, 
  IChangePassword, 
  IForgotPassword, 
  IGetAllUser, 
  IUserInput, 
  LoginUserResponse, 
  PagedResult, 
  RegisterCredentials, 
  RegisterUserResponse, 
  ResetPassword, 
  ResetPasswordCredentials, 
  ResetPasswordResponse, 
  User } from "./types";

  export async function getUserAPI(data: any): Promise<User>{
    let result = await http.get("/api/services/app/User/Get?Id="+ data);
    return result.data.result;
  }
  
  export async function getConfirmationEmail(UserId:any, Token: any): Promise<User>{
    let result = await http.get(`/api/services/app/Account/GetConfirmEmail?UserId=${UserId}&Token=${Token}"`);
    return result.data.result;
  }

  export async function getAllUsersAPI(users : IGetAllUser): Promise<PagedResult<GetAllUserOutput>> {
    let result = null
    if(users.isActive){
      result = await http.get(`/api/services/app/User/GetAll?Keyword=${users.keyword}&IsActive=${users.isActive}&SkipCount=${users.skipCount}&MaxResultCount=${users.maxResultCount}`)
    }else{
      result = await http.get(`/api/services/app/User/GetAll?Keyword=${users.keyword}&SkipCount=${users.skipCount}&MaxResultCount=${users.maxResultCount}`)

    }
      return result.data.result;
  }

  export async function createUserAPI(data: IUserInput): Promise<User> {
    let result = await http.post('/api/services/app/User/Create', data);
    return result.data.result;
  }
  
  export async function updateUserAPI(data: any): Promise<any> {
    let result = await http.put('/api/services/app/User/Update', data);
    return result.data.result;
  }

  export async function deleteUserAPI(id: number): Promise<any> {
    let result = await http.delete(`/api/services/app/User/Delete?Id=${id}`);
    return result.data.result;
  }
  
  export async function LoginAPI(data: any): Promise<LoginUserResponse> {
    let result = await http.post('api/TokenAuth/Authenticate', data);
    return result.data.result;
  }  
  
  export async function registerUserAPI(data: RegisterCredentials): Promise<RegisterUserResponse> {
    let result = await http.post('/api/services/app/Account/Register', data);
    
    return result.data.result;
  } 
  
  export async function resetPasswordAPI(data: ResetPasswordCredentials): Promise<ResetPasswordResponse> {
    let result = await http.post('/api/services/app/User/ResetPassword', data);
    return result.data.result;
  } 
  
  export async function changePasswordAPI(data: IChangePassword) {
    
    let result = await http.post('/api/services/app/User/ResetPassword', data);
    return result.data.result;
  } 
 
  export async function ForgotPasswordAPI(data: IForgotPassword) {
    let result = await http.post('/api/services/app/Account/ForgotPassword', data);
    console.log(result.statusText)
    return result.data.result;
  } 

  export async function UserResetPasswordAPI(data: ResetPassword) {
    let result = await http.post('/api/services/app/Account/UserResetPassword', data);
    console.log(result.statusText)
    return result.data.result;
  } 
