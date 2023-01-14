import { createSlice } from "@reduxjs/toolkit";

export const sampleslice=createSlice({
    name:"sample",
    initialState:{
        collect:[]
    },
    reducers:{
       addTask(state,action){
        state.collect.push(action.payload)
       },
       
       deletefun(state,action){
      

        state.collect=state.collect.filter((item)=>item.id!==action.payload)
        
       },
       editupdate(state,action){
        state.collect=state.collect.filter((item)=>item.id!==action.payload)
       }


    //    edit(state,action){
    //     console.log("sakthi")
    //    }



    }

})

export default sampleslice.reducer;
export const {addTask,deletefun,editupdate}=sampleslice.actions