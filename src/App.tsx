import { Container } from '@mui/material';
import { useSelector } from 'react-redux';
import Item from './components/FeedItem';
import Form from './components/Form';
import { feedSelector } from './features/feed/feedSlice';

function App() {
  const data = useSelector(feedSelector);

  return (
    <Container sx={{ width: '850px' }}>
      <Form from={'You'} to={'Milton Romaguera'} />
      {data.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </Container>
  );
}

export default App;
