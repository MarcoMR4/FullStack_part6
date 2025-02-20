import { useDispatch, useSelector } from "react-redux"
import { setFilter } from "../reducers/anecdoteFilterReducer"

const Filter = () => {
    const dispatch = useDispatch()

    const anecdotes = useSelector(({ setFilter, anecdotes }) => {
        if ( setFilter === '' ) {
            console.log('set filter')
            return anecdotes
        }
       
    })

    const handleChange = (event) => {
        dispatch(setFilter(event.target.value))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
        filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter