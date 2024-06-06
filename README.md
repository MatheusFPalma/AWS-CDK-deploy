# Projeto de Gerenciamento de Frota com AWS CDK
![Título e Descrição Geral](https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fiftirsp3uzc3ww2z7s3k.png)
## Descrição Geral
Este projeto demonstra a criação de um sistema de gerenciamento de frota utilizando o AWS CDK (Cloud Development Kit). O sistema inclui um backend para registrar e gerenciar veículos usando AWS Lambda, DynamoDB e API Gateway, e um frontend em React para interagir com o backend.
Possui caráter acadêmico, para desenvolvedores que queiram iniciar estudos em AWS CDK.

## Índice
- [Título e Descrição Geral](#título-e-descrição-geral)
- [Índice](#índice)
- [Conceitos Básicos do AWS CDK](#conceitos-básicos-do-aws-cdk)
- [Configuração do Ambiente](#configuração-do-ambiente)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Detalhamento do Backend](#detalhamento-do-backend)
- [Detalhamento do Frontend](#detalhamento-do-frontend)
- [Fontes e Referências](#fontes-e-referências)
- [Autores e Contribuições](#autores-e-contribuições)
- [Licença](#licença)

## Conceitos Básicos do AWS CDK
![Conceitos Básicos do AWS CDK](https://d2908q01vomqb2.cloudfront.net/7719a1c782a1ba91c031a682a0a2f8658209adbf/2020/05/14/Picture1-4.png)
**O que é o AWS CDK:**
O AWS Cloud Development Kit (CDK) é uma estrutura de desenvolvimento de software de código aberto para definir a infraestrutura de nuvem como código (IaC) com linguagens de programação familiares. O CDK permite que você modele e provisiona recursos de aplicativos em nuvem usando linguagens de programação conhecidas, como TypeScript, Python, Java, e C#.

**Vantagens do AWS CDK:**
- **Produtividade:** Escrever infraestrutura como código em uma linguagem de programação facilita a reutilização, a abstração e a automação.
- **Poder da Programação:** Use loops, condições e abstrações orientadas a objetos para modelar sua infraestrutura.
- **Melhor Integração:** Permite integração fácil com outras ferramentas de desenvolvimento e serviços AWS.

**Principais Ferramentas e Conceitos:**
- **Stacks:** Coleções de recursos AWS que podem ser provisionadas e gerenciadas como uma unidade.
- **Constructs:** Blocos de construção do AWS CDK. Constructs representam uma parte discreta da sua infraestrutura, como um bucket S3 ou uma função Lambda.
- **Assets:** Recursos externos, como código de função Lambda ou contêineres Docker, que são integrados ao seu app CDK.

**Serviços AWS:**
![Serviços AWS](https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2020/06/17/Architecture-of-the-application.png)
- **AWS Lambda:**
  - **O que é:** AWS Lambda é um serviço que permite executar código sem provisionar ou gerenciar servidores. Você paga apenas pelo tempo de computação consumido.
  - **Vantagens:** Escalabilidade automática, custo-efetividade, fácil integração com outros serviços AWS.
  - **Exemplo de Uso no Projeto:**
    ```typescript
    import * as lambda from 'aws-cdk-lib/aws-lambda';

    const registerVehicleLambda = new lambda.Function(this, 'RegisterVehicleHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'register.handler',
      code: lambda.Code.fromAsset('lambda')
    });
    ```

- **Amazon DynamoDB:**
  - **O que é:** Amazon DynamoDB é um serviço de banco de dados NoSQL totalmente gerenciado que oferece desempenho rápido e previsível com escalabilidade perfeita.
  - **Vantagens:** Gerenciamento automático, latência baixa, alta disponibilidade.
  - **Exemplo de Uso no Projeto:**
    ```typescript
    import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

    const fleetTable = new dynamodb.Table(this, 'FleetTable', {
      partitionKey: { name: 'vehicleId', type: dynamodb.AttributeType.STRING },
      tableName: `FleetTable-${this.stackName}`,
      removalPolicy: cdk.RemovalPolicy.DESTROY
    });
    ```

- **Amazon API Gateway:**
  - **O que é:** Amazon API Gateway é um serviço totalmente gerenciado que facilita a criação, publicação, manutenção, monitoramento e segurança de APIs em qualquer escala.
  - **Vantagens:** Escalabilidade, integração com serviços AWS, suporte a múltiplos protocolos.
  - **Exemplo de Uso no Projeto:**
    ```typescript
    import * as apigateway from 'aws-cdk-lib/aws-apigateway';

    const api = new apigateway.RestApi(this, 'FleetServiceApi', {
      restApiName: 'Fleet Service',
      description: 'Este serviço gerencia informações da frota.'
    });

    const registerVehicleIntegration = new apigateway.LambdaIntegration(registerVehicleLambda);
    const vehicle = api.root.addResource('vehicle');
    vehicle.addMethod('POST', registerVehicleIntegration);
    ```

## Configuração do Ambiente
![Configuração de Ambiente](https://miro.medium.com/v2/resize:fit:720/format:webp/1*47OEvb30iyFc_qkYYrlcEw.png)

**Pré-requisitos:**
- Node.js (versão 18.x ou superior)
- AWS CLI configurada
- AWS CDK instalado globalmente

**Versão do Node.js:**
Este projeto utiliza a versão 18.x do Node.js. É importante verificar a compatibilidade entre as versões do Node.js e o AWS CDK, bem como outros serviços AWS, na documentação oficial do [AWS CDK](https://docs.aws.amazon.com/cdk/latest/guide/home.html) e do [Node.js](https://nodejs.org/).

**Configuração do AWS CLI:**
A AWS Command Line Interface (CLI) é uma ferramenta unificada para gerenciar seus serviços AWS. Com apenas um programa de download, você pode controlar vários serviços da AWS a partir da linha de comando e automatizar esses serviços através de scripts.

**Passos para Configurar o AWS CLI:**

1. **Instalar o AWS CLI**:
   - Você pode baixar e instalar o AWS CLI a partir deste [link](https://aws.amazon.com/cli/).
   - Para sistemas baseados em Unix, você pode instalar usando `pip`:
     ```sh
     pip install awscli
     ```

2. **Configurar o AWS CLI**:
   - Após a instalação, configure suas credenciais AWS utilizando o comando:
     ```sh
     aws configure
     ```
   - Você será solicitado a inserir suas credenciais da AWS:
     - **AWS Access Key ID**: Sua chave de acesso.
     - **AWS Secret Access Key**: Sua chave secreta.
     - **Default region name**: A região padrão onde você deseja operar (ex: `us-east-1`).
     - **Default output format**: O formato de saída padrão (`json` é recomendado).

3. **Verificar a Configuração**:
   - Você pode verificar se a configuração foi bem-sucedida listando seus buckets S3:
     ```sh
     aws s3 ls
     ```

**Instalação do AWS CDK:**
O AWS Cloud Development Kit (CDK) é uma estrutura para definir recursos de infraestrutura de nuvem usando linguagens de programação familiares.

1. **Instalar o AWS CDK**:
   - Para instalar o AWS CDK globalmente, use o npm:
     ```sh
     npm install -g aws-cdk
     ```

2. **Verificar a Instalação do CDK**:
   - Verifique se o CDK foi instalado corretamente:
     ```sh
     cdk --version
     ```

**Bootstrap do Ambiente:**
O comando `cdk bootstrap` prepara a conta AWS para ser utilizada com o CDK, criando recursos necessários para a implantação (por exemplo, bucket S3 para armazenamento de assets).

   - Para preparar o bootstrap, use o npm:
     ```sh
     cdk bootstrap
     ```


**Nota Importante**:
Para evitar problemas de permissões, é recomendado executar os comandos do AWS CLI e do CDK no CMD como administrador e não pelo Visual Studio. Para abrir o CMD como administrador, siga os passos:
- Procure por "CMD" ou "Prompt de Comando" no menu Iniciar.
- Clique com o botão direito no "Prompt de Comando" e selecione "Executar como administrador".
- Coloque ```cd <Caminho da pasta>```.

### Como Obter as Credenciais da AWS
![Obter as Credenciais da AWS](https://wallydata.blog/wp-content/uploads/2023/05/image-4.png?w=1024)
Para configurar o AWS CLI, você precisa de credenciais de acesso à sua conta AWS. Aqui estão os passos para obter essas credenciais:

1. **Acessar o Console da AWS:**
   - Vá para o [Console de Gerenciamento da AWS](https://aws.amazon.com/console/).

2. **Navegar para IAM (Identity and Access Management):**
   - No console da AWS, procure por IAM e selecione-o.

3. **Criar um Novo Usuário:**
   - No painel do IAM, vá para "Users" e clique em "Add user".
   - Insira um nome de usuário e selecione o tipo de acesso programático (programmatic access).

4. **Atribuir Permissões:**
   - Selecione "Attach existing policies directly" e escolha "AdministratorAccess" (ou crie uma política personalizada com as permissões necessárias).

5. **Revisar e Criar o Usuário:**
   - Revise as configurações e clique em "Create user".

6. **Baixar as Credenciais:**
   - Após criar o usuário, você verá a chave de acesso e a chave secreta. Baixe o arquivo CSV com essas credenciais ou copie-as para um local seguro.

### Estrutura do Projeto

**Descrição dos Diretórios e Arquivos:**
- `backend/`: Contém a lógica do backend usando AWS CDK.
  - `bin/`: Ponto de entrada do CDK.
  - `lib/`: Definições das stacks.
  - `lambda/`: Funções Lambda.
- `frontend/`: Contém a lógica do frontend usando React.
  - `src/`: Componentes React e arquivos de configuração.

### Detalhamento do Backend

**Tecnologias Utilizadas:**
- AWS CDK
- AWS Lambda
- AWS DynamoDB
- AWS API Gateway
- Node.js

**Estrutura do Código:**
- Explicação de `bin/`, `lib/`, e `lambda/`.

**Descrição das Stacks e Recursos AWS Utilizados:**
- Detalhamento da stack de gerenciamento de frota.
- Recursos: Tabela DynamoDB, Função Lambda, API Gateway.

**Instruções de Deploy:**
```sh
npm install
cdk bootstrap
cdk deploy
```

### Detalhamento do Frontend

**Tecnologias Utilizadas:**
- React
- Axios

**Estrutura do Código:**
- Explicação dos componentes principais.

**Instruções de Configuração e Execução:**
```sh
npm install
npm start
```	

### Fontes e Referências

**Documentação Oficial do AWS CDK:**
- [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/latest/guide/home.html)
- [API Reference](https://docs.aws.amazon.com/cdk/api/latest/)
- [AWS CLI Documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html)
- [Node.js Documentation](https://nodejs.org/en/docs/)

**Tutoriais e Artigos Úteis:**
- [Exemplos no GitHub](https://github.com/aws-samples/aws-cdk-examples)
- [Blog da AWS](https://aws.amazon.com/blogs/developer/category/developer-tools/aws-cdk/)

### Autores e Contribuições

**Autor:**

[Matheus Palma](https://www.linkedin.com/in/matheusfpalma/)

### Como Contribuir

1. Faça um fork do projeto.
2. Crie uma branch para a sua feature (`git checkout -b feature/nome-da-feature`).
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`).
4. Push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

Para mais detalhes, consulte o nosso Guia de Contribuição.

### Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para mais detalhes.