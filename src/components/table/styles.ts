import colors from '@/constants/colors'
import styled, { css } from 'styled-components'
import { ITableHeaderProps } from './types'

export const Container = styled.div`
  margin-left: 1.5rem;
`

export const TableHeader = styled.th<ITableHeaderProps>`
  ${({ width }) => css`
    font-family: sans-serif;
    font-size: 12px;
    text-align: center;
    padding: 2px 0;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    width: ${width || '6rem'};
    border-radius: 4px;
  `}
`
