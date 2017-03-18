import React from 'react';
import ReactDOM from 'react-dom';
// import jest from 'jest';
import { shallow } from 'enzyme';

import TodoItem from '../TodoItem';


describe('TodoItem', () => {
  it('should render withour crash (done)', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TodoItem
        done
        content="Hey"
        onCheck={() => {}}
        onDelete={() => {}}
      />, div,
    );
  });
  it('should render withour crash (not done)', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TodoItem
        content="Hey"
        onCheck={() => {}}
        onDelete={() => {}}
      />, div,
    );
  });
  it('should contain the contents', () => {
    const content = 'some text to be shown';
    const component = shallow(
      <TodoItem
        content={content}
        onCheck={() => {}}
        onDelete={() => {}}
      />,
    );
    expect(component.contains(content)).toEqual(true);
  });
  it('should contain the contents even done', () => {
    const content = 'some text to be shown';
    const component = shallow(
      <TodoItem
        done
        content={content}
        onCheck={() => {}}
        onDelete={() => {}}
      />,
    );
    expect(component.contains(content)).toEqual(true);
  });
  it('should trigger onCheck when click on first button', () => {
    const fn = jest.fn();
    const component = shallow(
      <TodoItem
        done
        content="some content"
        onCheck={fn}
        onDelete={() => {}}
      />,
    );
    component.find('button').first().simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });
  it('should trigger onDelete when click on second button', () => {
    const fn = jest.fn();
    const component = shallow(
      <TodoItem
        done
        content="some content"
        onCheck={() => {}}
        onDelete={fn}
      />,
    );
    component.find('button').at(1).simulate('click');
    expect(fn.mock.calls.length).toEqual(1);
  });
});
