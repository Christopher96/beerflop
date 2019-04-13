import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { PlayingPage } from './playing.page';
import { MenuComponent } from './menu/menu.component';
import { InstructionsComponent } from './instructions/instructions.component';

import { BeermaffiaComponent } from './beermaffia/beermaffia.component';

const routes: Routes = [
    {
        path: '',
        component: PlayingPage,
        children: [
            {
                path: ':game',
                component: MenuComponent,
            },
            {
                path: ':game/instructions',
                component: InstructionsComponent
            },
            {
                path: 'beermaffia/play',
                component: BeermaffiaComponent
            },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        PlayingPage,
        MenuComponent,
        BeermaffiaComponent,
        InstructionsComponent
    ],
    exports: [
        RouterModule
    ]
})

export class PlayingPageModule {
    constructor() {
    }
}
