import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeechRecognitionService } from './speech-recognition/speech-recognition.service'
import { NotesService } from './notes/notes.service'

@NgModule({
  declarations: [],
  providers: [
    SpeechRecognitionService,
    NotesService
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
