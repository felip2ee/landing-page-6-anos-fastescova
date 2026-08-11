# AGENTS.md — Fast Escova 6 Anos

## Fonte de verdade

- Leia `plan.md` por completo antes de implementar ou revisar qualquer parte do projeto.
- Trate `plan.md` como a fonte principal de verdade para produto, conteúdo, direção de arte, motion e critérios de aceite.
- Siga `tipografia.md` para família tipográfica, pesos e composição editorial; use Inter como base, Playfair Display nos destaques e Aboreto pontualmente, conforme a identidade oficial verificada.
- Em caso de conflito entre código herdado, mockups e o plano, siga o plano, salvo instrução explícita do usuário.
- Não altere a mecânica promocional, textos essenciais, datas ou identidade da campanha por conta própria.

## Regras invariáveis da campanha

- Unidade: **Fast Escova — Palmas Avenida JK**.
- Instagram: **@fastescova.palmasavenidajk**.
- Prêmio: **1 ano de escova + hidratação grátis**.
- Mecânica: realizar um procedimento, publicar um Story relacionado à visita, marcar o perfil, apresentar o Story à equipe e receber `+1 bilhete`.
- Limite: no máximo **1 bilhete proveniente de Story por dia**. Vários Stories no mesmo dia não geram bilhetes adicionais.
- Uma nova participação em outro dia exige novo procedimento e repetição completa da mecânica.
- O contador de bilhetes da página é apenas demonstrativo; não implemente cadastro, autenticação ou controle real de bilhetes nesta versão.
- Nunca invente data de início, encerramento ou sorteio. Mantenha esses valores nulos ou como placeholders configuráveis até o usuário fornecê-los.
- Os números `12 meses`, `52 semanas` e `365 dias` representam a duração de um ano, não uma quantidade de procedimentos.

## Prioridades e escopo

- Execute primeiro os itens P0 definidos no plano. P1 melhora a experiência, mas não pode atrasar ou fragilizar P0. P2 é opcional.
- Preserve a narrativa: descoberta do prêmio → forma de participar → emissão do bilhete → acúmulo em dias diferentes → limite diário → desejo pelo prêmio → CTA.
- Use o bilhete como elemento visual condutor entre as seções, em vez de criar blocos independentes sem continuidade.
- Não transforme a experiência em uma landing page convencional com cards, grid de benefícios ou aparência de template.
- Não adicione backend, persistência ou integrações externas sem solicitação explícita.

## Stack e arquitetura

- Use React, TypeScript e Vite como base.
- Use Tailwind CSS para estilos e GSAP com ScrollTrigger para a narrativa controlada pelo scroll.
- Framer Motion, Lenis e Lucide podem ser usados quando contribuírem para a experiência sem duplicar responsabilidades.
- Prefira CSS 3D para o bilhete quando entregar o efeito com menor custo. Use Three.js ou React Three Fiber apenas quando houver ganho visual claro e mensurável.
- Evite componentes monolíticos. Separe as partes narrativas, o `Ticket3D`, o Story mockup, contador, timeline, regra diária, prêmio, CTA, regulamento e footer.
- Centralize dados editáveis da campanha em um único módulo tipado, incluindo Instagram, prêmio, aniversário e datas opcionais. Não replique essas informações em componentes.
- Centralize helpers de animação e respeite cleanup de timelines, ScrollTriggers, listeners e RAFs no desmontar dos componentes.

## Direção visual e conteúdo

- Priorize branco, off-white, preto, grafite, amarelo Fast Escova e dourado sutil.
- Use tipografia editorial de grande escala, espaço negativo, profundidade e contraste forte.
- A tecnologia deve aparecer nas interações e no acabamento, não em estética neon, cyberpunk ou gradiente roxo de startup.
- Evite glassmorphism excessivo, excesso de caixas arredondadas, emojis, vídeos pesados, carrosséis e efeitos sem função narrativa.
- Não use fotografias externas aleatórias. Mantenha assets locais organizados e use composições abstratas elegantes enquanto as fotos oficiais não existirem.
- Todo texto promocional visível deve permanecer coerente com a frase central: `FEZ. POSTOU. MARCOU. GANHOU. +1 BILHETE.`

## Motion e interação

- Faça o scroll conduzir a história por timelines, pinning, reveals, mudanças de escala, profundidade, background e posição do bilhete.
- Cada animação deve explicar a mecânica, guiar atenção ou valorizar o prêmio. Remova efeitos meramente decorativos que prejudiquem clareza ou desempenho.
- No desktop, cursor customizado, mouse tilt e botões magnéticos são opcionais e devem ter fallback seguro.
- No mobile, não dependa de hover. Vincule interações ao scroll ou toque e reduza partículas e efeitos pesados.
- A intro deve ser curta, sem loading artificial ou bloqueio desnecessário do conteúdo.
- Implemente uma experiência equivalente e compreensível com `prefers-reduced-motion: reduce`; o conteúdo não pode depender da animação para ficar disponível.

## Mobile, acessibilidade e performance

- Desenvolva primeiro para `390 × 844` e valide também `375 × 667`, `430 × 932`, `768 × 1024`, `1440 × 900` e `1920 × 1080`.
- Use `100svh` quando apropriado, considere safe areas e impeça overflow horizontal em todas as larguras.
- Mantenha headlines grandes sem quebras indesejadas e CTAs confortáveis para toque.
- Use HTML semântico, botões reais, navegação por teclado, foco visível, contraste adequado, labels acessíveis e textos alternativos relevantes.
- Priorize animações em `transform` e `opacity`, evite reflow, layout shift e listeners redundantes, e carregue recursos pesados apenas quando necessários.
- Otimize imagens locais, use dimensões explícitas e lazy loading fora do conteúdo crítico.
- Busque animações próximas de 60 FPS em dispositivos móveis reais; degrade efeitos antes de comprometer legibilidade ou interação.

## SEO e metadados

- Use o título `Fast Escova 6 Anos | Palmas Avenida JK`.
- Adicione uma descrição coerente com a campanha e prepare metadados Open Graph.
- Preserve `/og-fast-escova-6-anos.jpg` como placeholder até existir a arte final.

## Fluxo de trabalho

- Antes de editar, inspecione o estado do Git e preserve mudanças não relacionadas feitas pelo usuário.
- Faça alterações pequenas e focadas; não reformate arquivos fora do escopo.
- Não altere `plan.md` sem solicitação explícita.
- Use `npm run dev` para desenvolvimento, `npm run typecheck` para checagem de tipos, `npm run build` para o build de produção e `npm run preview` para visualizar o build.
- Use sempre os scripts definidos em `package.json`; não invente nomes de comandos. Se adicionar ou mudar scripts, documente-os no README e neste arquivo quando relevante.
- Ao adicionar dependências, justifique seu papel e evite bibliotecas que dupliquem uma capacidade já presente.
- Não versione artefatos de build, caches, segredos ou arquivos locais de ambiente.

## Validação obrigatória

- Rode os scripts existentes de lint, checagem de tipos, testes e build antes de concluir. Se ainda não existirem, informe claramente o que não pôde ser validado.
- Teste a experiência por teclado e com movimento reduzido.
- Verifique todas as dimensões de viewport previstas no plano e confirme ausência de overflow horizontal.
- Confirme que a promoção pode ser entendida em poucos segundos e que a regra de um bilhete por dia não admite interpretação ambígua.
- Confirme que o Instagram, o prêmio e a unidade estão corretos e que nenhuma data foi inventada.
- Verifique que o conteúdo permanece acessível se JavaScript de animação falhar ou estiver reduzido.
- Revise performance e fluidez, especialmente nas seções fixadas e nas transições do `Ticket3D`.
- Ao finalizar, relate arquivos alterados, verificações executadas e qualquer limitação ou item ainda não validado.
