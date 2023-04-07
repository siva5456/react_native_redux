// second


export const ThemeReducer = (state =false, action) => {

    switch (action.type) {

        case "changeTheme":
        return action.payload
      
        default:
            return state;
    }

}












