import { componentFactoryName } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl:'./course-info.component.html'
})
export class CourseInfoComponent implements OnInit{

    courseId: number;

    constructor(private ActivateRoute:ActivatedRoute){}

    ngOnInit(): void{
    this.courseId = +this.ActivateRoute.snapshot.paramMap.get('id');

    }
}