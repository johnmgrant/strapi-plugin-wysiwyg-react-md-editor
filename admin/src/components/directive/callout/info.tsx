import React from 'react';

import styled from 'styled-components';

import {MarkdownCalloutLayout} from './layout';
import {MarkdownCalloutProps} from './type';
import {Information as InformationCircleIcon} from '@strapi/icons';

const IconWrapper = styled.div`
  svg path {
    fill: ${({theme}) => theme.colors.buttonNeutral0};
  }
`;

export const InfoIcon = () => (
  <IconWrapper>
    <InformationCircleIcon aria-hidden />
  </IconWrapper>
);

export const MarkdownCalloutInfo = (props: MarkdownCalloutProps) => {
  return (
    <MarkdownCalloutLayout
      className='text-info glow-info'
      icon={<InfoIcon />}
      {...props}
    />
  );
};
