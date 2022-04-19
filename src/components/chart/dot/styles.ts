import colors from '@/constants/colors'
import styled from 'styled-components'

export const Container = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${colors.DARK_BLUE};
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  cursor: pointer;
`

export const Label = styled.div`
  font-family: sans-serif;
  font-size: 13px;
  color: ${colors.DARK_BLUE};
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(100%, 100%);
`
