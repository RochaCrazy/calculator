class CalcController {

    constructor(){

        this._locale = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        // this._currentDate;
        this.initButtonsEvents();
        this.initialize();

    }

    initialize(){

        this.setDisplayDateTime();
        
        setInterval(() => {

            this.setDisplayDateTime();
            
        }, 1000);

   }

   initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        
        buttons.forEach((btn, index)=>{

            btn.addEventListener('click', e => {

                console.log(btn);

            })

        })

   }

    setDisplayDateTime(){

        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

   }

    get displayTime(){

        return this._timeEl.innerHTML;

    }

    set displayTime(value){

        this._timeEl.innerHTML = value;

    }

    get displayDate(){

        this._dateEl.innerHTML;

    }

    set displayDate(value){

        this._dateEl.innerHTML = value;

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(valor){

        this._displayCalcEl.innerHTML = valor;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(valor){

        this._currentDate = valor;

    }

}