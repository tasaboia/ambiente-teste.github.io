
import { initReactQueryAuth } from "../../contexts/AuthContext";
import { storage } from "../../storage/storage"
import { SessionInformationAPI } from "../session/session";
import { LoginCredentials, RegisterCredentials, User } from "../user/types";
import { LoginAPI, registerUserAPI } from "../user/UserApi";

//se autenticação for OK, precisa fazer login -> buscar qual é as informações do usuário.. 
  // e redirecionar.
  //quais são as implicações? 
  //quando já tem as informações do usuário.. fazer log? porque quando abro a aplicação ela já vai buscar se tem informação do usuário
  // no loadUser na verdade eu posso fazer uma pergunta por um modal = > continuar com a cessao de usuário tal= ""
  //ai a pessoa fica no load, ou ela pode voltar para (nao sei ainda)
  //mas preciso ter um tratamento ali no load() ! beleza?


export async function loginAuth(data: any): Promise<any> {
  const response = await LoginAPI(data);

  const { accessToken, userId } = response;
  storage.setToken(accessToken);
  storage.setUser(userId);

  loadUser()

  return response.userId;
}

async function loadUser() {
  let user = null;
  
  if (
    storage.getToken() !== null &&
    storage.getToken() !== undefined
  ) {
    let userId  = storage.getUser();

    try{
      const data = SessionInformationAPI();
      user = data;
      console.log(" dentro do sesseion", user)
    } catch(err){
      console.log("erro")
    }
  }
  console.log("session teste: ", user)
  return user;
}

async function registerUser(data: any): Promise<any>{
  const response = await registerUserAPI(data)
  return response;
}

async function logoutUser() {
   storage.clearToken();
   storage.clearUser();
}

const authConfig = {
  loginAuth,
  loadUser,
  registerUser,
  logoutUser,
};
const { AuthProvider, AuthConsumer, useAuth } = initReactQueryAuth <
  User,
  any,
  LoginCredentials,
  RegisterCredentials>(authConfig);

export { AuthProvider, AuthConsumer, useAuth };
