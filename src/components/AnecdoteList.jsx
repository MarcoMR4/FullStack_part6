import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'


const Anecdote = ({anecdote, handleVote}) => {
    return(
        <div>
            <p>{anecdote.content}</p>
            <p>has {anecdote.votes} <button onClick={handleVote}>vote</button></p>
        </div>
    )
}


const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => state.anecdotes)

    return(
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => 
                <Anecdote 
                    anecdote={anecdote} 
                    key={anecdote.id}
                    handleVote={() => {
                        dispatch(voteAnecdote(anecdote.id))
                    }}
                />
            )}

        </div>
    )

}

export default AnecdoteList