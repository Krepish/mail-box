import {User, MailBox, Message} from './models';
// import {MessagesService, ThreadsService,
//         UserService} from './services/services';

 //import * as moment from 'moment';

let me: User      = new User('Juliet@mail.ru','Julia','Lux');
let ladycap: User = new User('Lady_Capulet@mail.ru', 'Lady','Capulet');
let echo: User    = new User('Echo_Bot@mail.ru', 'Echo', 'Bot');
let rev: User     = new User('Reverse_Bot@mail.ru', 'Reverse', 'Bot');
let wait: User    = new User('Waiting_Bot@mail.ru', 'Waiting', 'Bot');

let tLadycap: MailBox = new MailBox('tLadycap', ladycap.name,ladycap.surname);
let tEcho: MailBox   = new MailBox('tEcho', echo.name, echo.surname);
let tRev: MailBox     = new MailBox('tRev', rev.name, rev.surname);
let tWait: MailBox   = new MailBox('tWait', wait.name, wait.surname);

export let initialMessages: Array<Message> = [
  new Message({
    author: me,
    sentAt: new Date(1493092800010),// moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.',
    mailbox: tLadycap
  }),
  new Message({
    author: ladycap,
    sentAt: new Date(1493092800003),//moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.',
     mailbox: tLadycap
  }),
  new Message({
    author: echo,
    sentAt: new Date(1493092800007),//moment().subtract(1, 'minutes').toDate(),
    text: `I\'ll echo whatever you send me`,
    mailbox: tEcho
  }),
  new Message({
    author: rev,
    sentAt:new Date(1493092800002),// moment().subtract(3, 'minutes').toDate(),
    text: `I\'ll reverse whatever you send me`,
     mailbox: tRev
  }),
  new Message({
    author: wait,
    sentAt: new Date(1493092800006), //moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding. Try sending '3'`,
     mailbox: tWait
  }),
];