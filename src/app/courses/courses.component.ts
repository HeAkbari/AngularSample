import { Component, OnInit } from '@angular/core';
import {MessageService } from '../message.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor(private messageService:MessageService) { }

  ngOnInit() {
  }

}
