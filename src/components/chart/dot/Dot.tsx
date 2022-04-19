import React, { useContext } from 'react'
import { Container, Label } from './styles'
import { Context } from '@store/context'
import { ActionTypes, ICompany } from '@/models'

interface IProps {
  key?: number
  company: ICompany
}

const Dot: React.FC<IProps> = ({ company, key }) => {
  const { dispatch } = useContext(Context)

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    const parent = (e.target as HTMLDivElement).parentElement!.getBoundingClientRect()

    const updatedCompany = {
      ...company,
      ability: -((e.clientY - parent.y - 500) / 5).toFixed(2),
      vision: +((e.clientX - parent.x) / 5).toFixed(2)
    }
    dispatch({ type: ActionTypes.updateCompany, payload: updatedCompany })
  }

  return (
    <>
      <Container
        key={key}
        style={{ bottom: `${company.ability}%`, left: `${company.vision}%`, opacity: company.checked ? '1' : '0.5' }}
        draggable
        onDrag={handleDrag}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => e.preventDefault()}
      >
        <Label>{company.label}</Label>
      </Container>
    </>
  )
}

export default Dot
