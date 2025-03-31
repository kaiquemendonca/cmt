'use client'
import React, { createContext, useReducer} from "react";
import { reducerActionType } from "@/types/reducerActionType";
import { UserType, userInitialState, userReducer } from "@/reducers/userReducer";

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispach: React.Dispatch<any>
}

const initialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: initialState,
    dispach: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
})

interface ChildrenType {
    children: React.ReactNode;
}

export const ContextProvider = ({ children } : ChildrenType) => {
    const [state, dispach] = useReducer(mainReducer, initialState)

    return(
        <Context.Provider value={{state, dispach}}>
            {children}
        </Context.Provider>
    )
}