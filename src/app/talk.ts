import { Speaker } from './speaker';

export class Talk {
  constructor(
    public talkId?: number,
    public title?: string,
    public speaker?: Speaker
  ) {}
}
