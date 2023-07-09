import React, {FC, useEffect, useState} from 'react';
import Comment from "./Comment";
import {CommentResponse} from "../../../models/CommentResponse";
import PostsService from "../../../services/PostsService";
import CommentsService from "../../../services/CommentsService";

interface CommentsProps {
    postId: number | undefined
}

const Comments: FC<CommentsProps> = ({postId}) => {

    const [comments, setComments] = useState<CommentResponse[]>([])
    const [inputValue, setInputValue] = useState<string>("");

    useEffect(() => {
        if (postId) {
            PostsService.getComments(postId).then((resp) => setComments(resp.data))
        }
    }, [postId])

    const createComment = async (name: string, body: string) => {
        if (postId) {
            CommentsService.createComment(postId, name, body).then((resp) => {
                if (resp.status !== 201) {
                    return
                } else {
                    setComments((prev) => [...prev, resp.data])
                    setInputValue("")
                }
            })
        }
    }

    return (
        <div className='flex flex-col justify-between h-full'>
            <ul className='p-4 h-[calc(100%_-_50px)] overflow-y-auto'>
                {comments?.map((comment: CommentResponse) =>
                    <li key={comment.id} className='w-full rounded-md bg-white p-2 mb-2'><Comment
                        username={comment.name} body={comment.body}/></li>
                )}
            </ul>
            <div className='bg-white h-11 flex items-center justify-between rounded-br-md rounded-bl-md'>
                <input type='text'
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                       placeholder='Введите коментарий...'
                       className='w-full bg-transparent outline-none text-xs px-2 text-black
                       placeholder:text-gray-400'/>
                <button
                    onClick={() => createComment("user", inputValue)}
                    className='text-sm font-normal rounded-md bg-white mr-2 px-3 py-2
                    text-black ring-1 ring-inset ring-gray-300 hover:bg-sky-500
                    hover:text-white'>отправить
                </button>
            </div>
        </div>
    );
};

export default Comments;