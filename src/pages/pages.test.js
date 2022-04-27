import renderer from 'react-test-renderer';
import Quote from './Quote';
import Home from './Home';
import Calculator from './CalculatorPage';

describe('Pages renders correctly', () => {
  it('Quote page renders correctly', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Calculator page renders correctly', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home page renders correctly', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
