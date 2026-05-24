// SkillMatch JS
// Projeto em desenvolvimento






// ── TIPOS DE DADOS: strings, números, arrays, objetos, booleanos ─

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
    ["HTML", "CSS", "JavaScript", "React", "Git"],
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


