import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  data = new Date();

  dia = String(this.data.getDate()).padStart(2,  '0');

  mes = String(this.data.getMonth() + 1).padStart(2,  '0');

  dataAtual = `${this.dia}/${this.mes}`;

  inputFile = document.querySelector('#picture__input');

  pictureImage = document.querySelector('.picture__image');

}
