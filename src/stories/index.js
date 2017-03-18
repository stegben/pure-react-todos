import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';

import TodoItem from '../TodoItem';
import TodoList from '../TodoList';

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
      onDelete={() => {}}
    />
    ))
    .add('not done', () => (
    <TodoItem
      content="Hey"
      onCheck={() => {}}
      onDelete={() => {}}
    />
    ));

storiesOf('TodoList', module)
  .add('done', () => (
    <TodoList
      title="todo list 1"
      todos={[
        { content: 'todo1', done: true },
        { content: 'todo2', done: false },
        { content: 'todo3', done: true },
      ]}
      addTodo={() => {}}
      deleteTodo={() => {}}
      checkTodo={() => {}}
      changeTitle={() => {}}
    />
    ));
