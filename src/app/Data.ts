import {User, MailBox, Message} from './models';
// import {MessagesService, ThreadsService,
//         UserService} from './services/services';

 //import * as moment from 'moment';
export let initialUsers: Array<User>=[
  new User('Lady_Capulet@mail.ru', 'Lady','Capulet','Lady'),
  new User('Juliet@mail.ru','Julia','Lux','Julia'),
  new User('Echo_Bot@mail.ru', 'Echo', 'Bot','Echo'),
  new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot','Reverse'),
  new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot','Waiting')
]

export let initialMessages: Array<Message> = [
  new Message({
    author: initialUsers[1],
    sentAt: new Date(2016,1,25),// moment().subtract(45, 'minutes').toDate(),
    title: "Title",
    text: 'Некоторые браузеры реализуют нестандартный метод getYear(). Где-то он возвращает только две цифры из года, где-то четыре. Так или иначе, этот метод отсутствует в стандарте JavaScript. Не используйте его. Для получения года есть getFullYear().Некоторые браузеры реализуют нестандартный метод getYear(). Где-то он возвращает только две цифры из года, где-то четыре. Так или иначе, этот метод отсутствует в стандарте JavaScript. Не используйте его. Для получения года есть getFullYear().',
    sendTo: initialUsers[0]
  }),
   new Message({
    author: initialUsers[1],
    sentAt: new Date(2017,1,14),//moment().subtract(20, 'minutes').toDate(),
    title: "Title",
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    sendTo: initialUsers[0]
  }),
  new Message({
    author: initialUsers[0],
    sentAt: new Date(2015,3,25),//moment().subtract(20, 'minutes').toDate(),
    title: "Title",
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    sendTo: initialUsers[1]
  }),
  new Message({
    author: initialUsers[0],
    sentAt: new Date(2017,2,5),//moment().subtract(20, 'minutes').toDate(),
    title: "Title",
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    sendTo: initialUsers[1]
  }),
  new Message({
    author: initialUsers[1],
    sentAt: new Date(2014,3,25),//moment().subtract(1, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll echo whatever you send me`,
    sendTo: initialUsers[2]
  }),
  new Message({
    author: initialUsers[1],
    sentAt:new Date(2014,3,26),// moment().subtract(3, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll reverse whatever you send me`,
    sendTo: initialUsers[3]
  }),
  new Message({
    author: initialUsers[4],
    sentAt: new Date(2015,6,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll wait however many seconds you sendd to me before responding. Try sending '3'`,
    sendTo: initialUsers[1]
  }),
];