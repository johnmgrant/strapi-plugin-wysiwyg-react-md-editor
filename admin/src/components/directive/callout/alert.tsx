import React from 'react';

import styled from 'styled-components';

import {MarkdownCalloutLayout} from './layout';
import {MarkdownCalloutProps} from './type';
import {Information as InformationCircleIcon} from '@strapi/icons';

const AlertIconWrapper = styled.div`
  svg path {
    fill: ${({theme}) => theme.colors.danger600};
  }
`;

export const AlertIcon = () => (
  <AlertIconWrapper>
    <InformationCircleIcon aria-hidden />
  </AlertIconWrapper>
);

export const MarkdownCalloutAlert = (props: MarkdownCalloutProps) => {
  return (
    <MarkdownCalloutLayout
      className='text-rose-600 shadow-rose-600 dark:text-rose-500 dark:shadow-rose-500'
      icon={<AlertIcon />}
      {...props}
    />
  );
};
