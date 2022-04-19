import colors from '@/constants/colors';
import styled, { css } from 'styled-components';

interface IStyledProps {
  fluid?: boolean;
}

const Button = styled.button<IStyledProps>`
  ${({ fluid }) => css`
    background-color: ${colors.LIGHT_GREY};
    transition: all 0.3s ease;
    border: 1px solid ${colors.LIGHT_BLUE};
    border-radius: 4px;
    padding: 5px 10px;
    text-align: center;
    cursor: pointer;
    font-size: 14px;
    width: ${fluid && '100%'};

    :hover {
      background-color: ${colors.DARK_GREY};
      color: ${colors.WHITE};
    }
  `}
`;


export default Button