import React, { useReducer, useEffect } from 'react'
import GlobalStyle from '@/styles/GlobalStyle'
import { Container } from '@/App.styles'
import { Chart } from '@/components'
import { Table } from '@/components'
import { initialState, reducer } from '@/store/reducer'
import { Context } from '@/store/context'

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('companies', JSON.stringify(state))
    }, 500)

    return () => clearTimeout(timer)
  }, [state])

  return (
    <Context.Provider value={{ state, dispatch }}>
      <GlobalStyle />
      <Container>
        <Chart />
        <Table />
      </Container>
    </Context.Provider>
  )
}

export default App
