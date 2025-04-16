import { Component, OnInit } from '@angular/core';
import { ProdutoService, Produto } from '../produto.service';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe({
      next: (dados: Produto[]) => this.produtos = dados,
      error: (erro: any) => console.error('Erro ao carregar produtos:', erro)
    });
  }
}
