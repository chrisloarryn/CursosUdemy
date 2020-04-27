import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public items: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.items = db.collection('chats').valueChanges();
    this.items.subscribe((chats: any[]) => console.log(chats))
  }

  title = 'firechat';
}
