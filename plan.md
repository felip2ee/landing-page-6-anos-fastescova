# PLAN.md — Fast Escova 6 Anos

## 1. Visão Geral

Desenvolver uma experiência web promocional premium, moderna, altamente animada e mobile-first para comemorar os **6 anos da Fast Escova — Palmas Avenida JK**.

A experiência divulgará o sorteio de:

> **1 ANO DE ESCOVA + HIDRATAÇÃO GRÁTIS**

Não desenvolver uma landing page tradicional.

O projeto deve funcionar como uma **experiência digital interativa**, utilizando storytelling através do scroll, motion design, profundidade, microinterações e elementos tridimensionais.

Referências conceituais:

* Apple
* Awwwards
* campanhas digitais premium de beauty brands
* experiências web cinematográficas
* identidade visual Fast Escova

Conceito:

**BEAUTY + PREMIUM + MOTION + TECNOLOGIA WEB**

---

# 2. Objetivo

A página deve:

1. Apresentar a promoção de 6 anos.
2. Gerar desejo pelo prêmio.
3. Explicar rapidamente como participar.
4. Demonstrar visualmente como os bilhetes são acumulados.
5. Deixar extremamente clara a regra de 1 bilhete por dia.
6. Incentivar visitas à Fast Escova Palmas Avenida JK.
7. Incentivar Stories marcando:

**@fastescova.palmasavenidajk**

O usuário deve entender a mecânica mesmo sem ler todo o conteúdo.

Mensagem central:

> **FEZ → POSTOU → MARCOU → GANHOU +1 BILHETE**

---

# 3. Mecânica da Promoção

Para participar:

### Passo 01

A cliente vai até a Fast Escova Palmas Avenida JK.

### Passo 02

Realiza qualquer procedimento.

### Passo 03

Publica um Story relacionado à experiência.

### Passo 04

Marca obrigatoriamente:

**@fastescova.palmasavenidajk**

### Passo 05

Apresenta o Story para a equipe.

### Passo 06

Recebe:

**+1 BILHETE**

---

# 4. Regra de Participação

Existe um limite de:

> **1 bilhete proveniente de Story por dia.**

Mesmo que sejam publicados vários Stories no mesmo dia, será concedido no máximo 1 bilhete naquele dia.

Em outro dia, a cliente poderá participar novamente, desde que:

* realize um novo procedimento;
* publique um novo Story;
* marque @fastescova.palmasavenidajk;
* apresente o Story à equipe.

Exemplo:

```text
DIA 01
Procedimento ✓
Story ✓
Marcação ✓
+1 BILHETE 🎟️

DIA 02
Procedimento ✓
Story ✓
Marcação ✓
+1 BILHETE 🎟️

DIA 03
Procedimento ✓
Story ✓
Marcação ✓
+1 BILHETE 🎟️
```

---

# 5. Stack

Preferencialmente:

* React
* TypeScript
* Vite
* Tailwind CSS
* GSAP
* GSAP ScrollTrigger
* Framer Motion
* Lenis
* Lucide Icons

Quando agregar valor:

* Three.js
* React Three Fiber

Não utilizar Three.js apenas por estética técnica.

Se CSS 3D entregar o mesmo resultado com melhor performance, preferir CSS.

---

# 6. Arquitetura

Estruturar componentes aproximadamente como:

```text
src/
├── components/
│   ├── Intro/
│   ├── Hero/
│   ├── Ticket3D/
│   ├── HowItWorks/
│   ├── StepSection/
│   ├── StoryMockup/
│   ├── TicketCounter/
│   ├── ParticipationTimeline/
│   ├── DailyLimit/
│   ├── PrizeReveal/
│   ├── NumbersSection/
│   ├── FinalCTA/
│   ├── Rules/
│   └── Footer/
│
├── hooks/
│   ├── useSmoothScroll.ts
│   ├── useReducedMotion.ts
│   └── useIsMobile.ts
│
├── lib/
│   ├── animations.ts
│   └── constants.ts
│
├── assets/
├── styles/
└── App.tsx
```

Evitar componente monolítico.

---

# 7. Design System

## Cores

Priorizar:

* branco
* off-white
* preto
* grafite
* amarelo Fast Escova
* dourado sutil

Evitar:

* roxo de startup
* neon
* cyberpunk
* excesso de rosa

A tecnologia deve ser percebida através das interações, não através de uma estética futurista genérica.

---

# 8. Tipografia

Utilizar tipografia moderna, elegante e de grande impacto.

Headlines extremamente grandes.

Explorar:

* uppercase
* diferenças fortes de escala
* bastante espaço negativo
* números gigantes
* composição editorial

Exemplo:

```text
6
ANOS

O PRESENTE
É PARA
VOCÊ.
```

E:

```text
1 ANO

DE ESCOVA
+
HIDRATAÇÃO

GRÁTIS
```

---

# 9. Intro

Criar uma introdução curta de aproximadamente 1,5–2 segundos.

Sequência:

```text
FAST ESCOVA
PALMAS AVENIDA JK
```

Surge:

```text
6
```

Depois:

```text
ANOS
```

O número cresce e inicia a transição para a Hero.

Não criar loading artificial.

---

# 10. Hero

Altura aproximada:

```css
min-height: 100svh;
```

Conteúdo:

```text
FAST ESCOVA

6 ANOS

O PRESENTE
É PARA VOCÊ.
```

Revelar progressivamente:

```text
1 ANO

DE ESCOVA + HIDRATAÇÃO
GRÁTIS
```

CTA:

```text
DESCUBRA COMO PARTICIPAR ↓
```

Utilizar:

* text reveal
* mask animation
* parallax
* blur transitions
* elementos dourados sutis
* partículas discretas
* profundidade

Desktop:

elementos podem reagir suavemente ao cursor.

Mobile:

movimentos baseados no scroll.

---

# 11. Ticket3D

O bilhete será o principal elemento visual da campanha.

Criar um componente reutilizável:

```tsx
<Ticket3D />
```

Conteúdo:

```text
FAST ESCOVA

6 ANOS

1 CHANCE

1 ANO DE
ESCOVA + HIDRATAÇÃO

PALMAS AVENIDA JK
```

Visual:

* branco/off-white
* detalhes dourados/amarelos
* tipografia preta
* acabamento premium
* perfuração visual
* número de série decorativo
* pequenos detalhes de segurança visual

Desktop:

* mouse tilt
* perspective
* light reflection

Mobile:

* transformação ligada ao scroll

O bilhete deve reaparecer durante diferentes partes da narrativa.

---

# 12. Scroll Storytelling

O scroll deve controlar a história.

Evitar simplesmente empilhar seções.

Utilizar:

```javascript
GSAP + ScrollTrigger
```

para:

* pin sections
* controlar timelines
* mover o bilhete
* revelar textos
* modificar backgrounds
* atualizar contadores
* controlar escala
* controlar profundidade

O usuário deve sentir que está avançando pela campanha.

---

# 13. Como Participar

Headline:

```text
PARTICIPAR
É MUITO FÁCIL.
```

Criar três momentos cinematográficos.

Não utilizar três cards comuns.

---

# 14. Passo 01

Número:

```text
01
```

Headline:

```text
VENHA PARA A FAST.
```

Texto:

> Realize qualquer procedimento na Fast Escova Palmas Avenida JK.

O número 01 deve ocupar grande parte do background.

Criar animação de entrada e saída conforme scroll.

---

# 15. Passo 02

Número:

```text
02
```

Headline:

```text
POSTE SEU STORY.
```

Criar um mockup moderno de Story.

Representar uma experiência na Fast.

Animar a marcação:

```text
@fastescova.palmasavenidajk
```

A marcação deve surgir como se estivesse sendo adicionada ao Story.

---

# 16. Passo 03

Número:

```text
03
```

Headline:

```text
GANHE
+1 BILHETE.
```

Criar uma animação satisfatória de emissão do bilhete.

Possíveis efeitos:

* ticket reveal
* pequeno flash
* partículas douradas
* spring
* impressão digital
* mudança do contador

Não exagerar.

---

# 17. Ticket Counter

Durante a demonstração da mecânica, mostrar:

```text
SUAS CHANCES

🎟 0
```

Conforme o usuário avança:

```text
0 → 1 → 2 → 3
```

Cada incremento deve possuir uma pequena animação.

Este contador é apenas demonstrativo.

Não implementar sistema real de bilhetes nesta versão.

---

# 18. Timeline de Participação

Headline:

```text
QUANTO MAIS
VOCÊ PARTICIPA,

MAIS CHANCES
TEM.
```

Criar timeline vertical controlada pelo scroll.

### DIA 01

```text
PROCEDIMENTO ✓
STORY ✓
MARCAÇÃO ✓

+1 BILHETE
```

Bilhete entra em uma urna/carteira digital.

### DIA 02

Repetir processo.

Contador:

```text
02
```

### DIA 03

Repetir.

Contador:

```text
03
```

A animação deve comunicar imediatamente que diferentes dias podem gerar novos bilhetes.

---

# 19. Regra de 1 Bilhete por Dia

Criar uma seção específica.

Headline:

```text
1 DIA
=
ATÉ 1 BILHETE
```

Representação:

```text
HOJE

STORY 01 ✓ → 🎟
STORY 02 ✓ → —
STORY 03 ✓ → —

AMANHÃ

NOVO PROCEDIMENTO
+
NOVO STORY ✓

→ 🎟
```

Texto:

> É válido apenas 1 Story por dia para geração de bilhete.

A regra deve ficar visualmente impossível de interpretar errado.

---

# 20. Prize Reveal

Criar uma grande transição visual.

Background:

```text
OFF-WHITE → GRAFITE/PRETO
```

Bilhete aparece sozinho no centro.

Headline:

```text
E SE O
PRÓXIMO BILHETE

FOR O SEU?
```

O bilhete deve:

1. flutuar;
2. girar lentamente;
3. ganhar profundidade;
4. aproximar-se da câmera conforme scroll.

Então revelar:

```text
1 ANO

DE ESCOVA
+
HIDRATAÇÃO

GRÁTIS.
```

Essa deve ser uma das seções visualmente mais fortes do projeto.

---

# 21. Numbers Section

Criar sequência tipográfica:

```text
12
MESES
```

Scroll:

```text
52
SEMANAS
```

Scroll:

```text
365
DIAS
```

Scroll:

```text
1
VENCEDORA
```

Final:

```text
E PODE
SER VOCÊ.
```

Não associar esses números a quantidade de procedimentos.

São apenas uma representação temporal de um ano.

---

# 22. Final CTA

Background volta gradualmente ao claro.

Bilhetes aparecem discretamente em profundidade.

Headline:

```text
SUA PRÓXIMA VISITA
PODE VALER

UM ANO
DE FAST.
```

Texto:

```text
Faça seu procedimento.
Poste seu Story.
Marque:

@fastescova.palmasavenidajk

E ganhe sua chance.
```

CTA:

```text
QUERO PARTICIPAR 🎟
```

Adicionar magnetic interaction no desktop.

Mobile:

feedback visual ao toque.

---

# 23. Regulamento

Criar accordion minimalista.

Título:

```text
REGULAMENTO DA PROMOÇÃO
```

Informações:

* Promoção comemorativa de 6 anos da Fast Escova Palmas Avenida JK.
* Para participar é necessário realizar qualquer procedimento na unidade.
* A cliente deverá publicar um Story relacionado à visita.
* É obrigatório marcar @fastescova.palmasavenidajk.
* O Story deverá ser apresentado à equipe.
* Cada participação válida gera 1 bilhete.
* Existe limite máximo de 1 bilhete proveniente de Story por dia.
* A cliente poderá participar novamente em outro dia realizando novo procedimento e repetindo a mecânica.

Criar campos configuráveis para:

```text
[DATA DE INÍCIO]

[DATA DE ENCERRAMENTO]

[DATA DO SORTEIO]

[REGRAS COMPLEMENTARES]
```

Não inventar datas.

---

# 24. Microinterações

Implementar de forma estratégica:

* smooth scrolling
* magnetic buttons
* mouse tilt
* text reveal
* mask reveal
* parallax
* sticky sections
* pinned sections
* counters
* spring animations
* blur transitions
* stagger
* scroll progress
* background transitions
* ticket physics
* cursor interaction

Regra:

> Motion design premium > quantidade de efeitos.

---

# 25. Cursor

Somente desktop.

Criar cursor personalizado minimalista.

Em elementos interativos:

```text
VER
```

ou:

```text
+1
```

No CTA relacionado ao bilhete, o cursor pode assumir formato ou referência visual de ticket.

Não modificar cursor no mobile.

---

# 26. Performance

Performance é requisito obrigatório.

Objetivo:

* animações próximas de 60 FPS;
* evitar layout shifts;
* otimizar imagens;
* lazy loading;
* reduzir listeners;
* utilizar transform e opacity sempre que possível;
* evitar animações de propriedades que provoquem layout/reflow;
* reduzir partículas no mobile;
* carregar Three.js apenas quando necessário.

Implementar:

```css
@media (prefers-reduced-motion: reduce)
```

para acessibilidade.

---

# 27. Mobile First

Viewport principal de desenvolvimento:

```text
390 × 844
```

Depois adaptar para:

```text
768px
1024px
1440px+
```

A experiência mobile é prioridade.

Não criar primeiro para desktop e simplesmente empilhar tudo no celular.

No mobile:

* textos continuam grandes;
* animações continuam presentes;
* não depender de hover;
* reduzir efeitos pesados;
* utilizar `100svh`;
* considerar safe areas;
* CTAs grandes;
* evitar horizontal overflow.

---

# 28. Responsividade

Testar obrigatoriamente:

```text
375 × 667
390 × 844
430 × 932
768 × 1024
1440 × 900
1920 × 1080
```

Nenhum headline pode quebrar de maneira indesejada.

Nenhuma animação pode gerar overflow horizontal.

---

# 29. Acessibilidade

Implementar:

* HTML semântico
* aria-labels quando necessários
* contraste adequado
* navegação por teclado
* focus states
* reduced motion
* textos alternativos
* botões semanticamente corretos

Motion não pode impedir acesso ao conteúdo.

---

# 30. SEO / Social

Configurar:

```html
<title>Fast Escova 6 Anos | Palmas Avenida JK</title>
```

Criar description apropriada para a campanha.

Preparar Open Graph.

Criar placeholder para imagem:

```text
/og-fast-escova-6-anos.jpg
```

---

# 31. Configuração Central

Não espalhar informações da campanha diretamente pelos componentes.

Criar algo como:

```typescript
export const campaign = {
  instagram: "@fastescova.palmasavenidajk",
  prize: "1 ano de escova + hidratação grátis",
  anniversary: 6,

  startDate: null,
  endDate: null,
  drawDate: null,
};
```

Assim as informações poderão ser alteradas posteriormente sem modificar diversos componentes.

---

# 32. Imagens

Criar placeholders organizados para posteriormente substituirmos por fotografias reais da Fast Escova.

Exemplo:

```text
/assets/fast-hero.webp
/assets/fast-experience-01.webp
/assets/fast-experience-02.webp
/assets/fast-hair.webp
```

Não depender de imagens externas aleatórias.

Se fotografias ainda não estiverem disponíveis, utilizar composições abstratas elegantes até que os assets finais sejam enviados.

---

# 33. O Que Evitar

NÃO criar:

* landing page SaaS;
* cards genéricos;
* grid de benefícios;
* gradiente roxo;
* estética cyberpunk;
* glassmorphism em excesso;
* dezenas de caixas arredondadas;
* animações sem propósito;
* textos excessivamente pequenos;
* excesso de emojis;
* carrosséis desnecessários;
* vídeos pesados em background;
* interface que pareça template;
* aparência genérica de projeto gerado por IA.

---

# 34. Princípio Criativo

Cada animação deve possuir uma função narrativa.

O usuário deve sentir:

```text
DESCOBRI O PRÊMIO
       ↓
ENTENDI COMO PARTICIPAR
       ↓
GANHEI UM BILHETE
       ↓
ENTENDI QUE POSSO ACUMULAR
       ↓
ENTENDI O LIMITE DIÁRIO
       ↓
DESEJEI O PRÊMIO
       ↓
QUERO PARTICIPAR
```

---

# 35. Elemento Condutor

O **bilhete** deve conectar toda a experiência.

Ele aparece:

1. na Hero;
2. durante a explicação;
3. quando o Story é validado;
4. no contador;
5. entrando na urna;
6. na seção do prêmio;
7. no CTA final.

Não tratar cada seção como uma página independente.

O bilhete deve literalmente viajar pela narrativa quando tecnicamente possível.

---

# 36. Frase Central da Experiência

A comunicação inteira deve poder ser resumida em:

```text
FEZ.
POSTOU.
MARCOU.
GANHOU.

+1 BILHETE 🎟
```

---

# 37. Prioridades de Desenvolvimento

## P0 — Obrigatório

* responsividade mobile;
* Hero;
* mecânica da promoção;
* Ticket3D;
* Story Mockup;
* timeline;
* limite diário;
* Prize Reveal;
* CTA;
* regulamento;
* GSAP ScrollTrigger;
* performance.

## P1 — Importante

* smooth scrolling;
* ticket counter;
* cursor personalizado;
* parallax;
* magnetic buttons;
* partículas;
* transições cinematográficas.

## P2 — Enhancement

* Three.js;
* física avançada;
* iluminação dinâmica;
* shaders;
* efeitos adicionais.

P2 nunca deve prejudicar P0.

---

# 38. Critérios de Aceite

O projeto estará pronto quando:

* funcionar perfeitamente no celular;
* a promoção puder ser entendida em poucos segundos;
* as animações estiverem fluidas;
* o bilhete funcionar como elemento narrativo;
* o scroll contar uma história;
* não parecer um template;
* as regras estiverem claras;
* o Instagram estiver correto;
* nenhuma data tiver sido inventada;
* o usuário entender o limite de 1 bilhete por dia;
* o prêmio estiver extremamente valorizado;
* desktop e mobile estiverem responsivos;
* a página possuir identidade visual coerente do início ao fim.

---

# 39. Resultado Final Esperado

O resultado não deve parecer:

> "uma landing page de sorteio."

Deve parecer:

> **"A EXPERIÊNCIA DIGITAL DOS 6 ANOS DA FAST ESCOVA."**

Queremos que tecnologia web, motion design e direção de arte transformem uma promoção simples em uma experiência memorável.

O usuário deve querer continuar rolando apenas para descobrir o que acontecerá na próxima interação.

Priorizar:

**STORYTELLING → MOTION → TIPOGRAFIA → PROFUNDIDADE → INTERATIVIDADE → PERFORMANCE**

Não apenas descrever as animações.

**Implementá-las de fato no frontend.**
