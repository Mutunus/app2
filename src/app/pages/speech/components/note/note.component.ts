import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SpeechRecognitionService } from '../../../../services/speech-recognition/speech-recognition.service';
import { NotesService } from 'src/app/services/notes/notes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  public text: string
  public notes$: Observable<any>

  constructor(
    private speechRecognitionService: SpeechRecognitionService,
    private notesService: NotesService,
    private changes: ChangeDetectorRef
  ) {
    this.text = 'SPEAK'
   }

   ngOnInit() {
	   // TODO use ngrx 
		this.notes$ = this.notesService.getNotes('tim')
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

  readNote(note: string) {
    this.speechRecognitionService.speak(note)
  }

}
