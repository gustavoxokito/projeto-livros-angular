import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'JavaScript: O Guia Definitivo',
      resumo:
        'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web.',
      autores: ['David Flanagan'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Blockchain: Tudo O Que Você Precisa Saber',
      resumo:
        'Não é mais necessário entrar na “corrida do ouro” para minerar este metal precioso, estamos falando do ouro virtual. Com a explosão do fenômeno conhecido como criptomoedas, você pode sentir a emoção e a lucratividade da mineração sem se sujar, e este livro mostra como fazer isso.',
      autores: ['Peter Kent', 'Tyler Bain'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Spring Boot: Microsserviços na prática',
      resumo:
        'Este livro é um guia básico para a criação de microsserviços utilizando o framework Spring Boot e alguns outros frameworks bastante conhecidos no mercado.',
      autores: ['Caio Costa'],
    },
  ];

  constructor() {}
  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.obterProximoCodigo();
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }

    obterProximoCodigo(): number {
    const codigos = this.livros.map(livro => livro.codigo);
    const maiorCodigo = Math.max(...codigos);
    return maiorCodigo + 1;
  }
}
