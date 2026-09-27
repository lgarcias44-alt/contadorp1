import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  templateUrl: './contador.html',
  styleUrl: './contador.scss'
})
export class Contador {
  protected contador = signal<number>(0);

  sumar(): void {
    this.contador.update((valor) => valor + 1);
  }

  restar(): void {
    if (this.contador() > 0) {
      this.contador.update((valor) => valor - 1);
    }
  }
}