import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createAnecdote, getAnecdotes, updateAnecdote } from '../anecdotesRequests'

const Anecdotes = () => {

    const queryClient = useQueryClient()

    const newAnecdoteMutation = useMutation({
        mutationFn: createAnecdote,
        onSuccess: (newAnecdote) => {
          const anecdotes = queryClient.getQueryData(['anecdotes'])
          queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
        }
    })

     const updateAnecdoteMutation = useMutation({
        mutationFn: updateAnecdote,
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
          queryClient.setQueryData(['anecdotes']), anecdotes.map(an => an.id === an.id ? an.votes += 1 : an)
        },
      })

    const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false
    })
    console.log(JSON.parse(JSON.stringify(result)))

    if ( result.isLoading ) {
        return <div>loading data...</div>
    }

    const anecdotes = result.data

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        newAnecdoteMutation.mutate({ content, votes: 0 })
    }

    const toggleVotes = (anecdote) => {
        updateAnecdoteMutation.mutate({...anecdote, votes: anecdote.votes + 1 })
      }

    return (
        <div>
           <h2>Anecdotes</h2>
           <form onSubmit={addAnecdote}>
                <input name="anecdote" />
                <button type="submit">add</button>
            </form>
            {
                anecdotes.map(ane => (
                    <li key={ane.id} onClick={() => toggleVotes(ane)}>
                        {ane.content} with {ane.votes} votes
                    </li>
                ))
            }
          
        </div>
    )
}

export default Anecdotes