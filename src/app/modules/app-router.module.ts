import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { NgModule} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterModule, Routes} from '@angular/router';
import { Meta, Title} from "@angular/platform-browser";

const routes: Routes = [
    { path: 'home',  loadChildren: '../components/pages/landing/landing.module#LandingModule', data : { title : 'Callum.Tech - Home page of Callum.Tech', meta : { name: 'description', content: 'Home page of Callum.Tech, portfolio site of Callum Chisholm freelance developer and web designer.' } } },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: '**', redirectTo: '404', data : { title : '404 Page not found - Callum.Tech', meta : { name: 'description', content: 'Google login access to Callum.Tech for extra features and exclusive tools.' } } },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})

export class AppRouterModule {
    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private titleService: Title,
        private metaService: Meta
    ){
        //Boilerplate code to filter out only important router events and to pull out data object field from each route
        this.router.events
            .filter(event => event instanceof NavigationEnd)
            .map(() => this.activatedRoute)
            .map(route => {
                while (route.firstChild) route = route.firstChild;
                return route;
            })
            .filter(route => route.outlet === 'primary')
            //Data fields are merged so we can use them directly to take title and metaDescription for each route from them
            .mergeMap(route => route.data)
            //Real action starts there
            .subscribe((event) => {
                //Changing title
                this.titleService.setTitle(event['title']);
                //Changing meta with name="description"
                var tag = { name: 'description', content: event['metaDescription'] };
                let attributeSelector : string = 'name="description"';
                this.metaService.removeTag(attributeSelector);
                this.metaService.addTag(tag, false);
            });
    }
}