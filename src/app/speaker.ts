export class Speaker {
  constructor(
    public speakerId: number = 2,
    public firstName?: string,
    public lastName?: string,
    public company: string = 'Indicia',
    public companyUrl: string = 'indicia.com',
  ) {}
}
