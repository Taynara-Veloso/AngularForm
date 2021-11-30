import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  data: any;
  perfil = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    dataDeNascimento: new FormControl(''),
    nomeDaMae: new FormControl(''),

  });

  constructor() { }

  ngOnInit(): void {
  }
  obter(){
    this.data = this.perfil.value;
  }
}
