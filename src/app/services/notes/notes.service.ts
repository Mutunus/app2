import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from 'src/environments/environment';

@Injectable()
export class NotesService {

  constructor(
    private http: HttpClient
  ) { }

  getNotes = (userId: string) => this.http.get(`${apiUrl}/notes/${userId}`)
  

  saveNote() {
    // TODO - save note to db
  }

  deleteNote() {
    // TODO - delete note from db
  }

}