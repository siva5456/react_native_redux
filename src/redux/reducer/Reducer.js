// second


export const Reducer = (state =[], action) => {

    switch (action.type) {

        case "addItem":
               return [...state, action.payload];
                 
        case "removeItem":
        return state.filter((item,index)=>{ return index!==action.payload})
      
        default:
            return state;
    }

}











