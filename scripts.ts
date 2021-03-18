function init() {
    new work();
}
class work {
    private container: JQuery;
    private name: JQuery;
    private target: JQuery;
    constructor() {
        this.container = $(document).find("#container");
        this.name = this.container.find('#name');
        this.target = this.container.find('#target');
        this.WireEvet()
    }
    public WireEvet(): void {
        this.container.find('#submit').on('click', $.proxy(this.Submit, this));
        this.container.find('#reset').on('click', $.proxy(this.Reset, this));
    }
    private Reset(): void {
        let flames: JQuery = this.container.find("#flames_container").children();
        for (let i: number = 0; i < flames.length; i++) {
            flames[i].style.textDecoration = '';
        }
        this.name.val('');
        this.target.val('');
    }
    private Submit():void {
        let proceed: boolean = true;
        if (this.name.val() === "") {
            proceed = false
            this.name.addClass('alert_border');
        }
        if (this.target.val() === "") {
            proceed = false
            this.target.addClass('alert_border');
        }
        if (proceed) {
            let flames: JQuery = this.container.find("#flames_container");
            let removetag: number = 0;
            let totalcont: number = flames.children().length;
            let canchnage: boolean = false;

            do {
                for (let count: number = this.WordsCount(this.name.val(), this.target.val()); count > 0; count--) {
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

    private remove(child: number):void {
        let flames: JQuery = this.container.find("#flames_container");
        flames.children()[child - 1].style.textDecoration = 'line-through';
        flames.children()[child - 1].style.textDecorationColor = 'red'
    }

    private WordsCount(first: string, second: string): number {
        let name = first.replace(/ +/g, '');
        let target = second.replace(/ +/g, '');
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