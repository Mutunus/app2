import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';
import { SpeechRoutingModule } from './speech-routing.module'

@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    SpeechRoutingModule
  ],
  providers: [
  ],
  exports: [
    NoteComponent
  ]
})
export class SpeechModule { }
