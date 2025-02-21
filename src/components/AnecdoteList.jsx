import { useDispatch, useSelector } from 'react-redux'
import Notification from './Notification'
import { voteAnecdoteWithNotification } from '../reducers/anecdoteReducer'

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
    const filter = useSelector(state => state.anecdoteFilter1)
    const notificate = useSelector(state => state.notification)

    const filteredAnecdotes = anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))

    return(
        <div>
            <h2>Anecdotes</h2>
            {notificate && <Notification message={notificate} />}
            {filteredAnecdotes.map(anecdote => 
                <Anecdote 
                    anecdote={anecdote} 
                    key={anecdote.id}
                    handleVote={() => {
                        dispatch(voteAnecdoteWithNotification(anecdote.id, anecdote.content));
                    }}
                />
            )}

        </div>
    )

}

export default AnecdoteList