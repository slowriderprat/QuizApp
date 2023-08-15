import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetCategories, GetQuestions } from '../model/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

    constructor(private http: HttpClient) { }

    getCategories() {
        return this.http.get<GetCategories>('https://opentdb.com/api_category.php');
    }

    getQuestions(category: number, difficulty: string) {
        return this.http.get<GetQuestions>(`https://opentdb.com/api.php?amount=5&category=${category}&difficulty=${difficulty}&type=multiple
        `)
    }
    
}
