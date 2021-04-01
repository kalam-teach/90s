var Currency = /** @class */ (function () {
    function Currency() {
        this.container = $(document).find("#workAreaCurrency");
        this.from = this.container.find('#from');
        this.to = this.container.find('#to');
        this.amount = this.container.find('#amount');
        this.makeInitialSeletion();
        this.WireEvet();
    }
    Currency.prototype.makeInitialSeletion = function () {
        var _this = this;
        var counrtyList = BasicWork.getCurrencyCulture().sort(this.compare);
        counrtyList.forEach(function (country, index) {
            var option1 = null;
            var option2 = null;
            if (country.Name === 'en-US') {
                option1 = $("<option value=\"" + country.CurrencyCode + "\" selected>" + country.DisplayName + " </option>");
            }
            else {
                option1 = $("<option value=\"" + country.CurrencyCode + "\">" + country.DisplayName + " </option>");
            }
            if (country.Name === 'as-IN') {
                option2 = $("<option value=\"" + country.CurrencyCode + "\" selected>" + country.DisplayName + " </option>");
            }
            else {
                option2 = $("<option value=\"" + country.CurrencyCode + "\">" + country.DisplayName + " </option>");
            }
            _this.from.append(option1);
            _this.to.append(option2);
        });
        this.renderReslut(0.0, this.to.find(":selected").val());
    };
    Currency.prototype.compare = function (a, b) {
        var bandA = a.DisplayName.toUpperCase();
        var bandB = b.DisplayName.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    Currency.prototype.WireEvet = function () {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this));
    };
    Currency.prototype.Submit = function () {
        var _this = this;
        var proceed = true;
        if (this.amount.val() === "") {
            proceed = false;
            this.amount.addClass('alert_border');
            setTimeout(function () { BasicWork.removeAlert(_this.amount); }, 500);
        }
        if (this.from.find(":selected").val() === this.to.find(":selected").val()) {
            proceed = false;
            this.to.addClass('alert_border');
            setTimeout(function () { BasicWork.removeAlert(_this.to); }, 500);
        }
        if (proceed) {
            var ajax = $.ajax({
                type: "Get",
                url: "https://openexchangerates.org/api/latest.json?app_id=6f6ec1696d07488e905d287d48b07883",
                crossDomain: true,
                success: function (data, status, args) { _this.calculateAmount(data); },
                error: function (msg, textStatus, errorThrown) { _this.calculateAmount(msg); }
            });
        }
    };
    Currency.prototype.calculateAmount = function (data) {
        var from = this.from.find(":selected").val();
        var to = this.to.find(":selected").val();
        var fromUSD = 0;
        var toUSD = 0;
        if (data.base != from) {
            fromUSD = 1 / data.rates[from];
            fromUSD *= this.amount.val();
        }
        else {
            fromUSD += this.amount.val();
        }
        toUSD = fromUSD * data.rates[to];
        this.renderReslut(toUSD, to);
    };
    Currency.prototype.renderReslut = function (amount, code) {
        if (this.container.find("#currency_container").find('p').length > 0) {
            this.container.find("#currency_container").empty();
        }
        var codeTag = document.createElement("p");
        codeTag.textContent = code;
        var amounttag = document.createElement("p");
        amounttag.textContent = amount.toString();
        this.container.find("#currency_container").append(codeTag).append(amounttag);
    };
    Currency.prototype.Reset = function () {
        this.amount.val('');
        var pTags = this.container.find("#currency_container").find('p');
        pTags[0].textContent = this.to.find(":selected").val();
        pTags[1].textContent = "0.0";
    };
    return Currency;
}());
//# sourceMappingURL=currency.js.map