export const InitialState = {
    todo : [],
    quantity:0
}

function name (name){
  return {name:name,id:Date.now()}
}

export const todoReducer = (state=InitialState,action) => {
   switch (action.type) {
    case "ADD_TODO":
    return  {...state ,todo:[...state.todo,name(action.payload.name)]}
    case "DELETE_TODO":
    return  {...state ,todo: state.todo.filter((item)=> item.id !== action.id)}
    case "Increase":
        return  {...state,quantity:state.quantity +1 } 
    case "Descrease":
            return  {...state,quantity:state.quantity -1 } 
    default:
        break;
   }
}

