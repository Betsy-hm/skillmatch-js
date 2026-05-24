# SkillMatch JS
 
## Sobre o projeto
 
O SkillMatch JS é um simulador de compatibilidade entre um candidato e vagas de front-end júnior.
 
O projeto compara as habilidades do candidato com os requisitos de vagas fictícias da área de tecnologia e exibe:
 
- percentual de compatibilidade com cada vaga;
- habilidades encontradas;
- habilidades faltantes;
- vaga com maior compatibilidade;
- recomendação de estudo personalizada.
O sistema foi desenvolvido utilizando JavaScript puro, aplicando conceitos fundamentais e intermediários do Módulo 01.
 
---
 
## Objetivo
 
Praticar os principais conceitos estudados durante o módulo:
 
- lógica de programação;
- JavaScript;
- tipos de dados;
- condicionais (if/else);
- operadores lógicos e matemáticos;
- escopo de variáveis;
- laços de repetição;
- funções;
- arrow functions;
- arrays;
- métodos de array;
- objetos;
- Programação Orientada a Objetos;
- herança;
- callbacks;
- closures;
- Promises;
- async/await;
- Git e GitHub;
- organização com Kanban.
---
 
## Funcionalidades
 
O sistema realiza:
 
- cadastro do candidato;
- armazenamento das habilidades;
- listagem de vagas Front-End;
- cálculo de compatibilidade;
- classificação de aderência;
- identificação de habilidades faltantes;
- recomendação de estudo;
- identificação da vaga mais compatível;
- simulação de carregamento assíncrono de dados.
---
 
## Como executar
 
Este projeto não necessita instalação de dependências ou Node.js.
 
### Opção 1 — Google Chrome
 
1. Abrir o Google Chrome;
2. Pressionar `F12` ou `Ctrl + Shift + J`;
3. Abrir a aba `Console`;
4. Copiar o conteúdo do arquivo `skillmatch.js`;
5. Colar no console;
6. Pressionar `Enter`.
---
 
### Opção 2 — VS Code
 
1. Abrir o projeto no VS Code;
2. Instalar a extensão `Code Runner`;
3. Abrir o arquivo `skillmatch.js`;
4. Executar utilizando:
   - botão `Run Code`;
   - ou `Ctrl + Alt + N`.
---
 
### Opção 3 — Ambiente online
 
Também é possível executar em:
 
- [jsfiddle.net](https://jsfiddle.net)
- [playcode.io](https://playcode.io)
---
 
## Estrutura do projeto
 
```txt
skillmatch-js/
│
├── skillmatch.js
├── README.md
└── planejamento/
    └── tarefas-kanban.md
```
 
 
## Conceitos demonstrados no código
 
### Tipos de dados
 
O objeto `candidato` utiliza os cinco tipos:
 
- strings;
- números;
- arrays;
- objetos;
- booleanos.
Exemplo:
 
```js
const candidato = {
  nome: "Anmey Manriquez",
  email: "anmey@email.com",
  ativo: true,
  experiencia: 11,
  habilidades: ["HTML", "CSS", "JavaScript"]
};
```
 
---
 
### var, let e const
 
Neste projeto foram utilizados `const` e `let`.
 
- `const` foi utilizado para valores fixos;
- `let` foi utilizado em variáveis que sofrem alteração.
O uso de `var` foi evitado devido ao comportamento de hoisting e escopo de função, que podem gerar comportamentos inesperados.
 
Exemplo:
 
```js
var x = 1;
{
  var x = 2;
}
console.log(x); // 2 — escopo de função, vazamento de valor
 
let y = 1;
{
  let y = 2;
}
console.log(y); // 1 — escopo de bloco, comportamento esperado
```
 
---
 
### Operadores lógicos e matemáticos
 
O sistema utiliza operadores para:
 
- cálculo de percentuais;
- comparação de compatibilidade;
- validações condicionais;
- classificação das vagas.
Exemplo:
 
```js
const percentual = Math.round((possuidas.length / total) * 100);
 
if (percentual >= 80) {
  return "[ALTA]";
}
```
 
---
 
### Estruturas de repetição
 
Foram utilizados `for` e `while` para:
 
- listagem numerada dos resultados;
- contagem de habilidades do candidato;
- análise das vagas.
---
 
### Arrays e métodos de array
 
O projeto utiliza arrays para armazenar habilidades, vagas e resultados.
 
Métodos utilizados:
 
| Método | Uso no projeto |
|---|---|
| `map` | Transforma cada vaga em um objeto de resultado |
| `filter` | Filtra habilidades faltantes e vagas com alta compatibilidade |
| `reduce` | Encontra a vaga com maior percentual de compatibilidade |
| `find` | Localiza a primeira vaga com 100% de compatibilidade |
| `every` | Verifica se todas as vagas exigem HTML |
 
---
 
### Objetos simples
 
O projeto utiliza objetos literais para representar o perfil do candidato.
 
Exemplo:
 
```js
const candidato = {
  nome: "Anmey Manriquez",
  habilidades: ["HTML", "CSS"]
};
```
 
---
 
## Programação Orientada a Objetos
 
O sistema utiliza POO através de classes, construtores, atributos, métodos, herança e uso do `this`.
 
---
 
### Classe Vaga
 
```js
class Vaga {
  constructor(empresa, cargo, requisitos, descricao) {
    this.empresa    = empresa;
    this.cargo      = cargo;
    this.requisitos = requisitos;
    this.descricao  = descricao;
  }
 
  exibirResumo() {
    console.log(this.empresa + " | " + this.cargo);
    console.log("Requisitos: " + this.requisitos.join(", "));
  }
 
  calcularCompatibilidade(habilidadesCandidato) {
    const possuidas = this.requisitos.filter(req =>
      habilidadesCandidato.includes(req)
    );
    return Math.round((possuidas.length / this.requisitos.length) * 100);
  }
}
```
 
---
 
### Herança
 
```js
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, descricao, framework) {
    super(empresa, cargo, requisitos, descricao);
    this.framework = framework;
  }
 
  exibirResumo() {
    super.exibirResumo();
    console.log("Framework: " + this.framework);
  }
}
```
 
---
 
### Uso do this
 
O `this` foi utilizado para referenciar os atributos da própria instância dentro dos métodos da classe.
 
Exemplo:
 
```js
this.empresa    = empresa;
this.cargo      = cargo;
this.requisitos = requisitos;
this.descricao  = descricao;
```
 
---
 
## Callback
 
A função `analisarVagas()` recebe um callback como terceiro parâmetro, responsável por processar e exibir os resultados finais após a análise de todas as vagas.
 
```js
function analisarVagas(perfil, listaVagas, callback) {
  // processamento...
  callback(resultados, melhor, vagasAltas, vagaPerfeita, htmlEmTodas);
}
```
 
---
 
## Closure
 
O projeto utiliza closure para encapsular o contador de análises, mantendo a variável `totalAnalises` privada e inacessível de fora da função.
 
```js
function criarContador() {
  let totalAnalises = 0;
 
  return {
    incrementar: () => ++totalAnalises,
    obterTotal:  () => totalAnalises
  };
}
 
const contador = criarContador();
```
 
---
 
## Promise e async/await
 
A função `buscarVagasOnline()` utiliza Promise para simular uma busca de vagas em rede, com `setTimeout` representando a latência da requisição.
 
A função `iniciarSistema()` utiliza `async/await` para aguardar o carregamento dos dados antes de continuar a execução.
 
```js
function buscarVagasOnline() {
  return new Promise(resolve => {
    setTimeout(() => resolve(vagas), 1200);
  });
}
 
async function iniciarSistema() {
  const vagasCarregadas = await buscarVagasOnline();
  // continua após a Promise resolver
}
```
 
---
 
## Arquitetura cliente-servidor
 
Na arquitetura cliente-servidor, o cliente envia uma requisição, o servidor processa os dados e devolve uma resposta.
 
Neste projeto, a Promise simula esse comportamento: o `setTimeout` representa a latência de rede e o `resolve` representa a resposta do servidor.
 
```txt
[ Cliente / Navegador ]  --->  requisição HTTP  --->  [ Servidor ]
[ Cliente / Navegador ]  <---  resposta JSON    <---  [ Servidor ]
```
 
---
 
## Como a internet funciona
 
A internet funciona através da comunicação entre dispositivos utilizando protocolos de rede.
 
Quando um usuário acessa um sistema web:
 
1. o navegador envia uma requisição HTTP para um servidor;
2. o servidor localiza e processa os dados solicitados;
3. o servidor devolve uma resposta, geralmente em HTML ou JSON;
4. o navegador interpreta e exibe as informações ao usuário.
No projeto, a função `buscarVagasOnline()` simula esse fluxo de forma assíncrona.
 
---
 
## Extensões VS Code utilizadas
 
| Extensão | Finalidade |
|---|---|
| Code Runner | Executar JavaScript diretamente no VS Code |
| ESLint | Identificar erros e inconsistências no código |
| Prettier | Formatação automática do código |
| GitLens | Visualização de commits e branches no editor |
| JavaScript ES6 Snippets | Atalhos para escrita de código moderno |
 
---
 
## Organização do projeto
 
O desenvolvimento foi organizado utilizando Kanban com três colunas:
 
- **To Do** — tarefas planejadas;
- **In Progress** — tarefas em andamento;
- **Done** — tarefas concluídas.
O quadro foi criado no Trello e permitiu acompanhar a evolução do sistema durante todo o desenvolvimento.
 
---
 
## Versionamento
 
O projeto utiliza Git e GitHub para controle de versões, com um fluxo simplificado de GitFlow:
 
```txt
main
└── develop
    ├── feat/analise-vagas
    └── docs/readme
```
 
---
 
## Histórico de commits
 
O projeto possui commits progressivos que representam a evolução real do sistema:
 
```txt
chore: inicializar projeto skillmatch-js
feat: adicionar perfil do candidato e lista de vagas
feat: implementar classes Vaga e VagaFrontEnd com heranca
feat: adicionar logica de compatibilidade e analise com metodos de array
feat: adicionar busca assincrona com Promise e funcao principal async/await
docs: adicionar README com instrucoes e conceitos do projeto
merge: feat/analise-vagas into develop
merge: docs/readme into develop
merge: develop into main
```
 
---
 
## Principais desafios durante o desenvolvimento
 
Durante o desenvolvimento do projeto, alguns desafios técnicos foram enfrentados:
 
### Estruturação da lógica de compatibilidade
 
Foi necessário organizar corretamente o cálculo de compatibilidade entre as habilidades do candidato e os requisitos de cada vaga, garantindo que o percentual fosse calculado de forma precisa.
 
### Aplicação da Programação Orientada a Objetos
 
A implementação de classes, herança, construtores e métodos exigiu organização adequada da estrutura do sistema, especialmente na relação entre `Vaga` e `VagaFrontEnd`.
 
### Uso de métodos de array
 
Outro desafio foi utilizar corretamente `map`, `filter`, `reduce`, `find` e `every` para evitar repetição de código e melhorar a legibilidade da análise.
 
### Fluxo assíncrono
 
A implementação de Promise e `async/await` exigiu compreensão do funcionamento assíncrono do JavaScript e de como aguardar a resolução de uma Promise antes de continuar a execução.
 
### Versionamento com Git e GitHub
 
A organização das branches, a criação de commits progressivos e a sincronização do repositório também representaram um desafio importante durante o desenvolvimento.
 
---
 
# Licença

Projeto acadêmico desenvolvido para fins educacionais.

## Autora
 
Projeto desenvolvido por Betsy Manriquez.
