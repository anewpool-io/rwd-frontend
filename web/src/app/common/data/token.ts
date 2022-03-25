export class Token {
    public tokenname: string;
    public currencysymbol: string;
    public fingerprint: string;
    public amount: number;

    constructor(data: any) {
        if (data != null) {
            if (data.tokenname) {
                this.tokenname = data.tokenname;
            }
            if (data.currencysymbol) {
                this.currencysymbol = data.currencysymbol;
            }
            if (data.fingerprint) {
                this.fingerprint = data.fingerprint;
            }
            if (data.amount) {
                this.amount = +data.amount;
            }
        }
    }
}

const example = {
    "tokenname": "4172746966637454657374546f6b656e303030323033",
    "currencysymbol": "dd78158839fae805523ba4c0aa5cd3d7fa4adb43f7ae8c7ebf1d5dd9",
    "fingerprint": "",
    "amount": 1
};