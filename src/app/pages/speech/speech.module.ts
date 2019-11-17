import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteComponent } from './components/note/note.component';
import { SpeechRoutingModule } from './speech-routing.module'
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [NoteComponent],
  imports: [
    CommonModule,
    SpeechRoutingModule,
    NgZorroAntdModule
  ],
  providers: [
  ],
  exports: [
    NoteComponent
  ]
})
export class SpeechModule { }
