import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-instructions',
    templateUrl: './instructions.component.html',
    styleUrls: ['./instructions.component.scss'],
})

export class InstructionsComponent implements OnInit {

    currentInst: string;

    instData = {
        "beermaffia": "beeer"
    }

    constructor(route: ActivatedRoute) {
        this.currentInst = this.instData[route.snapshot.params.game];
    }

    ngOnInit() {}

}
