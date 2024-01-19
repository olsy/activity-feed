import NoteIcon from '@mui/icons-material/ChatBubble';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ProfileIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import BeerIcon from '@mui/icons-material/SportsBar';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Type } from '../type';

const Wrapper = styled(Avatar)(() => ({
  borderRadius: '50%',
  border: '1px solid #ECECEC',
  background: 'white',
  '.MuiSvgIcon-root': {
    color: '#999',
  },
}));

type Props = {
  type: Type;
};

const Icon = ({ type }: Props) => {
  switch (type) {
    case Type.Call:
      return <PhoneIcon />;
    case Type.Meeting:
      return <ProfileIcon />;
    case Type.Coffee:
      return <CoffeeIcon />;
    case Type.Beer:
      return <BeerIcon />;
    case Type.Note:
      return <NoteIcon />;
    default:
      return null;
  }
};

const IconWrapper = ({ type }: Props) => {
  return (
    <Wrapper>
      <Icon type={type} />
    </Wrapper>
  );
};

export default IconWrapper;
