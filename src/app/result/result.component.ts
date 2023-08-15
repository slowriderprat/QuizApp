import { Component, OnInit } from '@angular/core';
import { Param, Questions } from '../model/quiz.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

    title: string = 'Results';
    questions!: Questions[];
    correctAnswers: number = 0;

    constructor(
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.dataService.sharedParam.subscribe((param: Param) => {
            if (param.param) {
                let data = JSON.parse(param.param)
                this.questions = data;
                this.questions?.forEach((el: Questions) => {
                    if (el.selectedAnswer === el.correct_answer) {
                        el.isCorrect = true;
                        this.correctAnswers++;
                    } else {
                        el.isCorrect = false;
                    }
                })
            }
        })
    }

}
