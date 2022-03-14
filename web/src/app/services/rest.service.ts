import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Wallet} from "../data/wallet";

@Injectable()
export class RestService {
    public static processingRequest: boolean = false;

    constructor(private httpClient: HttpClient) {
    }

    public listTokens() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', 'Eevoo0aemah1ohY6Oheehee4ivahR5ae');
        const url = '/contracts/22/mp/list';
        RestService.processingRequest = true;

        return this.httpClient
            .post(url, globalThis.wallet, {headers: headers})
            .toPromise()
            .then(res => this.processResponse(res))
            .catch(this.handleError);
    }

    public claimTokens() {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', 'Eevoo0aemah1ohY6Oheehee4ivahR5ae');
        const url = '/contracts/22/mp/claim';
        RestService.processingRequest = true;

        return this.httpClient
            .post(url, globalThis.wallet, {headers: headers})
            .toPromise()
            .then(res => this.processResponse(res))
            .catch(this.handleError);
    }

    public signTx(signature: any, data: any) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('authorization', 'Eevoo0aemah1ohY6Oheehee4ivahR5ae');
        const url = '/contracts/finalize/22/mp/' + data.id;
        RestService.processingRequest = true;
        const params: HttpParams = new HttpParams().set('signature', signature);

        return this.httpClient
            .post(url, params, {headers: headers})
            .toPromise()
            .then(res => this.processResponse(res))
            .catch(this.handleError);
    }

    public isProcessingRequest() {
        return RestService.processingRequest;
    }

    private processResponse(response: any) {
        RestService.processingRequest = false;
        return response;
    }

    private handleError(error: any) {
        // bubble the error up to be handled by the component
        RestService.processingRequest = false;
        return error;
    }
}