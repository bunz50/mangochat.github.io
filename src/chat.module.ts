/// chat.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from './app/chat/chat.service';
import { ChatDialogComponent } from './app/chat/chat-dialog/chat-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChatDialogComponent
  ],
  exports: [ ChatDialogComponent ], // <-- export here
  providers: [ChatService]
})
export class ChatModule { }