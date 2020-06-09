import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import Comment from './comment';
describe("TableRow", () => {
  it("should render my component Comment", () => {
    const wrapper = shallow(<Comment />);
  });
});