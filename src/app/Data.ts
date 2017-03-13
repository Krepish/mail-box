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
    sentAt: new Date(2016,1,25),// moment().subtract(45, 'minutes').toDate(),
    title: "Title",
    text: 'Некоторые браузеры реализуют нестандартный метод getYear(). Где-то он возвращает только две цифры из года, где-то четыре. Так или иначе, этот метод отсутствует в стандарте JavaScript. Не используйте его. Для получения года есть getFullYear().Некоторые браузеры реализуют нестандартный метод getYear(). Где-то он возвращает только две цифры из года, где-то четыре. Так или иначе, этот метод отсутствует в стандарте JavaScript. Не используйте его. Для получения года есть getFullYear().',
    sendTo: new User('Lady_Capulet@mail.ru', 'Lady','Capulet')
  }),
  new Message({
    author: new User('Lady_Capulet@mail.ru', 'Lady','Capulet'),
    sentAt: new Date(2015,3,25),//moment().subtract(20, 'minutes').toDate(),
    title: "Title",
    text: 'So shall you feel the loss, but not the friend which you weep for.',
    sendTo: new User('Juliet@mail.ru','Julia','Lux')
  }),
  new Message({
    author: new User('Juliet@mail.ru','Julia','Lux'),
    sentAt: new Date(2014,3,25),//moment().subtract(1, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll echo whatever you send me`,
    sendTo: new User('Echo_Bot@mail.ru', 'Echo', 'Bot')
  }),
  new Message({
    author: new User('Juliet@mail.ru','Julia','Lux'),
    sentAt:new Date(2014,3,26),// moment().subtract(3, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll reverse whatever you send me`,
    sendTo: new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot')
  }),
  new Message({
    author: new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot'),
    sentAt: new Date(2015,6,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Title",
    text: `I\'ll wait however many seconds you sendd to me before responding. Try sending '3'`,
    sendTo: new User('Juliet@mail.ru','Julia','Lux')
  }),
];