import {AxiosResponse} from "axios";
import $api from "../api";
import {CommentResponse} from "../models/CommentResponse";

export default class CommentsService {
    static async createComment(postId: number, name: string, body: string): Promise<AxiosResponse<CommentResponse>> {
        return await $api.post<CommentResponse>('/comments', {postId, name, body})
    }
}