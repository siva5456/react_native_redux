// 3rd
import { addItem } from "../ActionTypes"
import { removeItem } from "../ActionTypes"


export const Reducers = (state =[], action) => {

    switch (action.type) {

        case addItem:
               return [...state, action.payload];
                 
        case removeItem:
        return state.filter((item,index)=>{ return index!==action.payload})
      
        default:
            return;
    }

}











