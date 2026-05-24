// SkillMatch JS
// Projeto em desenvolvimento






// TIPOS DE DADOS: strings, números, arrays, objetos, booleanos ─

// Perfil do candidato
const candidato = {
  nome: "Anmey Manriquez",
  email: "anmey@email.com",
  ativo: true,                                // booleano
  experiencia: 11,                             // numero
  habilidades: ["HTML", "CSS", "JavaScript", "Lógica de Programação", "Git"] // array
};

// Classe Vaga com constructor, atributos e metodos
class Vaga {
  constructor(empresa, cargo, requisitos, descricao) {
    this.empresa    = empresa;     // uso de this
    this.cargo      = cargo;
    this.requisitos = requisitos;
    this.descricao  = descricao;
  }

  // Método: exibe resumo da vaga
  exibirResumo() {
    console.log("\n" + this.empresa + " | " + this.cargo);
    console.log("Requisitos: " + this.requisitos.join(", "));
    console.log(this.descricao);
  }

 // Método: calcula % de compatibilidade usando habilidades do candidato
  calcularCompatibilidade(habilidadesCandidato) {
    const possuidas = this.requisitos.filter(req =>   // arrow fn + filter
      habilidadesCandidato.includes(req)
    );
    return Math.round((possuidas.length / this.requisitos.length) * 100);
  }
}

// Heranca com VagaFrontEnd extends Vaga
class VagaFrontEnd extends Vaga {
  constructor(empresa, cargo, requisitos, descricao, framework) {
    super(empresa, cargo, requisitos, descricao);
    this.framework = framework;
  }

  exibirResumo() {
    super.exibirResumo();                          // método herdado
    console.log("Framework: " + this.framework);
  }
}

// Lista de vagas como instancias das classes
const vagas = [
  new VagaFrontEnd(
    "TechNova", "Dev Front-End Júnior",
    ["HTML", "CSS", "JavaScript", "Lógica de Programação", "Git"],
    "Startup de fintech em rápido crescimento.", "React"
  ),
  new VagaFrontEnd(
    "WebCraft", "Front-End Developer Jr",
    ["HTML", "CSS", "JavaScript", "TypeScript", "Git"],
    "Agência digital especializada em e-commerce.", "Nenhum"
  ),
   new VagaFrontEnd(
    "PixelSoft", "Desenvolvedor Front-End Jr",
    ["HTML", "CSS", "JavaScript", "Vue.js", "Figma", "Git"],
    "Empresa focada em design de produto.", "Vue.js"
  ),
  new Vaga(
    "DataBridge", "Dev Front Júnior",
    ["HTML", "CSS", "JavaScript", "Bootstrap", "REST APIs"],
    "Empresa de analytics e visualização de dados."
  ),
  new Vaga(
    "CloudBase", "Front-End Júnior",
    ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js"],
    "Scale-up de infraestrutura em nuvem."
  )
];

// Closure — contador de analises
// A variável totalAnalises só é acessível pelas funções internas (closure).
function criarContador() {
  let totalAnalises = 0;                        // estado privado (closure)
  return {
    incrementar: () => ++totalAnalises,         // arrow function
    obterTotal:  () => totalAnalises
  };
}
const contador = criarContador();

// Classificar compatibilidade com if-else
  function classificarCompatibilidade(percentual) {
  if (percentual >= 80) {
    return "[ALTA]";
  } else if (percentual >= 50) {
    return "[MEDIA]";
  } else {
    return "[BAIXA]";
  }
}

// Habilidades faltantes
function listarFaltantes(vaga, habilidadesCandidato) {
  return vaga.requisitos.filter(          // arrow fn + filter
    req => !habilidadesCandidato.includes(req)
  );
}
 
// Gerar recomendação de estudo 
 function gerarRecomendacao(faltantes) {
  if (faltantes.length === 0) {
    return " Você está pronto(a) para esta vaga!";
  }
  const lista = faltantes
    .map(skill => `• Estudar: ${skill}`)    // map
    .join("\n   ");
  return ` Plano de estudos:\n   ${lista}`;
}
 // Analisar vagas usando métodos de array 
// Métodos usados: map, filter, find, every, reduce
// recebe um callback como parâmetro
function analisarVagas(perfil, listaVagas, callback) {
  console.log("─".repeat(46));
 
  // ── map -> transforma cada vaga em um objeto de resultado
  const resultados = listaVagas.map(vaga => {
    contador.incrementar();
    const percentual    = vaga.calcularCompatibilidade(perfil.habilidades);
    const classificacao = classificarCompatibilidade(percentual);
    const faltantes     = listarFaltantes(vaga, perfil.habilidades);
 
    vaga.exibirResumo();
    console.log(` Compatibilidade: ${percentual}% – ${classificacao}`);
 
    if (faltantes.length > 0) {
      console.log(`  Habilidades faltantes: ${faltantes.join(", ")}`);
    } else {
      console.log(" Possui todos os requisitos!");
    }
 
    return { vaga, percentual, classificacao, faltantes };
  });
 
  // ── reduce -> encontra a vaga com maior percentual
  const melhor = resultados.reduce((acum, atual) =>
    atual.percentual >= acum.percentual ? atual : acum
  );
 
  // ── filter -> vagas com alta compatibilidade
  const vagasAltas = resultados.filter(r => r.percentual >= 80);
 
  // ── find -> primeira vaga com compatibilidade perfeita
  const vagaPerfeita = resultados.find(r => r.percentual === 100);
 
  // ── every -> verifica se HTML aparece em todas as vagas
  const htmlEmTodas = listaVagas.every(v => v.requisitos.includes("HTML"));
 
  // ── for -> listar resumo numerado
  console.log("\n Resumo de compatibilidade:");
  for (let i = 0; i < resultados.length; i++) {
    const r = resultados[i];
    console.log(`  ${i + 1}. ${r.vaga.empresa}: ${r.percentual}% ${r.classificacao}`);
  }
 
  // ── while -> exemplo adicional: conta quantas habilidades o candidato tem
  let contHabilidades = 0;
  let idx = 0;
  while (idx < perfil.habilidades.length) {
    contHabilidades++;
    idx++;
  }
  console.log(`\n  Total de habilidades do candidato: ${contHabilidades}`);
 
  // chama o callback com os resultados
  callback(resultados, melhor, vagasAltas, vagaPerfeita, htmlEmTodas);
}
