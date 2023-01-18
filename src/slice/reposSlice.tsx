import {createReducer, createSlice, PayloadAction} from "@reduxjs/toolkit";
   interface Initial
   {
    repos:{
        objects:[],
        time:string,
        total:number
    };
    loading:boolean;
    searchTerm:string
    }
const inital:Initial={
    repos:{
        objects:[],
        time: "",
        total:0
    },
    loading:true,
    searchTerm:"react",
    
}
 

 
const repoSlice=createSlice({
    name: "repos",
    initialState: inital,
    reducers:{
        update:(state,action )=>{
            state.searchTerm=action.payload;
        },
        loading:(state)=>{
            state.loading=true;
        },
        getRopes:(state,action:PayloadAction<{time:string,total:number,objects:[]}>)=>{
            state.repos=action.payload
            console.log(state.repos);
            
        }
     
    }
   
    
})
 

export const {update,loading,getRopes}=repoSlice.actions;
export default repoSlice.reducer;