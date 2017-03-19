import { MailBox } from './../models';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'underscore';
@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(mailboxes, searchWord){
    let lowerSubstr = searchWord.toLowerCase();
    return mailboxes.filter((message)=>{ 
          let text = message['text'].toLowerCase(); 
          if(~text.indexOf(lowerSubstr)){ 
            return true;
          } else {
            return false;
          }
    })
  }
}












    // return   mailboxes.map((mailboxes) => {debugger;
                       
    //                      let array = mailboxes.filter((object)=>{
    //                               return object['messageslist'].some((message)=>{
    //                                       let text = message['text'].toLowerCase(); 
                                        
    //                                    if(~text.indexOf(lowerSubstr))
    //                                         {return true}
    //                                     else 
    //                                        {return false}
    //                                 })
                               
    //                         });
    //                         console.log(array);
    //                         return array;
             
    //          })

  //  return mailboxes.map((mailboxes) => {debugger;
    
  //      let newm =   mailboxes.filter((object)=>{debugger;   console.log(object);
  //                   let array =  object['messageslist'].filter((message)=>{debugger;
  //                                    let text = message['text'].toLowerCase(); 
  //                                    debugger;
  //                                  if(~text.indexOf(lowerSubstr)){debugger;return true}
  //                                  else{return false}
  //                                 })
  //                  object.messageslist = array;              
  //               return  array.length>0
                             
  //                           });
 
  //             console.log(newm);
  //            return newm;
  //       });



     

      // return mailboxes.map(((mailboxes: { [key: string]: MailBox}) => {debugger;
      //                       let mailboxesarray = _.values(mailboxes);
      //                       debugger;
      //                        mailboxesarray.map((object)=>{debugger;
      //                             object['messageslist'].filter((message)=>{debugger;
      //                                let text = message['text'].toLowerCase(); 
      //                                debugger;
      //                              if(~text.indexOf(lowerSubstr)){debugger;return true}
      //                             })
      //                           //  return true;
      //                       });
      //     let arr =   mailboxesarray.filter( (mailbox) =>{debugger;return mailbox['messageslist'].length > 0});
      //         console.log(arr);
      //        return arr;
      //   }));

    


