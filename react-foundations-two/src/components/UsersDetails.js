import React from 'react'

const UsersDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Detalhes do Usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade >= 18 ? (
            <p>Este usuário pode tirar habilitação</p>
        ) : (
            <p>Menor de idade </p>
        )}
    </div>
  )
}

export default UsersDetails