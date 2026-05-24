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
    this.empresa    = empresa;
    this.cargo      = cargo;
    this.requisitos = requisitos;
    this.descricao  = descricao;
  }

  exibirResumo() {
    console.log("\n" + this.empresa + " | " + this.cargo);
    console.log("Requisitos: " + this.requisitos.join(", "));
    console.log(this.descricao);
  }

  calcularCompatibilidade(habilidadesCandidato) {
    const possuidas = this.requisitos.filter(req =>
      habilidadesCandidato.includes(req)
    );
    return Math.round((possuidas.length / this.requisitos.length) * 100);
  }
}

// RF10: Heranca com VagaFrontEnd extends Vaga
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
// Lista de vagas (objetos literais por enquanto)
const vagas = [
  { empresa: "TechNova",   cargo: "Dev Front-End Junior",    requisitos: ["HTML","CSS","JavaScript","React","Git"]                  },
  { empresa: "WebCraft",   cargo: "Front-End Developer Jr",  requisitos: ["HTML","CSS","JavaScript","TypeScript","Git"]             },
  { empresa: "PixelSoft",  cargo: "Desenvolvedor Front-End", requisitos: ["HTML","CSS","JavaScript","Vue.js","Figma","Git"]         },
  { empresa: "DataBridge", cargo: "Dev Front Junior",        requisitos: ["HTML","CSS","JavaScript","Bootstrap","REST APIs"]        },
  { empresa: "CloudBase",  cargo: "Front-End Junior",        requisitos: ["HTML","CSS","JavaScript","React","TypeScript","Node.js"] }
];

console.log("Candidato:", candidato.nome);
console.log("Vagas encontradas:", vagas.length);

