import { Box, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeById, Type } from '../../features/feed/feedSlice';
import FeedContainer from '../FeedContainer';
import Title from './components/Title';

interface Props {
  id: number;
  type: Type;
  from: string;
  to: string;
  message: string;
  timestamp: string;
}

const FeedItem = ({ id, type, from, to, message, timestamp }: Props) => {
  const dispatch = useDispatch();

  return (
    <FeedContainer type={type} timestamp={timestamp} remove={() => dispatch(removeById(id))}>
      <Box>
        <Title type={type} from={from} to={to} />
        <Typography sx={{ fontSize: '0.8em' }} data-testid="message">
          {message}
        </Typography>
      </Box>
    </FeedContainer>
  );
};

export default FeedItem;
