import React, {useEffect, useState} from 'react';
import Comments from "./components/Comments";
import {useParams} from "react-router-dom";
import {PostResponse} from "../../models/PostResponse";
import PostsService from "../../services/PostsService";
import UsersService from "../../services/UsersService";

const PostInfo = () => {
    const {id} = useParams<string>()
    const [post, setPost] = useState<PostResponse>()
    const [username, setUsername] = useState<string>('')

    useEffect(() => {
        if (id) {
            PostsService.getPost(id).then((resp) => setPost(resp.data))
        }
    }, [id])

    useEffect(() => {
        if (post?.userId) {
            UsersService.getUser(post?.userId).then((resp) => setUsername(resp.data.name))
        }
    }, [post?.userId])

    return (
        <>
            <div
                className='flex gap-x-1.5 bg-slate-100 w-full h-4/5 rounded-md p-8 drop-shadow-sm ring-1 ring-inset ring-gray-300'>
                <div className='flex-1'>
                    <h3 className='text-lg font-semibold'>{username}</h3>
                    <p className='mt-1 text-sm text-gray-500'>{post?.title}</p>
                    <p className='mt-4 text-sm font-normal'>{post?.body}</p>
                </div>
                <div className='flex-1 bg-slate-200 rounded-md'>
                    <Comments postId={post?.id}/>
                </div>
            </div>
        </>
    );
};

export default PostInfo;