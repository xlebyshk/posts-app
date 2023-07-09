import $api from '../api'
import {AxiosResponse} from "axios";
import {PostResponse} from "../models/PostResponse";
import {CommentResponse} from "../models/CommentResponse";

export default class PostsService {
    static async getUsersPosts(userId: number): Promise<AxiosResponse<PostResponse[]>> {
        return await $api.get<PostResponse[]>('/posts', {params: {userId}})
    }

    static async getPosts(_page: number): Promise<AxiosResponse<PostResponse[]>> {
        return await $api.get<PostResponse[]>('/posts', {params: {_limit: '10', _page}})
    }

    static async getPost(id: string): Promise<AxiosResponse<PostResponse>> {
        return await $api.get<PostResponse>(`/posts/${id}`)
    }

    static async getComments(id: number): Promise<AxiosResponse<CommentResponse[]>> {
        return await $api.get<CommentResponse[]>(`/posts/${id}/comments`)
    }
}