import {DoBootstrap, NgModule} from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ModalModule} from "ngx-bootstrap/modal";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CheckboxModule} from "primeng/checkbox";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MenubarModule} from "primeng/menubar";
import {DataViewModule} from "primeng/dataview";
import {ImageModule} from "primeng/image";
import {ButtonModule} from "primeng/button";
import {RestService} from "./services/rest.service";
import {WalletObserverService} from "./services/wallet-observer.service";
import {BrowserModule} from "@angular/platform-browser";
import {WalletService} from "./services/wallet.service";
import {NotifierModule, NotifierOptions} from "angular-notifier";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {FooterComponent} from "./components/footer/footer.component";
import {InfoComponent} from "./components/welcome/info/info.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {RewardsComponent} from "./components/dashboard/rewards/rewards.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";
import {HistoryComponent} from "./components/dashboard/history/history.component";
import {CommonModule} from "@angular/common";
import {FileUploadModule} from "primeng/fileupload";
import {AppRoutingModule} from "./app-routing.module";
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";
import {NetworkComponent} from "./components/network/network.component";
import {TestnetComponent} from "./components/testnet/testnet.component";

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'right',
            distance: 12
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10
        }
    },
    theme: 'material',
    behaviour: {
        autoHide: 5000,
        onClick: false,
        onMouseover: 'pauseAutoHide',
        showDismissButton: false,
        stacking: 5
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease'
        },

        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50
        },

        shift: {
            speed: 300,
            easing: 'ease' // All standard CSS easing methods work
        },
        overlap: 150
    }
};

@NgModule({
    declarations: [NavbarComponent, WelcomeComponent, FooterComponent, InfoComponent, DashboardComponent, RewardsComponent,
        ContactUsComponent, HistoryComponent, NetworkComponent, TestnetComponent],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule, RouterModule,
        TooltipModule.forRoot(), OverlayPanelModule, ModalModule.forRoot(),
        NotifierModule.withConfig(customNotifierOptions),
        FormsModule, ReactiveFormsModule, NgbCollapseModule,
        CheckboxModule, TableModule, HttpClientModule,
        DropdownModule, MenubarModule, DataViewModule, ImageModule,
        ButtonModule],
    bootstrap: [NavbarComponent],
    providers: [RestService, WalletObserverService, WalletService]
})

export class AppModule {
}