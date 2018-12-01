import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule, MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProfileComponent} from './profile/profile.component';
import {ChatInfoComponent} from './chat-info/chat-info.component';
import {ChatsComponent} from './chats/chats.component';
import {MessageBarComponent} from './message-bar/message-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileHeaderComponent} from './profile-header/profile-header.component';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {UserRecentComponentComponent} from './user-recent-component/user-recent-component.component';
import {myRoutes} from './routes';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MainComponent} from './main/main.component';
import {PostCardComponent} from './post-card/post-card.component';
import {UserPostComponent} from './user-post/user-post.component';
import {UserPostHeaderComponent} from './user-post-header/user-post-header.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PostBarComponent} from './post-bar/post-bar.component';
import {ChatMessageBoxComponent} from './chat-message-box/chat-message-box.component';
import {ReversePipe} from './reverse.pipe';
import {CommentsComponent} from './comments/comments.component';
import {ReplyComponent} from './reply/reply.component';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import {EmojiModule} from '@ctrl/ngx-emoji-mart/ngx-emoji';
import {AddPostComponent} from './add-post/add-post.component';
import {ApiBaseUrl} from './services/apiBaseUrl';
import {HttpClientModule} from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ChatInfoComponent,
    ChatsComponent,
    MessageBarComponent,
    ProfileHeaderComponent,
    SearchBarComponent,
    UserRecentComponentComponent,
    LoginComponent,
    MainComponent,
    PostCardComponent,
    UserPostComponent,
    UserPostHeaderComponent,
    UserRecentComponentComponent,
    PostBarComponent,
    ChatMessageBoxComponent,
    ReversePipe,
    CommentsComponent,
    ReplyComponent,
    AddPostComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(myRoutes),
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTooltipModule,
    PickerModule,
    EmojiModule,
    HttpClientModule
  ],
  entryComponents: [AddPostComponent],
  providers: [ApiBaseUrl],
  bootstrap: [AppComponent]
})
export class AppModule {
}
