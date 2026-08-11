export const campaign = {
  instagram: "@fastescova.palmasavenidajk",
  instagramUrl: "https://www.instagram.com/fastescova.palmasavenidajk/",
  unit: "Fast Escova — Palmas Avenida JK",
  prize: "1 ano de escova + hidratação grátis",
  anniversary: 6,
  startDate: null,
  endDate: null,
  drawDate: null,
} as const;

export const participationSteps = [
  {
    number: "01",
    eyebrow: "Primeiro passo",
    title: "VENHA PARA A FAST.",
    copy: "Realize qualquer procedimento na Fast Escova Palmas Avenida JK.",
  },
  {
    number: "02",
    eyebrow: "Compartilhe",
    title: "POSTE SEU STORY.",
    copy: `Mostre sua experiência e marque ${campaign.instagram}.`,
  },
  {
    number: "03",
    eyebrow: "Mostre para a equipe",
    title: "GANHE +1 BILHETE.",
    copy: "Apresente o Story marcado e receba mais uma chance de ganhar.",
  },
] as const;

export const rules = [
  "Promoção comemorativa de 6 anos da Fast Escova Palmas Avenida JK.",
  "Para participar é necessário realizar qualquer procedimento na unidade.",
  "A cliente deverá publicar um Story relacionado à visita.",
  `É obrigatório marcar ${campaign.instagram}.`,
  "O Story deverá ser apresentado à equipe.",
  "Cada participação válida gera 1 bilhete.",
  "Existe limite máximo de 1 bilhete proveniente de Story por dia.",
  "A cliente poderá participar novamente em outro dia, realizando novo procedimento e repetindo a mecânica.",
] as const;

