import { Component, Input } from '@angular/core';
import { StoreFacade } from '@rapp/store';

@Component({
    selector: 'rapp-view',
    template: `
        <div class="view-wrapper">
            <ng-content select="rapp-toolbar"></ng-content>

            <ng-content select="rapp-content"></ng-content>

            <rapp-footer-navbar *ngIf="(layoutMode$ | async) === 'single' && showBottomNavbar"></rapp-footer-navbar>
        </div>
    `,
    styles: [
        `
            .view-wrapper {
                display: flex;
                flex-direction: column;
                height: 100%;
                background-color: #fff;
            }
        `,
    ],
})
export class ViewComponent {
    layoutMode$ = this.storeFacade.getMode();

    constructor(private storeFacade: StoreFacade) {}
    @Input() showBottomNavbar = false;
}