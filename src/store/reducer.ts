import { ActionTypes, ICompany } from '@/models'

export const initialState: ICompany[] = JSON.parse(localStorage.getItem('companies') || '[]')

export interface IAddCompanyAction {
  type: ActionTypes.addCompany
  payload: ICompany
}

export interface IRemoveCompanyAction {
  type: ActionTypes.removeCompany
  payload: number
}

export interface IUpdateCompanyAction {
  type: ActionTypes.updateCompany
  payload: ICompany
}

export type Actions = IAddCompanyAction | IRemoveCompanyAction | IUpdateCompanyAction

export const reducer = (state: ICompany[], action: Actions) => {
  switch (action.type) {
    case ActionTypes.addCompany:
      return [...state, action.payload]

    case ActionTypes.updateCompany:
      const foundCompanyIdx = state.findIndex(s => s.id === action.payload.id)
      const newState = [...state]
      if (action.payload.ability > 100) action.payload.ability = 100
      if (action.payload.vision > 100) action.payload.vision = 100
      if (action.payload.ability < 0) action.payload.ability = 0
      if (action.payload.vision < 0) action.payload.vision = 0
      newState[foundCompanyIdx] = action.payload
      return newState

    case ActionTypes.removeCompany:
      return state.filter(s => s.id !== action.payload)

    default:
      return state
  }
}
