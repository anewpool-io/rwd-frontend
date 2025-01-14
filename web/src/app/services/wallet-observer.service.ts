import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class WalletObserverService {
    // Observable boolean source
    private loaded = new Subject<boolean>();
    // Observable boolean stream
    loaded$ = this.loaded.asObservable();

    // Service message command
    setloaded(loaded: boolean) {
        this.loaded.next(loaded);
    }

    private error = new Subject<boolean>();
    // Observable boolean stream
    error$ = this.error.asObservable();

    // Service message command
    setError(error: boolean) {
        this.error.next(error);
    }
}

