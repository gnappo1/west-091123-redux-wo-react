const initialState = {
  budget: 0
}

export const budgetReducer = (previousState=initialState, action) => {
  switch (action.type) {
    case "add":
      return {
        ...previousState,
        budget: previousState.budget + action.payload
      }
      
    case "subtract":
      
      return {
        ...previousState,
        budget: previousState.budget - action.payload
      };
    case "power":
      
      return {
        ...previousState,
        budget: previousState.budget ** action.payload
      }
  
    default:
      return previousState
  }
}
