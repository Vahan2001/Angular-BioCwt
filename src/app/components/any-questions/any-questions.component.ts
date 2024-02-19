import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-any-questions',
  templateUrl: './any-questions.component.html',
  styleUrls: ['./any-questions.component.css']
})
export class AnyQuestionsComponent implements OnInit{
  form: FormGroup = new FormGroup({});
  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      tel: ['', [Validators.required, Validators.pattern(/^[0-9\-\+]{9,15}$/)]],
      question: ['', Validators.required]
    })
  }
}
