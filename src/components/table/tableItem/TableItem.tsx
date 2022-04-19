import React, { useContext } from 'react'
import { TableCell } from './styles'
import { Button } from '@/components'
import { Context } from '@/store/context'
import { ActionTypes, ICompany } from '@/models'

interface TableItemProps {
  company: ICompany
}

const TableItem: React.FC<TableItemProps> = ({ company }) => {
  const { dispatch } = useContext(Context)

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
    e.preventDefault()
    dispatch({ type: ActionTypes.removeCompany, payload: id })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'checkbox') {
      dispatch({
        type: ActionTypes.updateCompany,
        payload: { ...company, checked: !company.checked }
      })
      return
    }

    dispatch({
      type: ActionTypes.updateCompany,
      payload: { ...company, [e.target.name]: e.target.value }
    })
  }

  return (
    <tr>
      <TableCell>
        <input
          type="checkbox"
          checked={company.checked}
          name="checkbox"
          value={company.label}
          onChange={handleChange}
        />
      </TableCell>
      <TableCell>
        <input type="text" name="label" value={company.label} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <input type="number" max="100" min="0" name="vision" value={company.vision} onChange={handleChange} />
      </TableCell>
      <TableCell>
        <input type="number" max="100" min="0" name="ability" value={company.ability} onChange={handleChange} />
      </TableCell>
      <TableCell hasButton>
        <Button fluid onClick={e => handleRemove(e, company.id)}>
          Delete
        </Button>
      </TableCell>
    </tr>
  )
}

export default TableItem
