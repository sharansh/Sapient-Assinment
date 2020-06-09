import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});
import BootstrapNavbar from './navigation';
describe("TableRow", () => {
  it("should render my component BootstrapNavbar", () => {
    const wrapper = shallow(<BootstrapNavbar />);
  });
});