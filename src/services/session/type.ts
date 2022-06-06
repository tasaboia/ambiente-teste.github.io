export interface ISession {
    application: {
      version: string,
      releaseDate: string,
      features: {},
    },
    user: {
      id: 0,
      name: string,
      surname: string,
      userName: string,
      emailAddress: string
    },
    tenant: {
      id: 0,
      tenancyName: string,
      name: string
    }
}