import React, { useState } from 'react';
import './App.css';
import ControleEditora  from './controle/ControleEditora';
import ControleLivro from './controle/ControleLivros';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';
import { livros } from './controle/ControleLivros';
import { Livro } from './modelo/Livro';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'; 


function App() {


  const editorasVetor = new ControleEditora().getEditoras() ;
  const editorasNome = new ControleEditora().getNomeEditora(1);
  const livrosVetor = new ControleLivro().obterLivros();

  //const livrosVetorAtt = new ControleLivro().incluir(livro1);
  //new ControleLivro().incluir(livro1);


  return (
    /*
    <div>
      Livros react
      <div>
          {editorasVetor.map((e) => e.codEditora)}
      </div>
      <div>
        {editorasNome}
      </div>
      <div>
        {livrosVetor.map((l)=> 
        ( 
         <h3> {l.titulo} </h3>
        ))}
        <button>Adicionar Livro</button>  
      </div>  
      <LivroLista livro={livroTeste} excluir="excluir" nomeEditora={new ControleEditora().getNomeEditora(livroTeste.codEditora)}/>
    </div> 
    */

    <div>
      <div>
        {editorasNome}
      </div>
      <BrowserRouter>
        <nav >
          <Link to="/"> Home </Link>
          <Link to="/LivroDados"> Novo </Link>
        </nav>
        <Routes>
          <Route path="/" element={ <LivroLista />} />
          <Route path="/LivroDados" element={<LivroDados />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;