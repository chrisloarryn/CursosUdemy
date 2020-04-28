import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Message } from '../interfaces/message.interface';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  public userLoggedIn: any = {};

  constructor(private afs: AngularFirestore, public afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      console.log('User state', user);
      if (!user) return;

      this.userLoggedIn.name = user.displayName;
      this.userLoggedIn.uId = user.uid;
    });
  }

  login(provider?: string) {
    if ( provider === 'google' ) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }
    if ( provider === 'twitter' ) {
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.userLoggedIn =  {};
    this.afAuth.auth.signOut();
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', ref => ref.orderBy('messageDate', 'desc')
                                                                            .limit(10));
    return this.itemsCollection.valueChanges()
      .pipe(
        map((messages: Message[]) => {
          // this.chats = messages.sort((a, b) => a.messageDate - b.messageDate);
          this.chats = [];
          for ( let message of messages ) {
            this.chats.unshift(message);
          }

          return this.chats;
        })
      );
  }

  addMessage( text: string ) {
    // TODO pending uId
    let message: Message = {
      name: this.userLoggedIn.name,
      messageContent: text,
      messageDate: new Date().getTime(),
      uId: this.userLoggedIn.uId
    };

    return this.itemsCollection.add(message);
  }
}
