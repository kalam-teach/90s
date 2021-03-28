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
    }
}