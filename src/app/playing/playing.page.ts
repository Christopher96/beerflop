import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Route } from '@angular/router';

@Component({
    selector: 'app-playing',
    templateUrl: './playing.page.html',
    styleUrls: ['./playing.page.scss'],
})
export class PlayingPage {
    game: string; 

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ){
        this.route = route;
        this.router = router;
        this.game = this.route.snapshot.children[0].url[0].path;
    }

    back() {
        const playingRoute = '/playing/'+this.game;

        if(this.router.url == playingRoute)
            this.router.navigate(['/home']);
        else
            this.router.navigate([playingRoute]);
    }

    ngOnInit() {
    }
}
