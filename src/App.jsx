import Mainlayout from './compnents/mainlayout'
import './App.css'
import { con } from './compnents/context'
import { useReducer} from 'react'
function App() {
  function reducer(state,action){
    switch(action.type){
      case "add":{
        const exist=state.find((e)=>e.name===action.payload.name)
        if(exist){
         return state.map(item => {
  return item.name === action.payload.name
    ? { ...item, quantity: item.quantity + 1 }
    : item;
});

        }
        else{
          return [...state,{...action.payload,quantity:1}];
        }
    }
    case "delete":{
      const exist=state.find((e)=>e.name===action.payload.name);
      if(exist.quantity===1){
        return state.filter((item)=>item.name!==action.payload.name)
      }
      else{
        return state.map(item =>
        item.name === action.payload.name
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      }

    }
    case "deleteitem":{
      return state.filter((item)=>item.name!==action.payload)

    }
    case "clearcart":{
      return [];
    }
  }

  }
  const [items,dispatch]=useReducer(reducer,[]);
  return(
    <con.Provider value={{items,dispatch}}>
    <Mainlayout/>
    </con.Provider>
  )
}

export default App
