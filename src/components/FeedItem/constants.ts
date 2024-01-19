import { Type } from '../../features/feed/feedSlice';

export const TitleParts = {
  [Type.Meeting]: ` had a meeting with `,
  [Type.Call]: ` had a call with `,
  [Type.Beer]: ` had a beer with `,
  [Type.Coffee]: ` had a coffee with `,
  [Type.Note]: ` had a note with `,
};
