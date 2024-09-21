import React from 'react';
import Inicio from 'pages/inicio';
import Sobre from 'pages/sobre';
import Cardapio from 'pages/Cardapio';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ImagemSite from 'components/Logo';
import Footer from 'components/footer';
import NotFound from 'pages/Not-found';
import PaginaPadrao from 'components/paginaPadrao';
import Prato from 'pages/Prato';
                            // O "Routes" funciona como se fosse um 'switch' do javascript.
export default function Rotas(){
    return(
   <main className='container'>
         <BrowserRouter>
         <ImagemSite/>
            <Routes> 
                <Route path='' element={<PaginaPadrao/>}/>
                <Route index element={<Cardapio/>}/>
                <Route path='recomendacoes' element={<Inicio/>}/>
                <Route path='sobre' element={<Sobre/>}/>
                <Route  path='*'  element={<NotFound/>}/> //Aqui eu crio o notFound para a minha aplicação
                <Route path='prato/:id' element={<Prato/>}/> //Todo os números que eu for direcionado vão ser o valor do id do determinado prato
            </Routes>
            <Footer/>
        </BrowserRouter>
   </main>
    );
}