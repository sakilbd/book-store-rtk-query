import { createSlice } from "@reduxjs/toolkit";

let initialState= {
    search_text:''
}
const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.search_text = action.payload;
        }
       
    }
})

export default searchSlice.reducer;
export const { setSearchText } = searchSlice.actions;




