
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSearchParams, useNavigate } from 'react-router-dom';
import './App.css';
import {addTask,deletefun, editupdate, } from './pages/redux/Slice';
function App() {
const [overall,setoverall]=useState("")

const [name,setName]=useState("")
const [update,setupdate]=useState("")
  // const navigate=useNavigate()

  const state=useSelector((data)=>data).sample
  console.log(state.collect[0]);

    const dispatch=useDispatch()
console.log(state)
  


const submit=()=>{
  if(update===""){
    const value={
      id:state.collect.length+1,
      name:name,
    }
    // console.log(value)
  
  
  
  dispatch(addTask(value))
  }else{
    const value={
      id:update.id,
      name:name,
    }

    dispatch(addTask(value))

    setupdate("")



   

  }



setName("")
document.getElementById("input").value=""


}




const deletefuntion=(id)=>{
  console.log(id)
dispatch(deletefun(id))
}


const editfun=(id)=>{
console.log(id);
// dispatch(edit(id))
const val=state.collect.findIndex((item)=>item.id===id)

console.log(val)


document.getElementById("input").value=state.collect[val].name
console.log(update)
setupdate(state.collect[val])
dispatch(editupdate(id))
}

 
  return (

    <div>
      <div className='overall'>

    

    <input id='input' type={"text"} onChange={(e)=>setName(e.target.value)}/>    

    <button onClick={()=>submit()}>click</button>    
      </div>
 
      {state.collect.map((item,index)=>{
        return(
          <div key={index} className={"box"}>
            <h1>{item.name}</h1>
            <button onClick={()=>editfun(item.id)}>Edit</button>
            <button onClick={()=>deletefuntion(item.id)}>Delete</button>
          </div>
        )
       
      })}

    </div>
  );
}

export default App;
