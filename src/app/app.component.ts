import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { CarComponent } from "./components/car/car.component";

@Component({
    selector: "app-root", // то как называется компонент в html
    standalone: true,
    imports: [CommonModule, RouterOutlet, CarComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.css",
})
export class AppComponent {}
