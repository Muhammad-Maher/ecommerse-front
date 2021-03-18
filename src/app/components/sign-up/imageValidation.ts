import { formatCurrency } from "@angular/common";
import { AbstractControl } from "@angular/forms";
import { Observable, Observer } from "rxjs";
import { ObjectUnsubscribedErrorCtor } from "rxjs/internal/util/ObjectUnsubscribedError";

export const myImage = (control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> => {
    const file = control.value as File
    const fileReader = new FileReader();
    fileReader.onload = () => {

    }
    const frObs = Observable.create((observ: Observer<{ [key: string]: any }>) => {
        fileReader.addEventListener("loaded", () => {
            const arr = new Uint8Array(fileReader.result as ArrayBuffer).subarray(0, 4);
            let header = "";
            let isValid = false;
            for (let i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false;
                    break;
            }
            if(isValid)
            {
                observ.next(null);
            }else{
                observ.next({invalidPhoto:true});
            }
            observ.complete();
        });
        fileReader.readAsArrayBuffer(file)
    })
    return frObs;
};