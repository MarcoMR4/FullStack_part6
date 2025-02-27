import { createContext, useReducer, useContext } from 'react'
import { notificationReducer } from './reducers/notificationReducer'

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INC":
        return state + 1
    case "DEC":
        return state - 1
    case "ZERO":
        return 0
    default:
        return state
  }
}

const notificationInitialState = {
  show: false, 
  message: '', 
  error: false
}


const CounterContext = createContext()

export const CounterContextProvider = (props) => {
  const [counter, counterDispatch] = useReducer(counterReducer, 0)
  const [notification, notificationDispatch] = useReducer(notificationReducer, notificationInitialState)

  return (
    <CounterContext.Provider value={[counter, counterDispatch, notification, notificationDispatch] }>
      {props.children}
    </CounterContext.Provider>
  )
}

export const useCounterValue = () => {
    const counterAndDispatch = useContext(CounterContext)
    return counterAndDispatch[0]
}
  
export const useCounterDispatch = () => {
  const counterAndDispatch = useContext(CounterContext)
  return counterAndDispatch[1]
}

export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(CounterContext)
  return notificationAndDispatch[2]
}

export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(CounterContext)
  return notificationAndDispatch[3]
}

export default CounterContext