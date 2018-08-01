import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
 import {MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule} from '@angular/material';
import {FlexLayoutModule} from "@angular/flex-layout";
import { ProfileComponent } from './profile/profile.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';
import {ChatsComponent} from "./chats/chats.component";
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { MessageBarComponent } from './message-bar/message-bar.component';
import {FormsModule} from "@angular/forms";
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserRecentComponentComponent } from './user-recent-component/user-recent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ChatInfoComponent,
    ChatsComponent,
    ChatMessageComponent,
    MessageBarComponent,
    ProfileHeaderComponent,
    SearchBarComponent,
    UserRecentComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
