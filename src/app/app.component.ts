import { Component, OnInit } from '@angular/core';
import { JeopardyService } from './jeopardy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  questionInfo;
  answer;
  isCorrect: boolean;
  score: number = 0;

  constructor(private jeopardyService: JeopardyService){}
    
    getDataFromService(){
      this.jeopardyService.getQuestionInfo()
      .subscribe(
        questionInfo => {
          this.questionInfo = questionInfo[0];
        }
      )
    }

  ngOnInit(){
    this.getDataFromService()
  }

  onSubmit(){
    if(this.answer.toLowerCase() == this.questionInfo.answer.toLowerCase()){
      this.score += this.questionInfo.value;
      this.answer = "";
      this.getDataFromService();
      return this.isCorrect = true;
    } else {
      this.answer = "";
      this.getDataFromService();
    return this.isCorrect = false;
    }
  }

}
