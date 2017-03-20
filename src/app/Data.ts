import {User, MailBox, Message} from './models';
// import {MessagesService, ThreadsService,
//         UserService} from './services/services';

 //import * as moment from 'moment';
export let initialUsers: Array<User>=[
  new User('Naumov@mail.ru', 'Maksim','Naumov','Naumov'),
  new User('Pjannikov@mail.ru','Anton','Pjannikov','Pjannikov'),
  new User('Suvorov@mail.ru', 'Stepan', 'Suvorov','Suvorov'),
  new User('Pushkar@mail.ru', 'Pavel', 'Pushkar','Pushkar'),
  new User('Bairamov@mail.ru', 'Emil', 'Bairamov','Bairamov'),
  new User('Tihonenko@mail.ru', 'Aleksey', 'Tihonenko','Tihonenko')
]
  
export let initialMessages: Array<Message> = [
  new Message({
    author: initialUsers[0],
    sentAt: new Date(2016,1,25),// moment().subtract(45, 'minutes').toDate(),
    title: "Help!",
    text: 'Having issue with showing boolean element. If i am trying to set show hide element in html it does not works ',
    sendTo: initialUsers[2]
  }),
   new Message({
    author: initialUsers[2],
    sentAt: new Date(2017,1,14),//moment().subtract(20, 'minutes').toDate(),
    title: "Keep calm",
    text: 'Using [hidden] attribute is not recommended for Angular2. Better use ngIf condition',
    sendTo: initialUsers[0]
  }),
  new Message({
    author: initialUsers[3],
    sentAt: new Date(2015,3,25),//moment().subtract(20, 'minutes').toDate(),
    title: "",
    text: 'I did not make it in time my homework.After lots of interweb searching, it seems to be a problem with the import of the http module, (altough my autocomplete can find all methods on it). I could also be wrong.',
    sendTo: initialUsers[2]
  }),
  new Message({
    author: initialUsers[2],
    sentAt: new Date(2017,2,5),//moment().subtract(20, 'minutes').toDate(),
    title: "Ok",
    text: 'It is never too late to make homework',
    sendTo: initialUsers[3]
  }),
  new Message({
    author: initialUsers[1],
    sentAt: new Date(2014,3,25),//moment().subtract(1, 'minutes').toDate(),
    title: "?",
    text: `I am using angular: "2.4.8", webpack: "1.14.0", webpack-dev-server: "1.16.2". visual studio code was updated at February 2017. I want to debug my app in the chrome browser.`,
    sendTo: initialUsers[2]
  }),
  new Message({
    author: initialUsers[2],
    sentAt:new Date(2014,3,26),// moment().subtract(3, 'minutes').toDate(),
    title: "Don't worry",
    text: `Can you please repeat ?`,
    sendTo: initialUsers[1]
  }),
  new Message({
    author: initialUsers[1],
    sentAt: new Date(2015,6,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Repeat",
    text: `I am using angular: "2.4.8", webpack: "1.14.0"`,
    sendTo: initialUsers[2]
  }),
   new Message({
    author: initialUsers[2],
    sentAt: new Date(2015,7,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Be happy",
    text: ` All right`,
    sendTo: initialUsers[1]
  }),
     new Message({
    author: initialUsers[4],
    sentAt: new Date(2015,6,15), //moment().subtract(4, 'minutes').toDate(),
    title: "homework",
    text: ` I done my homework.In my angular 2 application, need to use file system for uploading large files to Amazon S3 server. But, I have problem in importing file system in my application. Please help to implement file system in my application. `,
    sendTo: initialUsers[2]
  }),
    new Message({
    author: initialUsers[5],
    sentAt: new Date(2015,6,25), //moment().subtract(4, 'minutes').toDate(),
    title: "Help",
    text: ` I done my homework.In my angular 2 application, need to use file system for uploading large files to Amazon S3 server. But, I have problem in importing file system in my application. Please help to implement file system in my application. `,
    sendTo: initialUsers[2]
  }),
      new Message({
    author: initialUsers[0],
    sentAt: new Date(2014,7,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Hi!",
    text: ` I done my homework.In my angular 2 application, need to use file system for uploading large files to Amazon S3 server. But, I have problem in importing file system in my application. Please help to implement file system in my application. `,
    sendTo: initialUsers[3]
  }),
   new Message({
    author: initialUsers[0],
    sentAt: new Date(2016,7,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Hi!",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[1]
  }),
     new Message({
    author: initialUsers[0],
    sentAt: new Date(2014,7,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Hi!",
    text: ` I need to convert Dynamic generated html table in to pdf and able to print it too. `,
    sendTo: initialUsers[3]
  }),
     new Message({
    author: initialUsers[5],
    sentAt: new Date(2014,4,5), //moment().subtract(4, 'minutes').toDate(),
    title: "Hi!",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[2]
  }),
      new Message({
    author: initialUsers[2],
    sentAt: new Date(2014,4,12), //moment().subtract(4, 'minutes').toDate(),
    title: "Hello!",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[3]
  }),
     new Message({
    author: initialUsers[4],
    sentAt: new Date(2014,4,21), //moment().subtract(4, 'minutes').toDate(),
    title: "Lorem",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[5]
  }),
    new Message({
    author: initialUsers[5],
    sentAt: new Date(2014,4,4), //moment().subtract(4, 'minutes').toDate(),
    title: "Lorem",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[2]
  }),
    new Message({
    author: initialUsers[3],
    sentAt: new Date(2014,4,11), //moment().subtract(4, 'minutes').toDate(),
    title: "Lorem",
    text: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. `,
    sendTo: initialUsers[1]
  }),
];