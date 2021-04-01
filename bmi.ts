class BMI {
    private container: JQuery;
    private height: JQuery;
    private weight: JQuery;
    constructor() {
        this.container = $(document).find("#workAreaBMI");
        this.height = this.container.find('.holder').find('#height');
        this.weight = this.container.find('.holder').find('#weight');
        this.renderBmi();
        this.WireEvet();
    }

    private WireEvet(): void {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this));
    }

    private renderBmi(): void {        
        let bmi: string[] = [" ", " ", " ", " ", " ", " ", " ", " "];
        let colorCod: string[] = ["#e60000", "#ff9999", "#e6ffe6", "green", "#e60000", "#cc3300", "#802000", "#4d1300"];
        bmi.forEach((letter: string, index: number) => {
            let pTag: JQuery = $("<p></p>");
            pTag.css("background-color", colorCod[index]);
            pTag.textContent = letter;
            this.container.find("#BMI_container").append(pTag);
        })
    }

    private Submit(): void {
        let proceed: boolean = true;
        let selectors: JQuery = this.container.find('.holder').find("select");
        let heightInCM: number = 0.0;
        let weightInKG: number = 0.0;
        if (this.height.val() === "") {
            proceed = false
            this.height.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.height) }, 500)
        }
        if (this.weight.val() === "") {
            proceed = false
            this.weight.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.weight) }, 500)
        }
        if (this.container.find("#BMI_container").find('.text-incrementer').length > 1) {
            this.Reset();
        }
        if (proceed) {
            if ($(selectors[0]).find(":selected").val() === "fi") {
                let inchFeet: number[] = this.height.val().split("'");
                if (inchFeet.length > 1) {
                    heightInCM = heightInCM + (inchFeet[1] * 2.54);
                }
                heightInCM = heightInCM + (inchFeet[0] * 30.48);
            } else {
                heightInCM = this.height.val();
            }
            if ($(selectors[0]).find(":selected").val() === "pd") {
                weightInKG = this.weight.val() * 0.4535;
            } else {
                weightInKG = this.weight.val();
            }
            this.applyChart(this.BMI(heightInCM, weightInKG));
        }
               
    }

    private applyChart(bmi: number): void {
        let bmiText: string[] = ["Severe Thinness", "Moderate Thinness", "Mild Thinness", "Normal", "Overweight", "Obese 1", "Obese 2", "Obese 3"];
        let chides: JQuery = this.container.find("#BMI_container").children();
        if (bmi < 16) {
            chides[0].innerText = bmiText[0];
            $(chides[0]).addClass('text-incrementer');
        } else if (bmi > 16 && bmi <= 17) {
            chides[1].innerText = bmiText[1];
            $(chides[1]).addClass('text-incrementer');
        } else if (bmi > 17 && bmi <= 18.5) {
            chides[2].innerText = bmiText[2];
            $(chides[2]).addClass('text-incrementer');
        } else if (bmi > 18.5 && bmi <= 25) {
            chides[3].innerText = bmiText[3];
            $(chides[3]).addClass('text-incrementer');
        } else if (bmi > 25 && bmi <= 30) {
            chides[4].innerText = bmiText[4];
            $(chides[4]).addClass('text-incrementer');
        } else if (bmi > 30 && bmi <= 35) {
            chides[5].innerText = bmiText[5];
            $(chides[5]).addClass('text-incrementer');
        } else if (bmi > 35 && bmi <= 40) {
            chides[6].innerText = bmiText[6];
            $(chides[6]).addClass('text-incrementer');
        } else {
            chides[7].innerText = bmiText[7];
            $(chides[7]).addClass('text-incrementer');
        }
    }

    private BMI(heightInCM: number, weightInKG: number): number {
        return (weightInKG / ((heightInCM / 100) * (heightInCM / 100)));
        
    }

    private Reset(): void {
        let bmi: JQuery = this.container.find("#BMI_container");
        bmi.empty();
        this.renderBmi();
        this.height.val('');
        this.weight.val('');
    }
        
}