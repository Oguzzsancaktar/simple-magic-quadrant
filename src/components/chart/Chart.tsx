import React, { useContext } from 'react'
import { Container, AxisLabel, InnerAxis, AreaLabel } from './styles'
import { Point } from './dot'
import { Context } from '@/store/context'

interface IProps {}

const Chart: React.FC<IProps> = () => {
  const { state } = useContext(Context)
  return (
    <Container>
      <AxisLabel axis="x">Completeness of vision &#8594;</AxisLabel>
      <AxisLabel axis="y">Ability to execute &#8594;</AxisLabel>
      <InnerAxis direction="horizontal" />
      <InnerAxis direction="vertical" />
      <AreaLabel area="top-left">Challengers</AreaLabel>
      <AreaLabel area="top-right">Leaders</AreaLabel>
      <AreaLabel area="bottom-right">Visionaries</AreaLabel>
      <AreaLabel area="bottom-left">Niche Players</AreaLabel>

      {state.map((company, index) => (
        <Point key={index} company={company} />
      ))}
    </Container>
  )
}

export default Chart
