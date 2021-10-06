import { css } from 'styled-components';

type propsType = {
    backgroundColor?: string;
    padding?: string;
    height?: string;
    width?: string;
    display?: string;
    fontSize?: string;
    marginLeft?: string;
    textAlign?: any;
    flex?: number;
    flexDirection?: any;
    alignItems?: any;
    justifyContent?: any;
}

export const mobile = (props: propsType) => {
    return css`
        @media only screen and (max-width: 480px){
            ${props}
        }
    
    `
}