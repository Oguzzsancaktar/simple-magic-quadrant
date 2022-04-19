import colors from '@/constants/colors'
import styled, { css } from 'styled-components'
import { ITableCellProps } from './types'

export const TableCell = styled.td<ITableCellProps>`
  ${({ hasButton }) => css`
    border: ${!hasButton && '1px solid ' + colors.LIGHT_BLUE};
    border-radius: 4px;
    font-family: sans-serif;
    font-size: 14px;
    padding: ${!hasButton && '5px 10px'};

    input {
      border: 0;
      font-size: inherit;
      padding: 0;
      width: 100%;
    }
  `}
`
