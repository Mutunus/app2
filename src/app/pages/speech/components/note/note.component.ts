import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognitionService } from '../../../../services/speech-recognition/speech-recognition.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  public text: string

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private changes: ChangeDetectorRef
  ) {
    this.text = 'SPEAK'
   }

  createNote() {
    const speech = this.speechRecognitionService.generateNewSpeedRecognizer(
      this.onCompleteNote
    )
    speech.start()
  }

  onCompleteNote = ({ results }) => {
    this.text = results[0][0].transcript;
    // TODO - save note to db
    this.changes.detectChanges()
  }

  readNote() {
    this.speechRecognitionService.speak(this.text)
  }

}
