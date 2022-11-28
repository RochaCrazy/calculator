class CalcController {

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        // this._currentDate;
        this.initialize();

    }

    initialize(){
        
        setInterval(() => {

            this.displayDate = this.currentDate.toLocaleDateString('pt-BR');
            this.displayTime = new Date().toLocaleTimeString('pt-BR');
            
        }, 1000);

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