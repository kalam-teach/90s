function init() {
    new BasicWork();
}
var enumModel;
(function (enumModel) {
    var Option;
    (function (Option) {
        Option["Flames"] = "Flames";
        Option["Bmi"] = "Bmi";
        Option["Currency"] = "Currency";
    })(Option = enumModel.Option || (enumModel.Option = {}));
})(enumModel || (enumModel = {}));
var BasicWork = /** @class */ (function () {
    function BasicWork() {
        this.container = $(document).find("#container");
        this.switcher = this.container.find("#optionSwitch");
        this.selectedValue = this.switcher.find(":selected").val();
        this.wireevent();
        this.showRequired();
        this.initiate();
    }
    BasicWork.prototype.wireevent = function () {
        this.switcher.on('change', $.proxy(this.onSwitch, this));
    };
    BasicWork.prototype.onSwitch = function () {
        this.selectedValue = this.switcher.find(":selected").val();
        this.showRequired();
        this.initiate();
    };
    BasicWork.prototype.initiate = function () {
        switch (this.selectedValue) {
            case enumModel.Option.Flames:
                new Flames();
                break;
            case enumModel.Option.Bmi:
                new BMI();
                break;
            case enumModel.Option.Currency:
                new Currency();
                break;
        }
    };
    BasicWork.prototype.showRequired = function () {
        var flamesContiner = this.container.find("#workAreaFlames");
        if (flamesContiner.length > 0) {
            flamesContiner.remove();
        }
        var bmiContainer = this.container.find("#workAreaBMI");
        if (bmiContainer.length > 0) {
            bmiContainer.remove();
        }
        var currencyContainer = this.container.find("#workAreaCurrency");
        if (currencyContainer.length > 0) {
            currencyContainer.remove();
        }
        switch (this.selectedValue) {
            case enumModel.Option.Flames:
                this.container.append(BasicWork.defultFlames);
                break;
            case enumModel.Option.Bmi:
                this.container.append(BasicWork.defaultBmi);
                break;
            case enumModel.Option.Currency:
                this.container.append(BasicWork.defultCurrency);
                break;
        }
    };
    BasicWork.defultFlames = function () {
        return $('<div id=\"workAreaFlames\">' +
            '<div class="input-group position" >' +
            '<input title="Your Name" id = "name" placeholder = "Your Name" class="com-tit" />' +
            '<input title="Deserved one" id = "target" placeholder = "Dream Parterner" class="com-tit" />' +
            '</div>' +
            '<div class="button-group position" >' +
            '<button type="button" id = "submit" > Check </button> ' +
            '<button type = "button" id = "reset" > Reset </button>' +
            '</div>' +
            '<div id = "flames_container" >' +
            '</div>' +
            '</div>');
    };
    BasicWork.defultCurrency = function () {
        return $('<div id=\"workAreaCurrency\">' +
            '<div class="input-group position" >' +
            '<input title="From" id = "from" placeholder = "From" class="com-tit" />' +
            '<input title="T0" id = "to" placeholder = "T0" class="com-tit" />' +
            '<input title="Amount" id = "amount" placeholder = "Amount" class="com-tit" />' +
            '</div>' +
            '<div class="button-group position" >' +
            '<button type="button" id = "submit" > Check </button>' +
            '<button type = "button" id = "reset" > Reset </button>' +
            '</div>' +
            '<div id = "currency_container" >' +
            '</div>' +
            '</div>');
    };
    BasicWork.defaultBmi = function () {
        return $(' <div id=\"workAreaBMI\">' +
            '<div class="input-group position" >' +
            '<div class="holder">' +
            '<select>' +
            '<option value="cm" > Centimeter </option>' +
            '<option value = "fi" > Feet Inch </option>' +
            '</select>' +
            '<input title = "Height" id = "height" placeholder = "Height" class="com-tit" />' +
            '</div>' +
            '<div class="holder">' +
            '<select>' +
            '<option value="kg" > Kilo  Gram </option>' +
            '<option value = "pd" > Pounds </option>' +
            '</select>' +
            '<input title = "Weight" id = "weight" placeholder = "Weight" class="com-tit" />' +
            '</div>' +
            '</div>' +
            '<div class="button-group position" >' +
            '<button type="button" id = "submit" > Check </button>' +
            '<button type = "button" id = "reset" > Reset </button>' +
            '</div>' +
            '<div id = "BMI_container" >' +
            '</div>' +
            '</div>');
    };
    BasicWork.getCultures = function () {
        return [
            { 'Name': 'af-ZA', 'DisplayName': 'Afrikaans (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'en-ZA', 'DisplayName': 'English (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'xh-ZA', 'DisplayName': 'isiXhosa (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'zu-ZA', 'DisplayName': 'isiZulu (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'nso-ZA', 'DisplayName': 'Sesotho sa Leboa (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'tn-ZA', 'DisplayName': 'Setswana (South Africa)', 'CurrencySymbol': 'R', 'CurrencyCode': 'ZAR' },
            { 'Name': 'sq-AL', 'DisplayName': 'Albanian (Albania)', 'CurrencySymbol': 'Lekë', 'CurrencyCode': 'ALL' },
            { 'Name': 'gsw-FR', 'DisplayName': 'Alsatian (France)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'eu-ES', 'DisplayName': 'Basque (Basque)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'br-FR', 'DisplayName': 'Breton (France)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'nl-BE', 'DisplayName': 'Dutch (Belgium)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'nl-NL', 'DisplayName': 'Dutch (Netherlands)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'co-FR', 'DisplayName': 'Corsican (France)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'en-IE', 'DisplayName': 'English (Ireland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fr-FR', 'DisplayName': 'French (France)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fr-LU', 'DisplayName': 'French (Luxembourg)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fr-MC', 'DisplayName': 'French (Monaco)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fy-NL', 'DisplayName': 'Frisian (Netherlands)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fi-FI', 'DisplayName': 'Finnish (Finland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'fr-BE', 'DisplayName': 'French (Belgium)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'et-EE', 'DisplayName': 'Estonian (Estonia)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'gl-ES', 'DisplayName': 'Galician (Galician)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'de-AT', 'DisplayName': 'German (Austria)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'lv-LV', 'DisplayName': 'Latvian (Latvia)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'lt-LT', 'DisplayName': 'Lithuanian (Lithuania)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'dsb-DE', 'DisplayName': 'Lower Sorbian (Germany)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'lb-LU', 'DisplayName': 'Luxembourgish (Luxembourg)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'se-FI', 'DisplayName': 'Sami, Northern (Finland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'pt-PT', 'DisplayName': 'Portuguese (Portugal)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'ga-IE', 'DisplayName': 'Irish (Ireland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'it-IT', 'DisplayName': 'Italian (Italy)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'oc-FR', 'DisplayName': 'Occitan (France)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'mt-MT', 'DisplayName': 'Maltese (Malta)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'de-DE', 'DisplayName': 'German (Germany)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'de-LU', 'DisplayName': 'German (Luxembourg)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'de-LU', 'DisplayName': 'German (Luxembourg)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'el-GR', 'DisplayName': 'Greek (Greece)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sms-FI', 'DisplayName': 'Sami, Skolt (Finland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'es-ES', 'DisplayName': 'Spanish (Spain)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sv-FI', 'DisplayName': 'Swedish (Finland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'hsb-DE', 'DisplayName': 'Upper Sorbian (Germany)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sr-Latn-ME', 'DisplayName': 'Serbian (Latin, Montenegro)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sk-SK', 'DisplayName': 'Slovak (Slovakia)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sl-SI', 'DisplayName': 'Slovenian (Slovenia)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'sr-Cyrl-ME', 'DisplayName': 'Serbian (Cyrillic, Montenegro)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'smn-FI', 'DisplayName': 'Sami, Inari (Finland)', 'CurrencySymbol': '€', 'CurrencyCode': 'EUR' },
            { 'Name': 'de-CH', 'DisplayName': 'German (Switzerland)', 'CurrencySymbol': 'CHF', 'CurrencyCode': 'CHF' },
            { 'Name': 'de-LI', 'DisplayName': 'German (Liechtenstein)', 'CurrencySymbol': 'CHF', 'CurrencyCode': 'CHF' },
            { 'Name': 'de-LI', 'DisplayName': 'German (Liechtenstein)', 'CurrencySymbol': 'CHF', 'CurrencyCode': 'CHF' },
            { 'Name': 'rm-CH', 'DisplayName': 'Romansh (Switzerland)', 'CurrencySymbol': 'CHF', 'CurrencyCode': 'CHF' },
            { 'Name': 'fr-CH', 'DisplayName': 'French (Switzerland)', 'CurrencySymbol': 'CHF', 'CurrencyCode': 'CHF' },
            { 'Name': 'ar-AE', 'DisplayName': 'Arabic (U.A.E.)', 'CurrencySymbol': 'د.إ.‏', 'CurrencyCode': 'AED' },
            { 'Name': 'am-ET', 'DisplayName': 'Amharic (Ethiopia)', 'CurrencySymbol': 'ብር', 'CurrencyCode': 'AMD' },
            { 'Name': 'hy-AM', 'DisplayName': 'Armenian (Armenia)', 'CurrencySymbol': '֏', 'CurrencyCode': 'AMD' },
            { 'Name': 'ar-BH', 'DisplayName': 'Arabic (Bahrain)', 'CurrencySymbol': 'د.ب.‏', 'CurrencyCode': 'BHD' },
            { 'Name': 'ar-DZ', 'DisplayName': 'Arabic (Algeria)', 'CurrencySymbol': 'د.ج.‏', 'CurrencyCode': 'DZD' },
            { 'Name': 'tzm-Latn-DZ', 'DisplayName': 'Tamazight (Latin, Algeria)', 'CurrencySymbol': 'DA', 'CurrencyCode': 'DZD' },
            { 'Name': 'ar-EG', 'DisplayName': 'Arabic (Egypt)', 'CurrencySymbol': 'ج.م.‏', 'CurrencyCode': 'EGP' },
            { 'Name': 'ar-IQ', 'DisplayName': 'Arabic (Iraq)', 'CurrencySymbol': 'د.ع.‏', 'CurrencyCode': 'IQD' },
            { 'Name': 'ku-Arab-IQ', 'DisplayName': 'Central Kurdish (Iraq)', 'CurrencySymbol': 'د.ع.‏', 'CurrencyCode': 'IQD' },
            { 'Name': 'ar-JO', 'DisplayName': 'Arabic (Jordan)', 'CurrencySymbol': 'د.ا.‏', 'CurrencyCode': 'JOD' },
            { 'Name': 'ar-KW', 'DisplayName': 'Arabic (Kuwait)', 'CurrencySymbol': 'د.ك.‏', 'CurrencyCode': 'KWD' },
            { 'Name': 'ar-LB', 'DisplayName': 'Arabic (Lebanon)', 'CurrencySymbol': 'ل.ل.‏', 'CurrencyCode': 'LBP' },
            { 'Name': 'ar-LY', 'DisplayName': 'Arabic (Libya)', 'CurrencySymbol': 'د.ل.‏', 'CurrencyCode': 'LYD' },
            { 'Name': 'ar-MA', 'DisplayName': 'Arabic (Morocco)', 'CurrencySymbol': 'د.م.‏', 'CurrencyCode': 'MAD' },
            { 'Name': 'tzm-Tfng-MA', 'DisplayName': 'Central Atlas Tamazight (Tifinagh, Morocco)', 'CurrencySymbol': '??', 'CurrencyCode': 'MAD' },
            { 'Name': 'ar-OM', 'DisplayName': 'Arabic (Oman)', 'CurrencySymbol': 'ر.ع.‏', 'CurrencyCode': 'OMR' },
            { 'Name': 'ar-QA', 'DisplayName': 'Arabic (Qatar)', 'CurrencySymbol': 'ر.ق.‏', 'CurrencyCode': 'QAR' },
            { 'Name': 'ar-SA', 'DisplayName': 'Arabic (Saudi Arabia)', 'CurrencySymbol': 'ر.س.‏', 'CurrencyCode': 'SAR' },
            { 'Name': 'ar-SY', 'DisplayName': 'Arabic (Syria)', 'CurrencySymbol': 'ل.س.‏', 'CurrencyCode': 'SYP' },
            { 'Name': 'syr-SY', 'DisplayName': 'Syriac (Syria)', 'CurrencySymbol': '?.?.?', 'CurrencyCode': 'SYP' },
            { 'Name': 'ar-TN', 'DisplayName': 'Arabic (Tunisia)', 'CurrencySymbol': 'د.ت.‏', 'CurrencyCode': 'TND' },
            { 'Name': 'ar-YE', 'DisplayName': 'Arabic (Yemen)', 'CurrencySymbol': 'ر.ي.‏', 'CurrencyCode': 'YER' },
            { 'Name': 'as-IN', 'DisplayName': 'Assamese (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'bn-IN', 'DisplayName': 'Bangla (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'en-IN', 'DisplayName': 'English (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'gu-IN', 'DisplayName': 'Gujarati (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'hi-IN', 'DisplayName': 'Hindi (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'kn-IN', 'DisplayName': 'Kannada (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'mr-IN', 'DisplayName': 'Marathi (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'ml-IN', 'DisplayName': 'Malayalam (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'kok-IN', 'DisplayName': 'Konkani (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'or-IN', 'DisplayName': 'Odia (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'pa-IN', 'DisplayName': 'Punjabi (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'sa-IN', 'DisplayName': 'Sanskrit (India)', 'CurrencySymbol': '₹', 'CurrencyCode': 'INR' },
            { 'Name': 'ta-IN', 'DisplayName': 'Tamil (India)', 'CurrencySymbol': '?', 'CurrencyCode': 'INR' },
            { 'Name': 'az-Cyrl-AZ', 'DisplayName': 'Azerbaijani (Cyrillic, Azerbaijan)', 'CurrencySymbol': '₼', 'CurrencyCode': 'AZN' },
            { 'Name': 'az-Latn-AZ', 'DisplayName': 'Azerbaijani (Latin, Azerbaijan)', 'CurrencySymbol': '₼', 'CurrencyCode': 'AZN' },
            { 'Name': 'bn-BD', 'DisplayName': 'Bangla (Bangladesh)', 'CurrencySymbol': '৳', 'CurrencyCode': 'BDT' },
            { 'Name': 'ba-RU', 'DisplayName': 'Bashkir (Russia)', 'CurrencySymbol': '₽', 'CurrencyCode': 'RUB' },
            { 'Name': 'ru-RU', 'DisplayName': 'Russian (Russia)', 'CurrencySymbol': '₽', 'CurrencyCode': 'RUB' },
            { 'Name': 'sah-RU', 'DisplayName': 'Sakha (Russia)', 'CurrencySymbol': '₽', 'CurrencyCode': 'RUB' },
            { 'Name': 'tt-RU', 'DisplayName': 'Tatar (Russia)', 'CurrencySymbol': '?', 'CurrencyCode': 'RUB' },
            { 'Name': 'be-BY', 'DisplayName': 'Belarusian (Belarus)', 'CurrencySymbol': 'Br', 'CurrencyCode': 'BYN' },
            { 'Name': 'bs-Cyrl-BA', 'DisplayName': 'Bosnian (Cyrillic, Bosnia and Herzegovina)', 'CurrencySymbol': 'КМ', 'CurrencyCode': 'BAM' },
            { 'Name': 'hr-BA', 'DisplayName': 'Croatian (Latin, Bosnia and Herzegovina)', 'CurrencySymbol': 'KM', 'CurrencyCode': 'BAM' },
            { 'Name': 'bs-Latn-BA', 'DisplayName': 'Bosnian (Latin, Bosnia and Herzegovina)', 'CurrencySymbol': 'KM', 'CurrencyCode': 'BAM' },
            { 'Name': 'sr-Cyrl-BA', 'DisplayName': 'Serbian (Cyrillic, Bosnia and Herzegovina)', 'CurrencySymbol': '??', 'CurrencyCode': 'BAM' },
            { 'Name': 'sr-Latn-BA', 'DisplayName': 'Serbian (Latin, Bosnia and Herzegovina)', 'CurrencySymbol': 'KM', 'CurrencyCode': 'BAM' },
            { 'Name': 'sr-Cyrl-RS', 'DisplayName': 'Serbian (Cyrillic, Serbia)', 'CurrencySymbol': '???.', 'CurrencyCode': 'RSD' },
            { 'Name': 'sr-Latn-RS', 'DisplayName': 'Serbian (Latin, Serbia)', 'CurrencySymbol': 'RSD', 'CurrencyCode': 'RSD' },
            { 'Name': 'bg-BG', 'DisplayName': 'Bulgarian (Bulgaria)', 'CurrencySymbol': 'лв.', 'CurrencyCode': 'BGN' },
            { 'Name': 'zh-TW', 'DisplayName': 'Chinese (Traditional, Taiwan)', 'CurrencySymbol': 'NT$', 'CurrencyCode': 'TWD' },
            { 'Name': 'zh-SG', 'DisplayName': 'Chinese (Simplified, Singapore)', 'CurrencySymbol': '$', 'CurrencyCode': 'SGD' },
            { 'Name': 'en-SG', 'DisplayName': 'English (Singapore)', 'CurrencySymbol': '$', 'CurrencyCode': 'SGD' },
            { 'Name': 'zh-MO', 'DisplayName': 'Chinese (Traditional, Macao S.A.R.)', 'CurrencySymbol': 'MOP', 'CurrencyCode': 'MOP' },
            { 'Name': 'zh-Hans-MO', 'DisplayName': 'Chinese (Simplified Han, Macao SAR)', 'CurrencySymbol': 'MOP$', 'CurrencyCode': 'MOP' },
            { 'Name': 'zh-HK', 'DisplayName': 'Chinese (Traditional, Hong Kong S.A.R.)', 'CurrencySymbol': 'HK$', 'CurrencyCode': 'HKD' },
            { 'Name': 'zh-Hans-HK', 'DisplayName': 'Chinese (Simplified Han, Hong Kong SAR)', 'CurrencySymbol': '$', 'CurrencyCode': 'HKD' },
            { 'Name': 'zh-CN', 'DisplayName': 'Chinese (Simplified, PRC)', 'CurrencySymbol': '¥', 'CurrencyCode': 'CNY' },
            { 'Name': 'bo-CN', 'DisplayName': 'Tibetan (PRC)', 'CurrencySymbol': '¥', 'CurrencyCode': 'CNY' },
            { 'Name': 'ii-CN', 'DisplayName': 'Yi (PRC)', 'CurrencySymbol': '¥', 'CurrencyCode': 'CNY' },
            { 'Name': 'chr-Cher-US', 'DisplayName': 'Cherokee (Cherokee)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'en-US', 'DisplayName': 'English (United States)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'en-ZW', 'DisplayName': 'English (Zimbabwe)', 'CurrencySymbol': 'US$', 'CurrencyCode': 'USD' },
            { 'Name': 'quz-EC', 'DisplayName': 'Quechua (Ecuador)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'haw-US', 'DisplayName': 'Hawaiian (United States)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'es-EC', 'DisplayName': 'Spanish (Ecuador)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'es-SV', 'DisplayName': 'Spanish (El Salvador)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'es-PR', 'DisplayName': 'Spanish (Puerto Rico)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'es-US', 'DisplayName': 'Spanish (United States)', 'CurrencySymbol': '$', 'CurrencyCode': 'USD' },
            { 'Name': 'hr-HR', 'DisplayName': 'Croatian (Croatia)', 'CurrencySymbol': 'kn', 'CurrencyCode': 'HRK' },
            { 'Name': 'cs-CZ', 'DisplayName': 'Czech (Czech Republic)', 'CurrencySymbol': 'Kč', 'CurrencyCode': 'CZK' },
            { 'Name': 'da-DK', 'DisplayName': 'Danish (Denmark)', 'CurrencySymbol': 'kr.', 'CurrencyCode': 'DKK' },
            { 'Name': 'fo-FO', 'DisplayName': 'Faroese (Faroe Islands)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'DKK' },
            { 'Name': 'kl-GL', 'DisplayName': 'Greenlandic (Greenland)', 'CurrencySymbol': 'kr.', 'CurrencyCode': 'DKK' },
            { 'Name': 'prs-AF', 'DisplayName': 'Dari (Afghanistan)', 'CurrencySymbol': '؋', 'CurrencyCode': 'AFN' },
            { 'Name': 'ps-AF', 'DisplayName': 'Pashto (Afghanistan)', 'CurrencySymbol': '؋', 'CurrencyCode': 'AFN' },
            { 'Name': 'dv-MV', 'DisplayName': 'Divehi (Maldives)', 'CurrencySymbol': 'ރ.', 'CurrencyCode': 'MVR' },
            { 'Name': 'en-029', 'DisplayName': 'English (Caribbean)', 'CurrencySymbol': 'EC$', 'CurrencyCode': 'XCD' },
            { 'Name': 'en-AU', 'DisplayName': 'English (Australia)', 'CurrencySymbol': '$', 'CurrencyCode': 'AUD' },
            { 'Name': 'en-BZ', 'DisplayName': 'English (Belize)', 'CurrencySymbol': '$', 'CurrencyCode': 'BZD' },
            { 'Name': 'en-CA', 'DisplayName': 'English (Canada)', 'CurrencySymbol': '$', 'CurrencyCode': 'CAD' },
            { 'Name': 'iu-Latn-CA', 'DisplayName': 'Inuktitut (Latin, Canada)', 'CurrencySymbol': '$', 'CurrencyCode': 'CAD' },
            { 'Name': 'iu-Cans-CA', 'DisplayName': 'Inuktitut (Syllabics, Canada)', 'CurrencySymbol': '$', 'CurrencyCode': 'CAD' },
            { 'Name': 'fr-CA', 'DisplayName': 'French (Canada)', 'CurrencySymbol': '$', 'CurrencyCode': 'CAD' },
            { 'Name': 'en-GB', 'DisplayName': 'English (United Kingdom)', 'CurrencySymbol': '£', 'CurrencyCode': 'GBP' },
            { 'Name': 'gd-GB', 'DisplayName': 'Scottish Gaelic (United Kingdom)', 'CurrencySymbol': '£', 'CurrencyCode': 'GBP' },
            { 'Name': 'cy-GB', 'DisplayName': 'Welsh (United Kingdom)', 'CurrencySymbol': '£', 'CurrencyCode': 'GBP' },
            { 'Name': 'en-JM', 'DisplayName': 'English (Jamaica)', 'CurrencySymbol': '$', 'CurrencyCode': 'JMD' },
            { 'Name': 'en-MY', 'DisplayName': 'English (Malaysia)', 'CurrencySymbol': 'RM', 'CurrencyCode': 'MYR' },
            { 'Name': 'ms-MY', 'DisplayName': 'Malay (Malaysia)', 'CurrencySymbol': 'RM', 'CurrencyCode': 'MYR' },
            { 'Name': 'en-NZ', 'DisplayName': 'English (New Zealand)', 'CurrencySymbol': '$', 'CurrencyCode': 'NZD' },
            { 'Name': 'mi-NZ', 'DisplayName': 'Maori (New Zealand)', 'CurrencySymbol': '$', 'CurrencyCode': 'NZD' },
            { 'Name': 'en-PH', 'DisplayName': 'English (Republic of the Philippines)', 'CurrencySymbol': '₱', 'CurrencyCode': 'PHP' },
            { 'Name': 'fil-PH', 'DisplayName': 'Filipino (Philippines)', 'CurrencySymbol': 'PhP', 'CurrencyCode': 'PHP' },
            { 'Name': 'en-TT', 'DisplayName': 'English (Trinidad and Tobago)', 'CurrencySymbol': '$', 'CurrencyCode': 'TTD' },
            { 'Name': 'ff-Latn-SN', 'DisplayName': 'Fulah (Latin, Senegal)', 'CurrencySymbol': 'CFA', 'CurrencyCode': 'XOF' },
            { 'Name': 'wo-SN', 'DisplayName': 'Wolof (Senegal)', 'CurrencySymbol': 'CFA', 'CurrencyCode': 'XOF' },
            { 'Name': 'ka-GE', 'DisplayName': 'Georgian (Georgia)', 'CurrencySymbol': '₾', 'CurrencyCode': 'GEL' },
            { 'Name': 'ha-Latn-NG', 'DisplayName': 'Hausa (Latin, Nigeria)', 'CurrencySymbol': '₦', 'CurrencyCode': 'NGN' },
            { 'Name': 'ig-NG', 'DisplayName': 'Igbo (Nigeria)', 'CurrencySymbol': '₦', 'CurrencyCode': 'NGN' },
            { 'Name': 'he-IL', 'DisplayName': 'Hebrew (Israel)', 'CurrencySymbol': '₪', 'CurrencyCode': 'ILS' },
            { 'Name': 'hu-HU', 'DisplayName': 'Hungarian (Hungary)', 'CurrencySymbol': 'Ft', 'CurrencyCode': 'HUF' },
            { 'Name': 'is-IS', 'DisplayName': 'Icelandic (Iceland)', 'CurrencySymbol': 'ISK', 'CurrencyCode': 'ISK' },
            { 'Name': 'id-ID', 'DisplayName': 'Indonesian (Indonesia)', 'CurrencySymbol': 'Rp', 'CurrencyCode': 'IDR' },
            { 'Name': 'ja-JP', 'DisplayName': 'Japanese (Japan)', 'CurrencySymbol': '¥', 'CurrencyCode': 'JPY' },
            { 'Name': 'kk-KZ', 'DisplayName': 'Kazakh (Kazakhstan)', 'CurrencySymbol': '₸', 'CurrencyCode': 'KZT' },
            { 'Name': 'km-KH', 'DisplayName': 'Khmer (Cambodia)', 'CurrencySymbol': '៛', 'CurrencyCode': 'KHR' },
            { 'Name': 'rw-RW', 'DisplayName': 'Kinyarwanda (Rwanda)', 'CurrencySymbol': 'RF', 'CurrencyCode': 'RWF' },
            { 'Name': 'sw-KE', 'DisplayName': 'Kiswahili (Kenya)', 'CurrencySymbol': 'Ksh', 'CurrencyCode': 'KES' },
            { 'Name': 'ko-KR', 'DisplayName': 'Korean (Korea)', 'CurrencySymbol': '₩', 'CurrencyCode': 'KRW' },
            { 'Name': 'ko-KP', 'DisplayName': 'Korean (North Korea)', 'CurrencySymbol': '₩', 'CurrencyCode': 'KPW' },
            { 'Name': 'ky-KG', 'DisplayName': 'Kyrgyz (Kyrgyzstan)', 'CurrencySymbol': 'сом', 'CurrencyCode': 'KGS' },
            { 'Name': 'mk-MK', 'DisplayName': 'Macedonian (Former Yugoslav Republic of Macedonia)', 'CurrencySymbol': 'ден', 'CurrencyCode': 'MKD' },
            { 'Name': 'lo-LA', 'DisplayName': 'Lao (Lao P.D.R.)', 'CurrencySymbol': '₭', 'CurrencyCode': 'LAK' },
            { 'Name': 'mn-Mong-CN', 'DisplayName': 'Mongolian (Traditional Mongolian, PRC)', 'CurrencySymbol': '¥', 'CurrencyCode': 'MNT' },
            { 'Name': 'mgo-CM', 'DisplayName': 'Meta\' (Cameroon)', 'CurrencySymbol': 'FCFA', 'CurrencyCode': 'XAF' },
            { 'Name': 'ms-BN', 'DisplayName': 'Malay (Brunei Darussalam)', 'CurrencySymbol': '$', 'CurrencyCode': 'BND' },
            { 'Name': 'arn-CL', 'DisplayName': 'Mapudungun (Chile)', 'CurrencySymbol': '$', 'CurrencyCode': 'CLP' },
            { 'Name': 'es-CL', 'DisplayName': 'Spanish (Chile)', 'CurrencySymbol': '$', 'CurrencyCode': 'CLP' },
            { 'Name': 'ne-NP', 'DisplayName': 'Nepali (Nepal)', 'CurrencySymbol': 'रु', 'CurrencyCode': 'NPR' },
            { 'Name': 'nn-NO', 'DisplayName': 'Norwegian, Nynorsk (Norway)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'NOK' },
            { 'Name': 'nb-NO', 'DisplayName': 'Norwegian, Bokmål (Norway)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'NOK' },
            { 'Name': 'smj-NO', 'DisplayName': 'Sami, Lule (Norway)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'NOK' },
            { 'Name': 'se-NO', 'DisplayName': 'Sami, Northern (Norway)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'NOK' },
            { 'Name': 'sma-NO', 'DisplayName': 'Sami, Southern (Norway)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'NOK' },
            { 'Name': 'sma-SE', 'DisplayName': 'Sami, Southern (Sweden)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'SEK' },
            { 'Name': 'se-SE', 'DisplayName': 'Sami, Northern (Sweden)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'SEK' },
            { 'Name': 'smj-SE', 'DisplayName': 'Sami, Lule (Sweden)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'SEK' },
            { 'Name': 'sv-SE', 'DisplayName': 'Swedish (Sweden)', 'CurrencySymbol': 'kr', 'CurrencyCode': 'SEK' },
            { 'Name': 'fa-IR', 'DisplayName': 'Persian (Iran)', 'CurrencySymbol': 'ريال', 'CurrencyCode': 'IRR' },
            { 'Name': 'pt-BR', 'DisplayName': 'Portuguese (Brazil)', 'CurrencySymbol': 'R$', 'CurrencyCode': 'BRL' },
            { 'Name': 'pl-PL', 'DisplayName': 'Polish (Poland)', 'CurrencySymbol': 'zł', 'CurrencyCode': 'PLN' },
            { 'Name': 'pa-Arab-PK', 'DisplayName': 'Punjabi (Islamic Republic of Pakistan)', 'CurrencySymbol': 'Rs', 'CurrencyCode': 'PKR' },
            { 'Name': 'sd-Arab-PK', 'DisplayName': 'Sindhi (Islamic Republic of Pakistan)', 'CurrencySymbol': 'Rs', 'CurrencyCode': 'PKR' },
            { 'Name': 'ur-PK', 'DisplayName': 'Urdu (Islamic Republic of Pakistan)', 'CurrencySymbol': 'Rs', 'CurrencyCode': 'PKR' },
            { 'Name': 'quz-BO', 'DisplayName': 'Quechua (Bolivia)', 'CurrencySymbol': 'Bs.', 'CurrencyCode': 'BOB' },
            { 'Name': 'es-BO', 'DisplayName': 'Spanish (Bolivia)', 'CurrencySymbol': 'Bs', 'CurrencyCode': 'BOB' },
            { 'Name': 'quz-PE', 'DisplayName': 'Quechua (Peru)', 'CurrencySymbol': 'S/.', 'CurrencyCode': 'PEN' },
            { 'Name': 'es-PE', 'DisplayName': 'Spanish (Peru)', 'CurrencySymbol': 'S/.', 'CurrencyCode': 'PEN' },
            { 'Name': 'ro-RO', 'DisplayName': 'Romanian (Romania)', 'CurrencySymbol': 'RON', 'CurrencyCode': 'RON' },
            { 'Name': 'tn-BW', 'DisplayName': 'Setswana (Botswana)', 'CurrencySymbol': 'P', 'CurrencyCode': 'BWP' },
            { 'Name': 'si-LK', 'DisplayName': 'Sinhala (Sri Lanka)', 'CurrencySymbol': 'රු.', 'CurrencyCode': 'LKR' },
            { 'Name': 'ta-LK', 'DisplayName': 'Tamil (Sri Lanka)', 'CurrencySymbol': 'Rs.', 'CurrencyCode': 'LKR' },
            { 'Name': 'es-AR', 'DisplayName': 'Spanish (Argentina)', 'CurrencySymbol': '$', 'CurrencyCode': 'ARS' },
            { 'Name': 'es-VE', 'DisplayName': 'Spanish (Bolivarian Republic of Venezuela)', 'CurrencySymbol': 'Bs.', 'CurrencyCode': 'VEF' },
            { 'Name': 'es-CO', 'DisplayName': 'Spanish (Colombia)', 'CurrencySymbol': '$', 'CurrencyCode': 'COP' },
            { 'Name': 'es-CR', 'DisplayName': 'Spanish (Costa Rica)', 'CurrencySymbol': '₡', 'CurrencyCode': 'CRC' },
            { 'Name': 'es-DO', 'DisplayName': 'Spanish (Dominican Republic)', 'CurrencySymbol': '$', 'CurrencyCode': 'DOP' },
            { 'Name': 'es-GT', 'DisplayName': 'Spanish (Guatemala)', 'CurrencySymbol': 'Q', 'CurrencyCode': 'GTQ' },
            { 'Name': 'es-HN', 'DisplayName': 'Spanish (Honduras)', 'CurrencySymbol': 'L', 'CurrencyCode': 'HNL' },
            { 'Name': 'es-MX', 'DisplayName': 'Spanish (Mexico)', 'CurrencySymbol': '$', 'CurrencyCode': 'MXN' },
            { 'Name': 'es-NI', 'DisplayName': 'Spanish (Nicaragua)', 'CurrencySymbol': 'C$', 'CurrencyCode': 'NIO' },
            { 'Name': 'es-PA', 'DisplayName': 'Spanish (Panama)', 'CurrencySymbol': 'B/.', 'CurrencyCode': 'PAB' },
            { 'Name': 'es-PY', 'DisplayName': 'Spanish (Paraguay)', 'CurrencySymbol': '₲', 'CurrencyCode': 'PYG' },
            { 'Name': 'es-UY', 'DisplayName': 'Spanish (Uruguay)', 'CurrencySymbol': '$', 'CurrencyCode': 'UYU' },
            { 'Name': 'tg-Cyrl-TJ', 'DisplayName': 'Tajik (Cyrillic, Tajikistan)', 'CurrencySymbol': '???', 'CurrencyCode': 'TJS' },
            { 'Name': 'th-TH', 'DisplayName': 'Thai (Thailand)', 'CurrencySymbol': '?', 'CurrencyCode': 'THB' },
            { 'Name': 'ti-ET', 'DisplayName': 'Tigrinya (Ethiopia)', 'CurrencySymbol': 'Br', 'CurrencyCode': 'ETB' },
            { 'Name': 'ti-ER', 'DisplayName': 'Tigrinya (Eritrea)', 'CurrencySymbol': 'Nfk', 'CurrencyCode': 'ERN' },
            { 'Name': 'tk-TM', 'DisplayName': 'Turkmen (Turkmenistan)', 'CurrencySymbol': 'm.', 'CurrencyCode': 'TMT' },
            { 'Name': 'tr-TR', 'DisplayName': 'Turkish (Turkey)', 'CurrencySymbol': '?', 'CurrencyCode': 'TRY' },
            { 'Name': 'uk-UA', 'DisplayName': 'Ukrainian (Ukraine)', 'CurrencySymbol': '?', 'CurrencyCode': 'UAH' },
            { 'Name': 'uz-Latn-UZ', 'DisplayName': 'Uzbek (Latin, Uzbekistan)', 'CurrencySymbol': 'so?m', 'CurrencyCode': 'UZS' },
            { 'Name': 'uz-Cyrl-UZ', 'DisplayName': 'Uzbek (Cyrillic, Uzbekistan)', 'CurrencySymbol': '???', 'CurrencyCode': 'UZS' },
            { 'Name': 'vi-VN', 'DisplayName': 'Vietnamese (Vietnam)', 'CurrencySymbol': '?', 'CurrencyCode': 'VND' },
            { 'Name': 'yo-NG', 'DisplayName': 'Yoruba (Nigeria)', 'CurrencySymbol': '?', 'CurrencyCode': 'NGN' }
        ];
    };
    return BasicWork;
}());
//# sourceMappingURL=basicWork.js.map