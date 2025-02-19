import noteReducer, { newNote, toggleImportance } from './noteReducer'
import deepFreeze from 'deep-freeze'

describe('noteReducer', () => {
  test('returns new state with action newNote', () => {
    const state = []
    const action = newNote('the app state is in redux store') 

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState[0].content).toBe('the app state is in redux store')
    expect(newState[0].important).toBe(false) 
    expect(newState[0]).toHaveProperty('id') 
  })

  test('returns new state with action toggleImportance', () => {
    const state = [
      {
        content: 'the app state is in redux store',
        important: true,
        id: 1
      },
      {
        content: 'state changes are made with actions',
        important: false,
        id: 2
      }
    ]

    const action = toggleImportance(2) 

    deepFreeze(state)
    const newState = noteReducer(state, action)

    expect(newState).toHaveLength(2)

    expect(newState).toContainEqual(state[0]) 

    expect(newState).toContainEqual({
      content: 'state changes are made with actions',
      important: true, 
      id: 2
    })
  })
})
