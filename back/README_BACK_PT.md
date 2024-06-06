
# Projeto de Gerenciamento de Frota - Backend

## Descrição

Este projeto é a parte backend de um sistema de gerenciamento de frota. Ele utiliza AWS CDK para criar e gerenciar uma tabela DynamoDB, uma função Lambda e uma API Gateway para expor a função Lambda.

## Tecnologias Utilizadas

- AWS CDK
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- Node.js

## Configuração e Deploy

1. **Instale as Dependências**:
    ```sh
    npm install
    ```

2. **Configure suas Credenciais da AWS**:
    ```sh
    aws configure
    ```

3. **Prepare o Ambiente**:
    ```sh
    cdk bootstrap
    ```

4. **Implante a Stack**:
    ```sh
    cdk deploy
    ```

## Estrutura do Projeto

- `bin/`: Contém o ponto de entrada para o CDK.
- `lib/`: Contém a definição da stack do CDK.
- `lambda/`: Contém a função Lambda.

## Autor

Matheus Palma
