import { reducerActionType } from "@/types/reducerActionType";

export type UserType = {
    index: number;
}
export const userInitialState: UserType = {
    index: 0,
}

export const userReducer = (state: UserType, action: reducerActionType ) =>{
    switch(action.type){
        case 'CHANGE_INDEX':
            return{...state, index: action.payload.index};
            break;
    }
    
    return state;
}