
const initialState=0;
const redurcer=(state=initialState,action)=>{
    if (action.type === "increament") {
        if(state < 5){
            return state + 1;
        }
        else{
            return state;
        }
    } else if (action.type === "decrement") {
    //   return state-1;
      if (state > 0) {
        return state - 1;
      } else {
        return state;
      }
    }
    else{
        return state;
    }
}


export default redurcer;