import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import TableRow from './tablerow';
describe("TableRow", () => {
  it("should render my component TableRow", () => {
    const wrapper = shallow(<TableRow />);
  });
});
