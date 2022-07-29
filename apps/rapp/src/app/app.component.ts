import { Component } from '@angular/core';

@Component({
    selector: 'rapp-root',
    template: `
        <router-outlet></router-outlet>

        <router-outlet name="dialog"></router-outlet>
        <router-outlet name="profile"></router-outlet>
        <router-outlet name="media"></router-outlet>
    `,
})
export class AppComponent {
    title = 'Routing App';

    // constructor(private router: Router, private route: ActivatedRoute) {
    //     this.router.events
    //         .pipe(filter((e) => e instanceof NavigationEnd || e instanceof NavigationStart))
    //         .subscribe((e) => console.log(e));
    //     const urlWithoutAuxiliaryRoute = this.router
    //         .createUrlTree(['.'], { relativeTo: this.route })
    //         .root.children[PRIMARY_OUTLET].toString();
    //     console.log(urlWithoutAuxiliaryRoute);
    //     this.router.navigate([urlWithoutAuxiliaryRoute]);
    // }
}
