import { ICompany } from '@/models'
import { createContext } from 'react'
import { Actions, initialState } from './reducer'

export const Context = createContext<{
  state: ICompany[]
  dispatch: React.Dispatch<Actions>
}>({
  state: initialState,
  dispatch: () => undefined
})
