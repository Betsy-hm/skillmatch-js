// SkillMatch JS
// Projeto em desenvolvimento

// Perfil do candidato
const candidato = {
  nome: "Anmey Manriquez",
  email: "anmey@email.com",
  ativo: true,
  experiencia: 11,
  habilidades: ["HTML", "CSS", "JavaScript", "Lógica de Programação", "Git"]
};

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