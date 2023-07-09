import $api from  '../api'
import {AxiosResponse} from "axios";
import {UserResponse} from "../models/UserResponse";

export default class UsersService {
    static async getUsers(): Promise<AxiosResponse<UserResponse[]>>{
        return await $api.get<UserResponse[]>('/users')
    }

    static async getUser(id:number): Promise<AxiosResponse<UserResponse>>{
        return await $api.get<UserResponse>(`/users/${id}`)
    }
}