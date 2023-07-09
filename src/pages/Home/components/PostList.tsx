import React, {useContext, useEffect, useState} from 'react';
import Post from "./Post";
import {PostResponse} from "../../../models/PostResponse";
import {UserContext} from "../../../context/UserContext";
import PostsService from "../../../services/PostsService";
import {Link} from "react-router-dom";

const PostList = () => {

    const [posts, setPosts] = useState<PostResponse[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [totalPage, setTotalPage] = useState<number>(0)
    const [fetching, setFetching] = useState<boolean>(true)
    const userContext = useContext(UserContext)

    useEffect(() => {
        if (userContext?.user?.userId !== undefined) {
            PostsService.getUsersPosts(userContext?.user?.userId)
                .then(resp => {
                    setPosts(resp.data)
                })
        }
    }, [userContext?.user?.userId])

    useEffect(() => {
        if (fetching) {
            PostsService.getPosts(currentPage).then((resp) => {
                setPosts([...posts, ...resp.data])
                setTotalPage(resp.headers['x-total-count'])
                setCurrentPage(prev => prev + 1)
            }).finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        const handleScroll = (e: any) => {
            const scrollHeight = e.target.documentElement.scrollHeight
            const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
            if (currentHeight + 1 >= scrollHeight && posts.length < totalPage) {
                setFetching(true)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [fetching])

    return (
        <ul className='mt-20'>
            {posts?.map((post: PostResponse) =>
                <Link key={post.id} to={`/post/${post.id}`}>
                    <li className='p-2'><Post title={post.title} body={post.body}/></li>
                </Link>
            )}
        </ul>
    );
};

export default PostList;