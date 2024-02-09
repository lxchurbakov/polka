import React from 'react';
import styled from 'styled-components';

import * as theme from './theme';

export const Base = styled.div`
    padding: ${props => props.p};
    padding-top: ${props => props.pt};
    padding-right: ${props => props.pr};
    padding-left: ${props => props.pl};
    padding-bottom: ${props => props.pb};
    margin: ${props => props.m};
    margin-top: ${props => props.mt};
    margin-right: ${props => props.mr};
    margin-left: ${props => props.ml};
    margin-bottom: ${props => props.mb};
    width: ${props => props.w};
    height: ${props => props.h};
    max-width: ${props => props.mw};
    max-height: ${props => props.mh};

    box-sizing: border-box;
`;

export const Flex = styled(Base)`
    display: flex;
    flex-direction: ${props => props.dir || 'row'};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justify || 'center'};
    flex-wrap: ${props => props.isWrap ? 'wrap' : 'nowrap'};
    gap: ${props => props.gap || '0'};
`;

export const Text = styled(Base)`
    font-family: ${theme.font};
    font-size: ${props => props.size || '16px'};
    font-weight: ${props => props.weight || 400};
    color: ${props => props.color || theme.colors.text};
    line-height: ${props => props.line || '1.6'};
    text-align: ${props => props.align};
`;

export const Card = styled(Base)`
    display: ${props => props.block ? 'block' : 'inline-block'};
    background: ${props => props.background || 'none'};
    border: ${props => props.border || 'none'};
    border-radius: ${props => props.radius || '0px'};
    overflow: ${props => props.hideOverflow ? 'hidden' : 'visible'};
    box-shadow: ${props => props.shadow || 'none'};
`;

export const Clickable = styled(Card)`
    cursor: pointer;
    user-select: none;

    &:active {
        transform: translateY(1px);
    }
`;

export const Container = ({ children, ...props }) => {
    return (
        <Flex {...props}>
            <Base w="100%" mw="1280px" p="0 20px">
                {children}
            </Base>
        </Flex>
    )
};
