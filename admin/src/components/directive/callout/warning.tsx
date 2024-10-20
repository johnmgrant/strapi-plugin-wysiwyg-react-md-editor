import React from 'react';

import styled from 'styled-components';

import {MarkdownCalloutLayout} from './layout';
import {MarkdownCalloutProps} from './type';

import {Information as InformationCircleIcon} from '@strapi/icons';

const WarningIconWrapper = styled.div`
  svg path {
    fill: ${({theme}) => theme.colors.warning600};
  }
`;

export const WarningIcon = () => (
  <WarningIconWrapper>
    <InformationCircleIcon aria-hidden />
  </WarningIconWrapper>
);

export const MarkdownCalloutWarning = (props: MarkdownCalloutProps) => {
  return (
    <MarkdownCalloutLayout
      className='text-warn glow-warn'
      icon={<WarningIcon />}
      {...props}
    />
  );
};
