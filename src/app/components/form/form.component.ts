import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  FormNewPost: FormGroup

  constructor(private formConstructor: FormBuilder) { 

    this.camposFormurio()
  }


    // para acceder al contenido de las etiquetas array
  get etiquetas(): FormArray {
    return this.FormNewPost.get('etiquetas') as FormArray;
  }

  camposFormurio()  {
    this.FormNewPost = this.formConstructor.group({
      nombre: ['', Validators.required],
      imagen: ['', Validators.required],
      articulo: ['', [Validators.required, Validators.minLength(20)]],
      etiquetas: this.formConstructor.array([])
    })
  }

  anadirEtiqueta():void {
    this.etiquetas.push(this.formConstructor.control(''))
  }

  borrarEtiqueta(parametro:number):void {
    this.etiquetas.removeAt(parametro);
  }

  ngOnInit(): void {
  }

  publicar():void{
    console.log(this.FormNewPost.value)
  }

  // validaciones inputs

  get nombreInvalido():boolean {
    return this.FormNewPost.get('nombre').invalid && this.FormNewPost.get('nombre').touched;
  } 
  get nombreValido():boolean {
    return this.FormNewPost.get('nombre').valid && this.FormNewPost.get('nombre').touched;
  }

  get imgInvalida():boolean {
    return this.FormNewPost.get('imagen').invalid && this.FormNewPost.get('imagen').touched
  }
  get imgValida():boolean {
    return this.FormNewPost.get('imagen').valid && this.FormNewPost.get('imagen').touched
  }

  get articuloInvalido():boolean {
    return this.FormNewPost.get('articulo').invalid && this.FormNewPost.get('articulo').touched
  }
}
