import { Component, OnInit } from '@angular/core';

enum State {
    Pick,
    Day,
    Night
}

@Component({
    selector: 'app-beermaffia',
    templateUrl: './beermaffia.component.html',
    styleUrls: ['./beermaffia.component.scss'],
})
export class BeermaffiaComponent implements OnInit {
    state: State;
    clicked: boolean;

    pickCard() {

    }
    constructor() {
    }

    ngOnInit() {}

}
