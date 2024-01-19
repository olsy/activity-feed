import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import { ReactNode } from 'react';
import { Type } from '../../features/feed/feedSlice';
import Icon from './components/Icon';

const Wrapper = styled(Stack)(() => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '135px',
    width: '2px',
    background: '#ECECEC',
  },
}));

const ContentWrapper = styled(Box)(() => ({
  background: '#F6F6F6',
  padding: '12px 16px',
  borderRadius: '6px',
  flex: 1,
}));

const Btn = styled(Button)(() => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
}));

interface Props {
  type?: Type;
  timestamp?: string;
  children: ReactNode;
  remove?: () => void;
}

const FeedContainer = ({ type = Type.List, timestamp = '', children, remove }: Props) => (
  <Wrapper direction={'row'} alignItems="center" spacing={2} sx={{ padding: '6px 0' }}>
    <Box>
      <Stack direction={'row'} alignItems="center" justifyContent="flex-end">
        <Typography mr={2} sx={{ width: '100px', overflow: 'hidden', textAlign: 'right', fontSize: '0.7em' }} data-testid="timestamp">
          {timestamp && moment(timestamp).fromNow(true)}
        </Typography>
        <Icon type={type} />
      </Stack>
    </Box>
    <ContentWrapper>{children}</ContentWrapper>
    {remove ? (
      <Btn onClick={remove}>
        <DeleteIcon />
      </Btn>
    ) : null}
  </Wrapper>
);

export default FeedContainer;
