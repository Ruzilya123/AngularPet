import { Component, OnInit } from "@angular/core";
import { NgForOf } from "@angular/common";

@Component({
    selector: "app-car",
    standalone: true,
    imports: [NgForOf],
    templateUrl: "./car.component.html",
    styleUrl: "./car.component.css",
})
export class CarComponent implements OnInit {
    car!: Car;

    constructor() {}

    ngOnInit() {
        this.car = {
            name: "KIA",
            speed: 235,
            model: "RIO",
            colors: {
                car: "Blue",
                salon: "Black",
                wheels: "Silver",
            },
            options: ["ABS", "Автопилот", "Авто паркинг"],
        };
    }

    addOption(option: string) {
        this.car.options.unshift(option);
        return false;
    }

    deleteOpt(option: string) {
        this.car.options.map((opt, index) => {
            if (opt === option) {
                this.car.options.splice(index, 1);
            }
        });
    }

    bmwSelect() {
        this.car = {
            name: "BMW",
            speed: 280,
            model: "M5",
            colors: {
                car: "White",
                salon: "White",
                wheels: "Silver",
            },
            options: ["ABS", "Автопилот"],
        };
    }

    audiSelect() {
        this.car = {
            name: "AUDI",
            speed: 240,
            model: "A8",
            colors: {
                car: "Black",
                salon: "Black",
                wheels: "Silver",
            },
            options: ["ABS", "Автопилот", "Авто паркинг"],
        };
    }

    kiaSelect() {
        this.car = {
            name: "KIA",
            speed: 235,
            model: "RIO",
            colors: {
                car: "Blue",
                salon: "Black",
                wheels: "Silver",
            },
            options: ["ABS"],
        };
    }

    carSelect(carName: string) {
        if (carName === "bmw") {
            this.bmwSelect();
        } else if (carName === "audi") {
            this.audiSelect();
        } else if (carName === "kia") {
            this.kiaSelect();
        }
    }
}

interface Colors {
    car: string;
    salon: string;
    wheels: string;
}

interface Car {
    name: string;
    speed: number;
    model: string;
    colors: Colors;
    options: string[];
}
