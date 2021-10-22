import React, { useState} from 'react';
import ListarProdutos from './listar-produtos';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

function Produtos(props) {
    const [exibirMsg, setExibirMsg] = useState(false);
    const [produto, setProduto] = useState('');

    function visivel() {
        return props.visivel ? null : 'hidden';
        //se for visivel vai ser null e remover display none
        //senão ele é class hidden e esconde a section
        //olhar index.css que já a classe hidden ta definida
    }

    function exibirMensagem(produto) {
        setExibirMsg(true);
        setProduto(produto.nome);
        setTimeout(() => {
            setExibirMsg(false)
        }, 3000);
    }

    return (
        <section className={visivel()}>
            <Alert
              variant='success'
              style={{ margin: '10px'}}
              show={exibirMsg}>
                 <b>{produto}</b> adicionado com sucesso ao carrinho!
            </Alert>      
            <ListarProdutos exibirMensagem={exibirMensagem}
            adicionarProduto={props.adicionarProduto} />
        </section>
       
    )
}
Produtos.propTypes = {
    visivel: PropTypes.bool.isRequired,
    adicionarProduto: PropTypes.func.isRequired
}

export default Produtos;