import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import TodoItem from '../TodoItem';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
  ));

storiesOf('TodoItem', module)
  .add('done', () => (
    <TodoItem
      done
      content="Hey"
      onCheck={() => {}}
      onCheck={() => {}}
    />
    ))
    .add('not done', () => (
    <TodoItem
      content="Hey"
      onCheck={() => {}}
      onCheck={() => {}}
    />
    ));
