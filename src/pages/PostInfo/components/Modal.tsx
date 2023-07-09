import React, {FC} from 'react';

interface ModalProps {
    active: boolean
    setActive: (active: boolean) => void
}

const Modal: FC<ModalProps> = ({active, setActive}) => {
    return (
        <div
            onClick={() => setActive(false)}
            className={`w-screen h-screen bg-black/20 backdrop-blur-sm fixed top-0 left-0 flex justify-center 
            items-center ${active ? 'block' : 'hidden'} `}>
            <div
                onClick={e => e.stopPropagation()}
                className='p-5 rounded-md bg-slate-100 w-1/4'>

            </div>
        </div>
    );
};

export default Modal;