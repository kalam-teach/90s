class Currency {
    private container: JQuery;
    private from: JQuery;
    private to: JQuery;
    private amount: JQuery;
    constructor() {
        this.container = $(document).find("#workAreaCurrency");
        this.from = this.container.find('#from');
        this.to = this.container.find('#to');
        this.amount = this.container.find('#amount');
        this.makeInitialSeletion();
        this.WireEvet();
    }
    private makeInitialSeletion() {
        var counrtyList: any[] = BasicWork.getCurrencyCulture().sort(this.compare);        
        counrtyList.forEach((country: any, index: number) => {
            let option1: JQuery = null;
            let option2: JQuery = null;
            if (country.Name === 'en-US') {
                option1 = $("<option value=\"" + country.CurrencyCode + "\" selected>" + country.DisplayName + " </option>");
            } else {
                option1 = $("<option value=\"" + country.CurrencyCode + "\">" + country.DisplayName + " </option>");
            }
            if (country.Name === 'as-IN') {
                option2 = $("<option value=\"" + country.CurrencyCode + "\" selected>" + country.DisplayName + " </option>");
            } else {
                option2 = $("<option value=\"" + country.CurrencyCode + "\">" + country.DisplayName + " </option>");
            }
            this.from.append(option1);
            this.to.append(option2);
        });
        this.renderReslut(0.0, this.to.find(":selected").val());
    }

    private compare(a,b) {
        const bandA = a.DisplayName.toUpperCase();
        const bandB = b.DisplayName.toUpperCase();

        let comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        } else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    }
    private WireEvet(): void {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this));
    }
    private Submit() {
        let proceed: boolean = true;
        if (this.amount.val() === "") {
            proceed = false;
            this.amount.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.amount) }, 500);
        }
        if (this.from.find(":selected").val() === this.to.find(":selected").val()) {
            proceed = false
            this.to.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.to) }, 500);
        }
        if (proceed) {
            let ajax: XMLHttpRequest = $.ajax({
                type: "Get",
                url: "https://openexchangerates.org/api/latest.json?app_id=6f6ec1696d07488e905d287d48b07883",
                crossDomain: true,
                success: (data: any, status: string, args: any) => { this.calculateAmount(data) },
                error: (msg: any, textStatus: any, errorThrown: any) => { this.calculateAmount(msg) }
            });
        }                
    }

    private calculateAmount(data: any) {
        let from: string = this.from.find(":selected").val();
        let to: string = this.to.find(":selected").val();
        let fromUSD: number = 0;
        let toUSD: number = 0;
        if (data.base != from) {
            fromUSD = 1 / data.rates[from];
            fromUSD *= this.amount.val()
        } else {
            fromUSD += this.amount.val();
        }
        toUSD = fromUSD * data.rates[to];
        this.renderReslut(toUSD, to);
    }

    private renderReslut(amount: number, code: string) {
        if (this.container.find("#currency_container").find('p').length > 0) {
            this.container.find("#currency_container").empty()
        }
        let codeTag = document.createElement("p");
        codeTag.textContent = code;
        let amounttag = document.createElement("p");
        amounttag.textContent = amount.toString();
        this.container.find("#currency_container").append(codeTag).append(amounttag);
    }

    private Reset() {
        this.amount.val('');
        let pTags: JQuery = this.container.find("#currency_container").find('p');
        pTags[0].textContent = this.to.find(":selected").val();
        pTags[1].textContent = "0.0";
    }
}