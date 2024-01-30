import { Button, FormControlLabel, Radio, RadioGroup, Stack, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../components/FeedContainer/components/Icon';
import { add, feedValueSelector, Type, updateById } from '../features/feed/feedSlice';

const Textarea = styled(TextField)(() => ({
  flex: 1,
}));

const Btn = styled(Button)(() => ({
  background: '#52C8B4',
  color: 'white',
}));

type Inputs = {
  from: string;
  to: string;
  message: string;
  type: Type;
};

interface Props {
  from: string;
  to: string;
}

const FeedForm = ({ from, to }: Props) => {
  const value = useSelector(feedValueSelector);
  const dispatch = useDispatch();
  const {
    getValues,
    setValue,
    register,
    // control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: value || {
      from,
      to,
      message: '',
      type: Type.Meeting,
    },
  });

  useEffect(() => {
    reset(value);
  }, [value]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    value ? dispatch(updateById(data)) : dispatch(add({ ...data, timestamp: new Date().toISOString() }));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ flex: 1 }} direction={'column'}>
        <Textarea multiline rows={1} defaultValue="" {...register('message', { required: true })} placeholder={`Add a note about ${to}...`} />
        {errors.message && <Typography component="span">This field is required</Typography>}

        <Stack mt={2} direction={'row'} justifyContent={'space-between'}>
          <RadioGroup row name="row-radio-buttons-group" value={getValues('type')} onChange={(e) => setValue('type', e.target.value as Type)}>
            {Object.values(Type)
              .filter((t) => t !== Type.List)
              .map((t) => (
                <FormControlLabel key={t} value={t} control={<Radio />} label={<Icon type={t} />} {...register('type')} />
              ))}
          </RadioGroup>
          <Btn variant="contained" type="submit">
            Submit
          </Btn>
        </Stack>
      </Stack>
    </form>
  );
};

export default FeedForm;
