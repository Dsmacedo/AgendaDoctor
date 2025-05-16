const cardsData = [
  {
    title: "Gerenciamento Médico",
    category: "Categoria",
    image: "/assets/medico_card.jpg",
    links: [
      { label: "Cad. de Médico", href: "/cadastrodemedico" },
      { label: "Cad. de Especialidade", href: "/cadastroespecialidade" },
      { label: "Cad. de Disponibilidade", href: "/cadastrodisponibilidade" },
    ],
  },
  {
    title: "Gerenciamento Unidades",
    category: "Categoria",
    image: "/assets/unidade_saude.png",
    links: [
      { label: "Cad. de Unidade", href: "/cadastrodeunidade" },
      { label: "Postos Cadastrados", href: "#" },
    ],
  },
  {
    title: "Painel Usuário",
    category: "Categoria",
    image: "/assets/panel_usuario.jpg",
    links: [
      { label: "Consultar e Agendar", href: "/consultadisponibilidade" },
      { label: "Agendamento marcado", href: "#" },
    ],
  },
  {
    title: "Relatório",
    category: "Categoria",
    image: "/assets/relatoriopanel.jpg",
    links: [
      { label: "Consultas agendadas", href: "#" },
      { label: "", href: "#" },
    ],
  },
];

export default cardsData;
