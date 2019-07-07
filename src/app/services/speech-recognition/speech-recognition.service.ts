import { Injectable } from '@angular/core';
import { IWindow } from 'types';

@Injectable()
export class SpeechRecognitionService {

  public speech: SpeechRecognition

  constructor() { 
    
  }

  generateNewSpeedRecognizer(
    onResult: (result) => any,
    { lang, continuous, start }: { lang?: string, continuous?: boolean, start?: boolean } = {}
  ): SpeechRecognition {
    const { webkitSpeechRecognition } = <IWindow>window
    const speech: SpeechRecognition = new webkitSpeechRecognition()
    speech.lang = lang || 'en-US'
    speech.continuous = continuous || false
    speech.onresult = onResult
    if(start) speech.start()
    return speech
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance)
  }

}
