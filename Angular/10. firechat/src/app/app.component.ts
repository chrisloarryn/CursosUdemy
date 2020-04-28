import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatService } from './providers/chat.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public chats: Observable<any[]>;
  constructor(public chatService: ChatService) {

  }

  title = 'firechat';
}
