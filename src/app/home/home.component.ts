import { Component, OnInit } from '@angular/core';
import { Categories, Questions } from '../model/quiz.model';
import { Router } from '@angular/router';
import { QuizService } from '../services/quiz.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    title: string = 'Quiz Maker';
    categories: Categories[] = [];
    difficulties: Array<string> = ["easy", "medium", "hard"];
    selectedCategory!: number;
    selectedDifficulty: string = '';
    questions!: Questions[];
    haveAllAnswers: boolean = false;

    constructor(
        private quizService: QuizService,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.quizService.getCategories().subscribe(data => {
            this.categories = data.trivia_categories;
        })
    }

    createQuiz() {
        this.quizService.getQuestions(this.selectedCategory, this.selectedDifficulty).subscribe(data => {
            this.questions = data.results;
            this.questions.forEach((el: Questions) => {
                el.options = this.shuffle(el.incorrect_answers.concat(el.correct_answer));
            });
        })
    }

    shuffle = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    selectAnswer(option: string, index: number) {
        this.questions[index].selectedAnswer = option;
        this.haveAllAnswers = this.questions.filter(function (object: Questions) {
            return object.hasOwnProperty('selectedAnswer');
        }).length == this.questions.length;
    }

    submit() {
        this.dataService.changeParam(JSON.stringify(this.questions));
        this.router.navigate(['/result']);
    }

}
