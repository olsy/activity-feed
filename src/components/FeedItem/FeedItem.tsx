import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Icon from './components/Icon';
import Title from './components/Title';
import { Type } from './type';

const Wrapper = styled(Stack)(() => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '54px',
    width: '2px',
    background: '#ECECEC',
  },
}));

const TextWrapper = styled(Box)(() => ({
  background: '#F6F6F6',
  padding: '12px 16px',
  borderRadius: '6px',
  flex: 1,
}));

type Props = {
  type: Type;
  from: string;
  to: string;
  message: string;
  timestamp: string;
};

const FeedItem = ({ type, from, to, message, timestamp }: Props) => {
  return (
    <Wrapper direction={'row'} alignItems="center" spacing={2} sx={{ padding: '6px 0' }}>
      <Box>
        <Stack direction={'row'} alignItems="center">
          <Typography mr={2}>{timestamp}</Typography>
          <Icon type={type} />
        </Stack>
      </Box>
      <TextWrapper>
        <Title type={type} from={from} to={to} />
        <Typography sx={{ fontSize: '0.8em' }}>{message}</Typography>
      </TextWrapper>
    </Wrapper>
  );
};

export default FeedItem;
