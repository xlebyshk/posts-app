import React from 'react';
import SharedSvgSelector from "../../../assets/icons/shared/SharedSvgSelector";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
    return (
        <div className='flex sticky top-0 pt-2 items-center justify-between w-full z-50 bg-white'>
            <div className='flex items-center'>
                <div className='mr-5 w-16 h-16'><SharedSvgSelector id='header-logo'/></div>
                <p className='uppercase font-bold text-2xl'>React Post</p>
            </div>
            <div className='flex items-center'>
                <DropDownMenu/>
            </div>
        </div>
    );
};

export default Header;