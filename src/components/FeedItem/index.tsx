import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { edit, removeById, Type } from '../../features/feed/feedSlice';
import FeedContainer from '../FeedContainer';
import Title from './components/Title';

const BtnWrapper = styled('div')(() => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
}));

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
    <FeedContainer type={type} timestamp={timestamp}>
      <Box>
        <Title type={type} from={from} to={to} />
        <Typography sx={{ fontSize: '0.8em' }} data-testid="message">
          {message}
        </Typography>
      </Box>
      <BtnWrapper>
        <Button onClick={() => dispatch(edit(id))}>
          <EditIcon />
        </Button>
        <Button onClick={() => dispatch(removeById(id))}>
          <DeleteIcon />
        </Button>
      </BtnWrapper>
    </FeedContainer>
  );
};

export default FeedItem;
