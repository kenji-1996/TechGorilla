import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {isNullOrUndefined} from "util";
import {MatSnackBar} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {isPlatformBrowser} from "@angular/common";
import {Angulartics2GoogleTagManager} from "angulartics2/gtm";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
    title:string = "Callum.Tech";
    themeClass: string = "light-theme";
    overlay;
    public authService;
    noticeSnack;
    subscription:Subscription;
    showFooter:boolean = false;
    auth2: any;
    browserLoaded;

    constructor(
        private overlayContainer: OverlayContainer,
        private snackbar: MatSnackBar,
        @Inject(PLATFORM_ID) private platformId: Object,
        angulartics2GoogleTagManager: Angulartics2GoogleTagManager
    ) {
        this.browserLoaded = isPlatformBrowser(this.platformId);
        this.overlay = overlayContainer;
        this.overlay.getContainerElement().classList.add('light-theme');
    }

    setDarkTheme(): void {
        this.themeClass = "dark-theme";
        this.overlay.getContainerElement().classList.add("dark-theme");
        this.overlay.getContainerElement().classList.remove("light-theme");
        localStorage.setItem('theme','dark-theme');
    }

    setLightTheme(): void {
        this.themeClass = "light-theme";
        this.overlay.getContainerElement().classList.add("light-theme");
        this.overlay.getContainerElement().classList.remove("dark-theme");
        localStorage.setItem('theme','light-theme');
    }
    ngOnInit() {

        /*if (isPlatformBrowser(this.platformId)) {

            // Simple message with an action.
            if(isNullOrUndefined(localStorage.getItem('notice'))) {
                this.noticeSnack = this.snackbar.open('Callum.Tech has been revamped with Google frameworks Angular and Material!', 'Hide', {extraClasses: ['mat-elevation-z6']});
                this.noticeSnack.afterDismissed().subscribe(() => {
                    localStorage.setItem('notice', 'true');
                });
            }
            if(localStorage) {
                if(isNullOrUndefined(localStorage.getItem('theme'))) {
                    localStorage.setItem('theme','light-theme');
                }
                this.overlay.getContainerElement().classList.add(localStorage.getItem('theme'));
                this.themeClass = localStorage.getItem('theme');
            }else{

            }
        }*/
    }

}
