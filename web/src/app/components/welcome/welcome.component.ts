import {Component, Inject} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'welcome',
    styleUrls: ['../../../styles/page-content.css'],
    templateUrl: './welcome.html'
})
/**
 * Main Dashboard for the queries
 */
export class WelcomeComponent {

    constructor(@Inject(DOCUMENT) private document: any, public titleService: Title) {
        this.titleService.setTitle("SmartClaimz");
    }

    scrollToElement(element): void {
        this.document.getElementById(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
}