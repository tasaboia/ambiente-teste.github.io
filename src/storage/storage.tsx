
const storage = {

  //sessionStorage
    setSessionEmail: (sessionEmail: any) => window.sessionStorage.setItem("sessionEmail", sessionEmail),
    setSessionPassword: (sessionPassword: any) => window.sessionStorage.setItem("sessionPassword", sessionPassword),
    getSessionEmail: () =>{ return window.sessionStorage.getItem('sessionEmail'); },
    getSessionPassword: () => { return window.sessionStorage.getItem('sessionPassword'); },
    clearSessionEmail: () => { window.sessionStorage.removeItem('sessionEmail')},
    clearSessionPassword: () => { window.sessionStorage.removeItem('sessionPassword')},
  
    setSessionToken: (token: any) => window.sessionStorage.setItem("token", JSON.stringify(token)),
    setSessionUser: (user: any) => window.sessionStorage.setItem("user", JSON.stringify(user)),
    getSessionToken: () =>{ return sessionStorage.getItem("token"); },
    getSessionUser: () =>{ return sessionStorage.getItem("user"); },
    clearSessionToken: () => window.sessionStorage.removeItem("user"),
    clearSessionUser: () => window.sessionStorage.removeItem("token"),

  //localStorage

    setEmail: (email: any) => window.localStorage.setItem("email", JSON.stringify(email)),
    setPassword: (password: any) => window.localStorage.setItem("password", JSON.stringify(password)),
    getEmail: () =>{ return localStorage.getItem("email"); },
    getPassword: () =>{ return localStorage.getItem("password"); },
    clearEmail: () => window.localStorage.removeItem("email"),
    clearPassword: () => window.localStorage.removeItem("password"),


    getToken: () =>{ return localStorage.getItem("token"); },
    setToken: (token: any) => window.localStorage.setItem("token", JSON.stringify(token)),
    clearToken: () => window.localStorage.removeItem("token"),
    getUser: () => { return localStorage.getItem("user"); },
    setUser: (user: any) => window.localStorage.setItem("user", JSON.stringify(user)),
    clearUser: () => window.localStorage.removeItem("user")

  };

export { storage };

 