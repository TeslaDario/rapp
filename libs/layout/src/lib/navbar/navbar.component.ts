import { Component, HostBinding, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MOCK_CHATS, MOCK_GROUPS, StoreFacade } from '@rapp/store';
import { filter, Observable, Subject, takeUntil } from 'rxjs';

export interface NavTab {
    name: string;
    icon: string;
    active: boolean;
    route: string;
    param?: string;
}
@Component({
    selector: 'rapp-navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
    @HostBinding('class.navbar-spread') @Input() spread = false;
    tabs: NavTab[] = [
        {
            name: 'home',
            icon: 'home',
            active: false,
            route: '/home',
        },
        {
            name: 'news',
            icon: 'newspaper',
            active: false,
            route: '/newsfeed',
        },
        {
            name: 'groups',
            icon: 'groups',
            active: false,
            route: '/groups',
        },
        {
            name: 'chats',
            icon: 'chat',
            active: false,
            route: '/messages',
        },
    ];
    masterWidth$: Observable<number> = this.storeFacade.getMasterWidth();
    private _destroyed$ = new Subject();

    constructor(private storeFacade: StoreFacade, private route: ActivatedRoute) {
        // with root page
        // this.route.parent?.parent?.url
        // without root page
        this.route.parent?.url
            .pipe(
                takeUntil(this._destroyed$),
                filter((url) => url.length !== 0)
            )
            .subscribe((url) => {
                this.tabs = this.tabs.map((t) => ({ ...t, active: t.route === '/' + url[0].path }));
            });

        this.storeFacade
            .getMode()
            .pipe(takeUntil(this._destroyed$))
            .subscribe((mode) => {
                if (mode === 'split') {
                    this.tabs = this.tabs.map((t) => {
                        if (t.route === '/groups') {
                            return { ...t, param: MOCK_GROUPS[0].id };
                        } else if (t.route === '/messages') {
                            return { ...t, param: MOCK_CHATS[0].id };
                        }
                        return t;
                    });
                }
            });
    }

    ngOnDestroy(): void {
        this._destroyed$.complete();
    }
}