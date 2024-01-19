import { screen } from '@testing-library/react';
import { Type } from '../../features/feed/feedSlice';
import { customRender } from '../../utils/test-utils';
import { TitleParts } from './constants';
import FeedItem from './index';

const props = {
  id: 1,
  type: Type.Call,
  from: 'Me',
  to: 'You',
  message: 'hello world',
  timestamp: new Date().toISOString(),
};

describe('<FeedItem />', () => {
  it('should match snapshot', () => {
    expect(customRender(<FeedItem {...props} />)).toMatchSnapshot();
  });

  beforeEach(() => {
    customRender(<FeedItem {...props} />);
  });

  it('renders component', () => {
    const title = screen.getByTestId('title');

    expect(title).toBeInTheDocument();

    expect(title?.textContent).toEqual(`${props.from}${TitleParts[props.type]}${props.to}`);

    const message = screen.getByTestId('message');

    expect(message).toBeInTheDocument();

    expect(message?.textContent).toEqual(props.message);

    const timestamp = screen.getByTestId('timestamp');

    expect(timestamp).toBeInTheDocument();

    expect(timestamp?.textContent).toEqual('a few seconds');
  });
});
