import {RewardsComponent} from "./components/dashboard/rewards/rewards.component";
import {HistoryComponent} from "./components/dashboard/history/history.component";
import {InfoComponent} from "./components/welcome/info/info.component";
import {FeedbackComponent} from "./components/dashboard/feedback/feedback.component";
import {CommonModule} from "@angular/common";
import {FooterComponent} from "./components/footer/footer.component";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {RestService} from "../common/services/rest.service";
import {WalletObserverService} from "../common/services/wallet-observer.service";
import {ImageModule} from "primeng/image";
import {ModalModule} from "ngx-bootstrap/modal";
import {RwdNavbarComponent} from "./components/navbar/rwd-navbar.component";
import {NotifierContainerComponent, NotifierModule, NotifierOptions} from "angular-notifier";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {CheckboxModule} from "primeng/checkbox";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {MenubarModule} from "primeng/menubar";
import {DataViewModule} from "primeng/dataview";
import {ButtonModule} from "primeng/button";
import {WalletService} from "../common/services/wallet.service";
import {FileUploadModule} from "primeng/fileupload";

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
    declarations: [RwdNavbarComponent, WelcomeComponent, FooterComponent, InfoComponent, DashboardComponent, RewardsComponent,
        FeedbackComponent, HistoryComponent],
    imports: [CommonModule, ModalModule.forRoot(), FileUploadModule,
        NotifierModule.withConfig(customNotifierOptions),
        FormsModule, ReactiveFormsModule,
        ModalModule.forRoot(), TooltipModule.forRoot(), OverlayPanelModule,
        CheckboxModule, TableModule,
        DropdownModule, MenubarModule, DataViewModule, ImageModule,
        ButtonModule],
    providers: [RestService, WalletObserverService, WalletService],
    entryComponents: [RwdNavbarComponent],
})
export class AppRewardzModule {
}