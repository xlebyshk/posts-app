import React, {createContext, useState} from 'react'

export type User = {
    userId: number
}

type UserContextType = {
    user: User | null,
    setUser: React.Dispatch<React.SetStateAction<User | null>>
}

type UserContextProviderProps = {
    children: React.ReactNode
}

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [user, setUser] = useState<User | null>(null)
    return <UserContext.Provider value={{user, setUser}}>{children}</UserContext.Provider>
}