import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { ProdutoListaComponent } from './produtos/produto-lista/produto-lista.component';
import { ProdutoFormularioComponent } from './produtos/produto-formulario/produto-formulario.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListaComponent,
    ProdutoFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

