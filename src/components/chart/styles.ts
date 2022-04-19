import styled, { css } from 'styled-components'
import colors from '@/constants/colors'
import { IAreaLabelProps, IAxisLabelProps, IInnerAxisProps } from './types'

export const Container = styled.div`
  box-sizing: content - box;
  width: 500px;
  height: 500px;
  border: 2px solid ${colors.DARK_GREY};
  position: relative;
`

export const InnerAxis = styled.div<IInnerAxisProps>`
  ${({ direction }) => css`
    height: ${direction === 'vertical' ? '100%' : '2px'};
    width: ${direction === 'vertical' ? '2px' : '100%'};
    background-color: ${colors.LIGHT_GREY};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`

export const AxisLabel = styled.div<IAxisLabelProps>`
  ${({ axis }) => css`
    font-family: sans-serif;
    font-size: 13px;
    position: absolute;
    left: 0;
    bottom: 0;
    writing-mode: ${axis === 'x' ? 'unset' : 'vertical-lr'};
    transform: translate(${axis === 'x' ? '0, 125%' : '-125%, 0'}) rotate(${axis === 'x' ? '0' : '180deg'});
  `}
`

export const AreaLabel = styled.div<IAreaLabelProps>`
  ${({ area }) => css`
    font-size: 14px;
    background-color: ${colors.LIGHT_BLUE};
    color: ${colors.WHITE};
    padding: 4px 10px;
    border-radius: 4px;
    margin: 6px 0;
    position: absolute;
    bottom: ${area.includes('bottom') && '0'};
    left: ${area.includes('left') && '25%'};
    right: ${area.includes('right') && '25%'};
    transform: translateX(${area.includes('left') ? '-50%' : '50%'});
  `}
`
