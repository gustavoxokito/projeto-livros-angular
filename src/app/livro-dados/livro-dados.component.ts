import { Component } from '@angular/core';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Editora } from '../editora';
import { Livro } from '../livro';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent implements OnInit {
  livro: Livro;
  autoresForm: string = '';
  editoraSelecionada: Editora | null = null;
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {
    this.livro = new Livro(0, 0, '', '', []);
  }

  ngOnInit() {
    this.editoras = this.servEditora.getEditoras();
  }

  incluir() {
    const novoCodigo = this.servLivros.obterProximoCodigo();
    const editoraSelecionada = this.editoraSelecionada ? this.editoraSelecionada.codEditora : 0;
    const nomeEditora = this.editoraSelecionada ? this.editoraSelecionada.nome : '';
    
    const novoLivro = new Livro(
      novoCodigo,
      editoraSelecionada,
      this.livro.titulo,
      this.livro.resumo,
      this.autoresForm.split('\n').filter((autor) => autor.trim() !== '')
    );
    
    this.servLivros.incluir(novoLivro);
    this.router.navigateByUrl('/lista');
  }
}
