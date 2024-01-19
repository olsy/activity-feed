import FeedForm from '../../forms/FeedForm';
import FeedContainer from '../FeedContainer';

interface Props {
  from: string;
  to: string;
}

const Form = ({ from, to }: Props) => (
  <FeedContainer>
    <FeedForm from={from} to={to} />
  </FeedContainer>
);

export default Form;
