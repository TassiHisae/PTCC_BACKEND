const Banco_List = require("../model/CompraModel");
const banco_compra = new Banco_List();

class Compra {
  Compra(
    total,
    data_pedido,
    previsao,
    empresa_id_pedido,
    usuario_id_pedido,
    endereco_usuario_id_pedido,
    idusuario_pedidos,
    status,
    forma_pagamento
  ) {
    const result = banco_compra
      .compra(
        total,
        data_pedido,
        previsao,
        empresa_id_pedido,
        usuario_id_pedido,
        endereco_usuario_id_pedido,
        idusuario_pedidos,
        status,
        forma_pagamento
      )

      .then(function (results) {
        return results.rows;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115987" };
      });

    return result;
  }

  Cadastra_pedido(valorItem, QtdeItem, IdProduto, IdPedido) {
    const result = banco_compra
      .Cadastra_pedido(valorItem, QtdeItem, IdProduto, IdPedido)

      .then(function (results) {
        return results.rows;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115987" };
      });

    return result;
  }
  status_pedido(data_status, pedido_id_status) {
    const result = banco_compra

      .status_pedido(data_status, pedido_id_status)

      .then(function (results) {
        return results.rows;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115987" };
      });

    return result;
  }

  status_entregue(id_pedido) {
    const result = banco_compra

      .status_entregue(id_pedido)

      .then(function (results) {
        return results.rows;
      })
      .catch((e) => {
        return { teste: "Ocorreu um erro inesperado Codigo #115987" };
      });

    return result;
  }
}
module.exports = Compra;
