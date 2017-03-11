import {User, MailBox, Message} from './models';
// import {MessagesService, ThreadsService,
//         UserService} from './services/services';

 //import * as moment from 'moment';
export let initialUsers: Array<User>=[
new User('Juliet@mail.ru','Julia','Lux'),
new User('Lady_Capulet@mail.ru', 'Lady','Capulet'),
new User('Echo_Bot@mail.ru', 'Echo', 'Bot'),
new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot'),
new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot'),
]

export let initialMessages: Array<Message> = [
  new Message({
    author: new User('Juliet@mail.ru','Julia','Lux'),
    sentAt: new Date(2793092800010),// moment().subtract(45, 'minutes').toDate(),
    text: 'Меня зовут Маша',
    sendTo: new User('Lady_Capulet@mail.ru', 'Lady','Capulet')
  }),
  new Message({
    author: new User('Lady_Capulet@mail.ru', 'Lady','Capulet'),
    sentAt: new Date(1493092800003),//moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    sendTo: new User('Juliet@mail.ru','Julia','Lux')
  }),
  new Message({
    author: new User('Juliet@mail.ru','Julia','Lux'),
    sentAt: new Date(1493092800007),//moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    sendTo: new User('Echo_Bot@mail.ru', 'Echo', 'Bot')
  }),
  new Message({
    author: new User('Juliet@mail.ru','Julia','Lux'),
    sentAt:new Date(1493092800002),// moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
    sendTo: new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot')
  }),
  new Message({
    author: new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot'),
    sentAt: new Date(1493092800006), //moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you sendd to me before responding. Try sending '3'`,
    sendTo: new User('Juliet@mail.ru','Julia','Lux')
  }),
];