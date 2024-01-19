import { Container } from '@mui/material';
import FeedItem from './components/FeedItem';
import { Type } from './components/FeedItem/type';

const data = [
  {
    type: Type.Meeting,
    from: 'You',
    to: 'Milton Romaguera',
    message: 'And a more formal meeting',
    timestamp: '6d',
  },
  {
    type: Type.Call,
    from: 'You',
    to: 'Milton Romaguera',
    message: 'And a more formal meeting',
    timestamp: '6d',
  },
  {
    type: Type.Coffee,
    from: 'You',
    to: 'Milton Romaguera',
    message: 'And a more formal meeting',
    timestamp: '6d',
  },
  {
    type: Type.Beer,
    from: 'You',
    to: 'Milton Romaguera',
    message: 'And a more formal meeting',
    timestamp: '6d',
  },
  {
    type: Type.Note,
    from: 'You',
    to: 'Milton Romaguera',
    message: 'And a more formal meeting',
    timestamp: '6d',
  },
];

function App() {
  return (
    <Container sx={{ width: '750px' }}>
      {data.map((item) => (
        <FeedItem key={item.type} {...item} />
      ))}
    </Container>
  );
}

export default App;
