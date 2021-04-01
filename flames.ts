class Flames {
    private container: JQuery;
    private name: JQuery;
    private target: JQuery;
    constructor() {
        this.container = $(document).find("#workAreaFlames");
        this.name = this.container.find('#name');
        this.target = this.container.find('#target');
        this.renderFlames();
        this.WireEvet();
    }
    public WireEvet(): void {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this,true));
    }
    private Reset(onlyRender: boolean = false): void {
        let flames: JQuery = this.container.find("#flames_container");
        if (flames.children().length < 6) {
            flames.empty()
            this.renderFlames();
        }
        if (onlyRender) {
            this.name.val('');
            this.target.val('');
        }
    }
    private renderFlames() {
        let flames: string[] = ["F", "L", "A", "M", "E", "S"];
        flames.forEach((letter: string) => {
            let pTag = document.createElement("p");
            pTag.textContent = letter;
            this.container.find("#flames_container").append(pTag);
        })
    }
    private Submit(): void {
        let proceed: boolean = true;
        if (this.name.val() === "") {
            proceed = false
            this.name.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.name) }, 500)
        }
        if (this.target.val() === "") {
            proceed = false
            this.target.addClass('alert_border');
            setTimeout(() => { BasicWork.removeAlert(this.target) }, 500)
        }
        if (this.container.find("#flames_container").children().length < 6) {
            this.Reset();
        }
        if (proceed) {
            let flames: JQuery = this.container.find("#flames_container");
            let removetag: number = 0;
            let totalcont: number = flames.children().length;
            let canchnage: boolean = false;
            let wordCount: number = this.WordsCount(this.name.val(), this.target.val());
            do {
                for (let count: number = wordCount; count > 0; count--) {
                    if (removetag === totalcont) {
                        removetag = 0
                        if (canchnage) {
                            totalcont--;
                            canchnage = false;
                        }
                    }
                    removetag++;
                }
                this.remove(removetag);
                canchnage = true;
            } while (flames.children().length > 1);
        }

    }

    private remove(child: number): void {
        let flames: JQuery = this.container.find("#flames_container");
        flames.children()[child - 1].remove();
    }

    private WordsCount(first: string, second: string): number {
        let name = first.replace(/ +/g, '').toLowerCase();
        let target = second.replace(/ +/g, '').toLowerCase();
        for (let i: number = 0; i < name.length; i++) {
            let index = target.indexOf(name[i])
            if (index >= 0) {
                target = target.replace(target[index], '');
                name = name.replace(name[i], '');
                i = -1;
            }
        }
        return target.length + name.length;
    }
}