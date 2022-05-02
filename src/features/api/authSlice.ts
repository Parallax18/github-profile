import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../services/model/user"

interface MenuState {
   user : any,
   isAuthenticated : boolean
}



const initialState : MenuState =  {
    user : null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        authenticateUser: (state, action: PayloadAction<IUser>) => {
          state.user =  action.payload
          state.isAuthenticated = true

        },
        logoutUser: (state) => {
           state.user = null
           state.isAuthenticated = false
        },

    }
})


export const { authenticateUser, logoutUser } = authSlice.actions


export default authSlice.reducer