import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
export default interface ICalculator {
  suprafata: number;
  grosime: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{

 public numardetelefonwhatsapp = '0040755758211';
 public textinformaturl = 'Salut. Sunt interesat de serviciile voastre. ';

}


