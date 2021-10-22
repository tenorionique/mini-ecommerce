import React, { useState } from 'react';
import './mini-ecommerce.css';
import Menu from './components/menu/menu';
import Produtos from './components/produtos/produtos';
import Checkout from './components/checkout/checkout';


function MiniEcommerce() {
  const [carrinho, setCarrinho] = useState({ produtos: [] });
  const [exibirProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(false);
  const [total, setTotal] = useState('0,00');

function adicionarProduto(produto) {
  /* fazendo uma copia do objeto pq é mais seguro 
  assign tenta fazer uma junção de dois objetos
  temos um objeto fazio e o nosso carrinho com os nossos dados */
 const objCarrinho = Object.assign({}, carrinho);
 //atualizar a quantidade
 let novoProduto = true; 
 objCarrinho.produtos.forEach((prod, indice)=> {
   if(prod.nome === produto.nome) {
     objCarrinho.produtos[indice].quantidade++;
     novoProduto = false
   }
 });
 //adicionar novo produto ao carrinho
 if(novoProduto) {
   objCarrinho.produtos.push({
     nome: produto.nome, preco: produto.preco, quantidade: 1
   });
 }
 setCarrinho(objCarrinho)
}
  return (
    <section>
      <Menu />
      <Produtos 
      visivel={exibirProdutos}
      adicionarProduto={adicionarProduto}/>
      <Checkout />
    </section>
  );
}

export default MiniEcommerce;
