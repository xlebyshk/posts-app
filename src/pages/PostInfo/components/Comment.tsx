import React, {FC} from 'react';

interface CommentProps {
    username: string,
    body:string
}

const Comment:FC<CommentProps> = ({username,body}) => {
    return (
        <>
            <h3 className='font-semibold text-sm'>{username}</h3>
            <p className='mt-2 font-normal text-xs'>{body}</p>
        </>
    );
};

export default Comment;