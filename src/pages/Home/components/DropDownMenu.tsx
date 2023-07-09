import React, {useContext, useEffect, useState} from 'react';
import {BiChevronDown, BiChevronUp} from 'react-icons/bi'
import {AiOutlineSearch} from "react-icons/ai";
import {UserResponse} from "../../../models/UserResponse";
import UsersService from "../../../services/UsersService";
import {UserContext} from "../../../context/UserContext";

const DropDownMenu = () => {
        const [isOpen, setIsOpen] = useState<boolean>(false);
        const [inputValue, setInputValue] = useState<string>("");
        const [selected, setSelected] = useState<string>("");
        const [users, setUsers] = useState<UserResponse[]>([])
        const userContext = useContext(UserContext)

        useEffect(() => {
            UsersService.getUsers().then(resp => setUsers(resp.data))
        }, [])

        const currentUser = (user: UserResponse) => {
            setSelected(user.name)
            userContext?.setUser({userId: user.id})
        }

        return (
            <div className='relative inline-block text-left w-72'>
                <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className='inline-flex items-center justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2
                    text-sm font-semibold text-gray-500 drop-shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-sky-500
                    hover:text-white'>
                    {selected ? selected.length > 25
                            ? selected?.substring(0, 25) + "..."
                            : selected
                        : 'Выберите имя пользователя'}
                    {!isOpen ? (
                        <BiChevronDown size={20}/>
                    ) : (
                        <BiChevronUp size={20}/>
                    )}
                </button>
                {isOpen &&
                    <ul className='absolute w-full top-12 rounded-md bg-white drop-shadow-sm ring-1 ring-inset ring-gray-300
                    overflow-y-auto overflow-x-hidden max-h-36 z-50'>
                        <div className='flex  items-center px-2 rounded-t-md sticky top-0 m-px bg-white'>
                            <AiOutlineSearch size={18} className='text-gray-400'/>
                            <input type='text'
                                   value={inputValue}
                                   onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                                   placeholder='Введите имя пользователя'
                                   className='w-full bg-transparent p-2 outline-none text-sm text-gray-500 placeholder:text-gray-300'/>
                        </div>
                        {users?.map((user: UserResponse) =>
                            <li key={user?.id}
                                className={`w-full p-2 text-sm font-semibold text-gray-500 hover:bg-sky-500 cursor-pointer hover:text-white
                                ${user?.name?.toLowerCase().startsWith(inputValue)
                                    ? 'block'
                                    : 'hidden'
                                }`}
                                onClick={() => {
                                    if (user?.name?.toLowerCase() !== selected.toLowerCase()) {
                                        currentUser(user)
                                    }
                                    setIsOpen((prev) => !prev)
                                }}
                            >
                                {user?.name}
                            </li>
                        )}
                    </ul>
                }
            </div>
        );
    }
;

export default DropDownMenu;