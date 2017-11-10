import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ImportsModule} from "../../../modules/imports.module";
import {Angulartics2GoogleTagManager} from "angulartics2/gtm";
import {fadeAnimate} from "../../../animation/animate.animation";

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    animations: [ fadeAnimate ],
})
export class LandingComponent implements OnInit {
    endUserM:boolean;
    frameM:boolean;
    designM:boolean;
    deviceM:boolean;
    constructor(
        angulartics2GoogleTagManager: Angulartics2GoogleTagManager,
    )
    {

    }

    ngOnInit() {
    }
}

@NgModule({
    declarations: [LandingComponent],
    imports: [
        RouterModule.forChild([
            { path: '', component: LandingComponent, pathMatch: 'full'}
        ]),
        ImportsModule
    ]
})
export class LandingModule {

}
