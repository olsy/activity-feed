import { Typography } from '@mui/material';
import { Type } from '../../../features/feed/feedSlice';
import { TitleParts } from '../constants';

interface Props {
  type: Type;
  from: string;
  to: string;
}

const Title = ({ type, from, to }: Props) => {
  if (type === Type.List) {
    throw new Error('Invalid type');
  }
  return (
    <Typography>
      <Typography component="span" color="primary" sx={{ fontWeight: 600 }}>
        {from}
      </Typography>
      {TitleParts[type]}
      <Typography component="span" color="primary" sx={{ fontWeight: 600 }}>
        {to}
      </Typography>
    </Typography>
  );
};

export default Title;
