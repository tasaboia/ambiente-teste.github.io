import { http } from "../httpServices"
import { ISession } from "./type";

export async function SessionInformationAPI(): Promise<ISession> {
    let result = await http.get('/api/services/app/Session/GetCurrentLoginInformations');
    return result.data.result;
}