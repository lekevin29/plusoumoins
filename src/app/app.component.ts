import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jeuduplusoumoins';
  nombre = 1;
  valeur = Math.floor((Math.random() * 100) + 1);
  plus(chiffre: number) {
    this.nombre += chiffre;
  }
  moins(chiffre: number) {

    if (this.nombre - chiffre <= 0) {
      this.nombre = 0;
    }

    if (this.nombre - chiffre > 0) {
      this.nombre -= chiffre;
    }

  }
  valider() {
    if (this.nombre === this.valeur) {
      alert('Vous avez gagné !');
    } else {
      if (this.nombre < this.valeur) {
        alert('Plus haut');
      } else {
        alert('Plus bas');
      }
    }
  }

}
