import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanDeactivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ModalGuard implements CanDeactivate<any> {
    constructor(private dialog: MatDialog, private router: Router, private location: Location) {}

    canDeactivate(
        component: any,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const openDialogs = this.dialog.openDialogs;
        if (openDialogs.length) {
            console.log('DialogGuard - closing', openDialogs[openDialogs.length - 1].id);
            openDialogs[openDialogs.length - 1].close();
        }

        return true;
    }
}