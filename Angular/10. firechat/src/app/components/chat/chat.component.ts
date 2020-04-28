import { Component, OnInit} from '@angular/core';
import { ChatService } from './../../providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: []
})
export class ChatComponent implements OnInit{
  message = '';
  element: any;

  constructor(public chatService: ChatService) {
    this.chatService.loadMessages()
      .subscribe(()=> {
        setTimeout(() => {
          this.element.scrollTop = this.element.scrollHeight;
        }, 20);
      });
  }

  sendMessage() {
    console.log(this.message);
    if (this.message.length === 0) {
      return;
    }
    this.chatService.addMessage(this.message)
      .then(() => this.message = '')
      .catch( (err) => console.log('Something went wrong ', err))
  }

  // lifeCycle
  ngOnInit() {
    this.element = document.getElementById('app-messages');
  }
}
