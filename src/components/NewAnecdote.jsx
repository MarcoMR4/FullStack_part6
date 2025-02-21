import { useDispatch } from "react-redux";
import { addAnecdoteWithNotification } from "../reducers/anecdoteReducer";

const NewAnecdote = () => {
    const dispatch = useDispatch()

    const createAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdoteWithNotification(content))
    }

    return(
        <div>
            <form onSubmit={createAnecdote}>
                <input name="anecdote" type="textarea"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )

}

export default NewAnecdote