import React from 'react';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16/build/index';
import AttributesSummary from '../../screens/AttributesSummary';

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([thunk]);

const initialState = {
  petitionLink: {
    petitionLink: 'http://something.com',
  },
  petition: {
    petitionAttributes: [],
    petition: {},
  },
  attributes: {
    list: new Map(),
  },
  wallet: {
    id: 'something',
  },
};

afterEach(() => {
  fetchMock.reset();
  fetchMock.restore();
});

it('renders AttributesSummary component', () => {
  const wrapper = shallow(<AttributesSummary />)
    .first().shallow()
    .first()
    .shallow({ context: { store: mockStore(initialState) } });
  expect(wrapper.dive()).toMatchSnapshot();
});
