import React, {FC} from 'react';

interface PostProps {
    title: string,
    body: string
}

const Post: FC<PostProps> = ({title, body}) => {
    return (
        <div className='w-full gap-x-1.5 rounded-md bg-white p-3 drop-shadow-sm ring-1 ring-inset ring-gray-300
            hover:bg-sky-500
            hover:text-white'>
            <h3 className='font-semibold text-2xl'>{title}</h3>
            <p className='mt-2 font-normal text-lg'>{body}</p>
        </div>
    );
};

export default Post;