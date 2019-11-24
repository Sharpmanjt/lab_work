import {Component, OnInit, AfterViewInit} from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>{{getTitle()}} {{getCurrentDate()}}</h2>'  
})



export class StudentsComponent {

    

    title = "My list of students";

    ngOnInit()
    {
        console.log('When component intializes');
    }

    ngAfterViewInit()
    {
        console.log('After view initialize');
    }

    getTitle()
    {
        return this.title;
    }

    getCurrentDate()
    {
        let date: Date = new Date();
        return date;
    }
}