import { Component } from '@angular/core';
import arrayWords from "../utils/words"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words: string = '';
  limit: number = 0;

  handelSlideChange(newLimit: number){
    newLimit = this.randomLimitGenerator();
    this.limit = newLimit;
  }

  generate(){
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  randomLimitGenerator(){
    this.limit = Math.floor(Math.random() * 10) + 1;
    return this.limit;
  }
}
