var BMI = /** @class */ (function () {
    function BMI() {
        this.container = $(document).find("#workAreaBMI");
        this.height = this.container.find('.holder').find('#height');
        this.weight = this.container.find('.holder').find('#weight');
        this.renderBmi();
        this.WireEvet();
    }
    BMI.prototype.WireEvet = function () {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this));
    };
    BMI.prototype.renderBmi = function () {
        var _this = this;
        var bmi = [" ", " ", " ", " ", " ", " ", " ", " "];
        var colorCod = ["#e60000", "#ff9999", "#e6ffe6", "green", "#e60000", "#cc3300", "#802000", "#4d1300"];
        bmi.forEach(function (letter, index) {
            var pTag = $("<p></p>");
            pTag.css("background-color", colorCod[index]);
            pTag.textContent = letter;
            _this.container.find("#BMI_container").append(pTag);
        });
    };
    BMI.prototype.Submit = function () {
        var _this = this;
        var proceed = true;
        var selectors = this.container.find('.holder').find("select");
        var heightInCM = 0.0;
        var weightInKG = 0.0;
        if (this.height.val() === "") {
            proceed = false;
            this.height.addClass('alert_border');
            setTimeout(function () { BasicWork.removeAlert(_this.height); }, 500);
        }
        if (this.weight.val() === "") {
            proceed = false;
            this.weight.addClass('alert_border');
            setTimeout(function () { BasicWork.removeAlert(_this.weight); }, 500);
        }
        if (this.container.find("#BMI_container").find('.text-incrementer').length > 1) {
            this.Reset();
        }
        if (proceed) {
            if ($(selectors[0]).find(":selected").val() === "fi") {
                var inchFeet = this.height.val().split("'");
                if (inchFeet.length > 1) {
                    heightInCM = heightInCM + (inchFeet[1] * 2.54);
                }
                heightInCM = heightInCM + (inchFeet[0] * 30.48);
            }
            else {
                heightInCM = this.height.val();
            }
            if ($(selectors[0]).find(":selected").val() === "pd") {
                weightInKG = this.weight.val() * 0.4535;
            }
            else {
                weightInKG = this.weight.val();
            }
            this.applyChart(this.BMI(heightInCM, weightInKG));
        }
    };
    BMI.prototype.applyChart = function (bmi) {
        var bmiText = ["Severe Thinness", "Moderate Thinness", "Mild Thinness", "Normal", "Overweight", "Obese 1", "Obese 2", "Obese 3"];
        var chides = this.container.find("#BMI_container").children();
        if (bmi < 16) {
            chides[0].innerText = bmiText[0];
            $(chides[0]).addClass('text-incrementer');
        }
        else if (bmi > 16 && bmi <= 17) {
            chides[1].innerText = bmiText[1];
            $(chides[1]).addClass('text-incrementer');
        }
        else if (bmi > 17 && bmi <= 18.5) {
            chides[2].innerText = bmiText[2];
            $(chides[2]).addClass('text-incrementer');
        }
        else if (bmi > 18.5 && bmi <= 25) {
            chides[3].innerText = bmiText[3];
            $(chides[3]).addClass('text-incrementer');
        }
        else if (bmi > 25 && bmi <= 30) {
            chides[4].innerText = bmiText[4];
            $(chides[4]).addClass('text-incrementer');
        }
        else if (bmi > 30 && bmi <= 35) {
            chides[5].innerText = bmiText[5];
            $(chides[5]).addClass('text-incrementer');
        }
        else if (bmi > 35 && bmi <= 40) {
            chides[6].innerText = bmiText[6];
            $(chides[6]).addClass('text-incrementer');
        }
        else {
            chides[7].innerText = bmiText[7];
            $(chides[7]).addClass('text-incrementer');
        }
    };
    BMI.prototype.BMI = function (heightInCM, weightInKG) {
        return (weightInKG / ((heightInCM / 100) * (heightInCM / 100)));
    };
    BMI.prototype.Reset = function () {
        var bmi = this.container.find("#BMI_container");
        bmi.empty();
        this.renderBmi();
        this.height.val('');
        this.weight.val('');
    };
    return BMI;
}());
//# sourceMappingURL=bmi.js.map