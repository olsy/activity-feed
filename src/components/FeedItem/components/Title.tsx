import { Typography } from '@mui/material';
import { TitleParts } from '../constants';
import { Type } from '../type';

type Props = {
  type: Type;
  from: string;
  to: string;
};

const Title = ({ type, from, to }: Props) => (
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

export default Title;
