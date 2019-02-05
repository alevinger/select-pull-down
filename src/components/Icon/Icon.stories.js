import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Icon from './Icon';


storiesOf('Icon', module)
.add('clear', () =>   <Icon type='clear' />)
.add('search', () =>   <Icon type='search' />);
