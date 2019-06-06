import { CodecampEvent } from '../../event';

export const Events: CodecampEvent[] = [
    {
        campId: 1,
        name: 'Glasgow Code Camp 2',
        venue: 'Indicia Offices, Wellington Street, Glasgow',
        eventDate: '2019-04-04T00:00:00',
        duration: 2,
        talks: [
            {
                talkId: 8,
                title: 'WEB API with EFC',
                speaker: {
                    speakerId: 1,
                    firstName: 'Ray',
                    lastName: 'Bell',
                    company: 'TechOps Inc',
                    companyUrl: 'http://TechOps.com'
                }
            },
            {
                talkId: 9,
                title: 'Another WEB API with EFC',
                speaker: {
                    speakerId: 1,
                    firstName: 'Ray',
                    lastName: 'Bell',
                    company: 'TechOps Inc',
                    companyUrl: 'http://TechOps.com'
                }
            }
        ]
    },
    {
        campId: 3,
        name: 'Glasgow Code Camp 3',
        venue: 'Indicia Offices, Wellington Street, Glasgow',
        eventDate: '2019-04-04T00:00:00',
        duration: 2,
        talks: [
            {
                talkId: 10,
                title: 'WEB API with EFC',
                speaker: {
                    speakerId: 1,
                    firstName: 'Ray',
                    lastName: 'Bell',
                    company: 'TechOps Inc',
                    companyUrl: 'http://TechOps.com'
                }
            }
        ]
    }
];
