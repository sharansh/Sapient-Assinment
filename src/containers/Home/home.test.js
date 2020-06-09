import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import Home from './home';
describe("TableRow", () => {
  it("should render my component Home", () => {
    const wrapper = shallow(<Home />);
  });
});