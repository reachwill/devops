// export class CodecampEvent {
//     constructor(
//       public ccId?: number,
//       public ccTitle?: string,
//       public ccDate?: string,
//       public ccVenue?: string,
//       public ccMaxplaces?: number
//     ) {}
// }

export class CodecampEvent {
  constructor(
    public campId?: number,
    public name?: string,
    public venue?: string,
    public eventDate?: string,
    public duration?: number,
    public talks?: Array<any>
  ) {}
}



/*
[
  {
      "campId": 1,
      "name": "Glasgow Code Camp 2",
      "moniker": "GLA2020",
      "eventDate": "2019-04-04T00:00:00",
      "length": 1,
      "talks": [
          {
              "talkId": 8,
              "title": "WEB API with EFC",
              "level": 300,
              "speaker": {
                  "speakerId": 1,
                  "firstName": "Ray",
                  "lastName": "Bell",
                  "middleName": null,
                  "company": "TechOps Inc",
                  "companyUrl": "http://TechOps.com"
              }
          }
      ]
  },
  {
      "campId": 4,
      "name": "Edinburgh Code Camp",
      "moniker": "EDI2021",
      "eventDate": "2019-04-04T00:00:00",
      "length": 1,
      "talks": [
          {
              "talkId": 3,
              "title": "My First Talk",
              "level": 100,
              "speaker": {
                  "speakerId": 1,
                  "firstName": "Ray",
                  "lastName": "Bell",
                  "middleName": null,
                  "company": "TechOps Inc",
                  "companyUrl": "http://TechOps.com"
              }
          }
      ]
  },
  {
      "campId": 5,
      "name": "Edinburgh Code Camp",
      "moniker": "EDI2022",
      "eventDate": "2019-04-04T00:00:00",
      "length": 1,
      "talks": [
          {
              "talkId": 4,
              "title": "My Second Talk",
              "level": 100,
              "speaker": {
                  "speakerId": 2,
                  "firstName": "Will",
                  "lastName": "Smith",
                  "middleName": null,
                  "company": "TechOps Inc",
                  "companyUrl": "http://TechOps.com"
              }
          }
      ]
  },
  {
      "campId": 6,
      "name": "Edinburgh Code Camp 2",
      "moniker": "EDI2023",
      "eventDate": "2019-04-04T00:00:00",
      "length": 1,
      "talks": [
          {
              "talkId": 5,
              "title": "My Second Talk",
              "level": 100,
              "speaker": {
                  "speakerId": 1,
                  "firstName": "Ray",
                  "lastName": "Bell",
                  "middleName": null,
                  "company": "TechOps Inc",
                  "companyUrl": "http://TechOps.com"
              }
          }
      ]
  },
  {
      "campId": 8,
      "name": "London Code Camp",
      "moniker": "LON2023",
      "eventDate": "2019-04-04T00:00:00",
      "length": 1,
      "talks": [
          {
              "talkId": 6,
              "title": "My WEB API Talk",
              "level": 100,
              "speaker": null
          }
      ]
  }
]
*/