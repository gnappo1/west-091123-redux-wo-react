import './style.css'
import { budgetReducer } from './reducers/budget.js'
import { legacy_createStore as createStore } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(budgetReducer, composeWithDevTools())
console.log("🚀 ~ file: main.js:7 ~ store:", store.getState())

//! globals
const actionDrop = document.getElementById("action-dropdown")

//! helpers
const validateForm = () => !quantity.value || !actionDrop.value
const validateNumber = (value, action) => {
  let num = parseInt(value)
  if (num < 0 || typeof num != "number") {
    if (action == "add") {
      num = 0
    } else if (action == "subtract") {
      num = 0
    } else {
      num = 1
    }
  }
  return num
}
const displayBudget = () => {
  budget.textContent = `Budget: $${store.getState().budget}`
}

//! attach listeners
form.addEventListener("submit", e => {
  e.preventDefault()
  if (validateForm()) return
  store.dispatch({
    type: actionDrop.value,
    payload: validateNumber(quantity.value, actionDrop.value)
  })
  e.target.reset()
})

//! invoke logic
displayBudget()

const unsubscribe = store.subscribe(displayBudget)
//! In case later you wanted to unsubscribe
// unsubscribe()
