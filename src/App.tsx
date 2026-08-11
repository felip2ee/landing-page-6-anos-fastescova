import { useLayoutEffect, useRef } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  AtSign,
  Check,
  ChevronRight,
  MapPin,
  Minus,
  Plus,
  Ticket,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Intro } from "./components/Intro";
import { Ticket3D } from "./components/Ticket3D";
import { campaign, participationSteps, rules } from "./lib/constants";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const context = gsap.context(() => {
      gsap.from(".hero__eyebrow, .hero__subline, .hero__cta", {
        y: 48,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        delay: 1.25,
        ease: "power3.out",
      });

      gsap.from(".hero__line", {
        yPercent: 105,
        opacity: 0,
        clipPath: "inset(0 0 100% 0)",
        letterSpacing: "0.01em",
        duration: 1.15,
        stagger: 0.12,
        delay: 1.25,
        ease: "power4.out",
      });

      gsap.from(".hero-ticket-wrap", {
        y: 100,
        rotation: -9,
        opacity: 0,
        duration: 1.25,
        delay: 1.45,
        ease: "power3.out",
      });

      gsap.to(".hero-ticket-wrap", {
        yPercent: 30,
        rotation: 7,
        scale: 0.9,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {
        gsap.from(element, {
          y: 64,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".step-scene").forEach((scene) => {
        const number = scene.querySelector(".step-scene__number");
        const content = scene.querySelector(".step-scene__content");

        gsap.from(number, {
          scale: 0.65,
          opacity: 0.08,
          scrollTrigger: {
            trigger: scene,
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
        });

        gsap.from(content, {
          y: 56,
          opacity: 0,
          scrollTrigger: {
            trigger: scene,
            start: "top 65%",
            end: "top 35%",
            scrub: 1,
          },
        });
      });

      gsap.fromTo(
        ".story__tag",
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".story-phone",
            start: "top 70%",
            end: "top 38%",
            scrub: 1,
          },
        },
      );

      const counter = { value: 0 };
      gsap.to(counter, {
        value: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 55%",
          end: "bottom 60%",
          scrub: true,
        },
        onUpdate: () => {
          const output = document.querySelector<HTMLElement>(".counter__value");
          if (output) output.textContent = String(Math.round(counter.value)).padStart(2, "0");
        },
      });

      gsap.fromTo(
        ".timeline__progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline__days",
            start: "top 70%",
            end: "bottom 50%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".prize__ticket",
        { y: 120, rotateZ: -8, scale: 0.72 },
        {
          y: -20,
          rotateZ: 5,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: ".prize",
            start: "top 75%",
            end: "bottom 30%",
            scrub: 1,
          },
        },
      );

      gsap.utils.toArray<HTMLElement>(".numbers__item").forEach((item) => {
        gsap.from(item, {
          opacity: 0.1,
          scale: 0.88,
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            end: "top 42%",
            scrub: 1,
          },
        });
      });
    }, appRef);

    return () => context.revert();
  }, []);

  return (
    <div ref={appRef} className="app-shell">
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <Intro />

      <header className="site-header" aria-label="Cabeçalho principal">
        <a className="brand" href="#inicio" aria-label="Fast Escova — início">
          <img
            src="/assets/logo-fast-escova-palmas.png"
            alt="Fast Escova Palmas Avenida JK"
            width="1040"
            height="540"
            fetchPriority="high"
          />
        </a>
        <span className="site-header__anniversary">06 ANOS · PALMAS JK</span>
        <a
          className="header-link"
          href={campaign.instagramUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Abrir Instagram ${campaign.instagram}`}
        >
          <AtSign size={16} aria-hidden="true" />
          <span>INSTAGRAM</span>
        </a>
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero__grain" aria-hidden="true" />
          <div className="hero__copy">
            <p className="hero__eyebrow">A MAIOR ESCOVARIA DA AMÉRICA LATINA</p>
            <h1 id="hero-title">
              <span className="hero__line hero__line--number">6 ANOS</span>
              <span className="hero__line">O PRESENTE</span>
              <span className="hero__line hero__line--indent">É PARA VOCÊ.</span>
            </h1>
            <p className="hero__subline">
              1 ano de escova <span>+</span> hidratação grátis
            </p>
            <a className="hero__cta" href="#como-participar">
              Descubra como participar <ArrowDown size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-ticket-wrap">
            <Ticket3D />
          </div>
          <span className="hero__edition" aria-hidden="true">EDIÇÃO COMEMORATIVA · 6 ANOS</span>
        </section>

        <section className="manifesto section-pad" aria-labelledby="manifesto-title">
          <p className="section-label reveal">UMA VISITA. UM STORY. UMA CHANCE.</p>
          <h2 id="manifesto-title" className="display-copy reveal">
            FEZ.<br />
            POSTOU.<br />
            MARCOU.<br />
            <span>GANHOU.</span>
          </h2>
          <div className="manifesto__ticket-line reveal">
            <Ticket aria-hidden="true" />
            <strong>+1 BILHETE</strong>
          </div>
        </section>

        <section className="steps section-pad" id="como-participar" aria-labelledby="steps-title">
          <div className="section-heading reveal">
            <p className="section-label">COMO PARTICIPAR</p>
            <h2 id="steps-title">PARTICIPAR<br />É MUITO FÁCIL.</h2>
          </div>

          <div className="steps__list">
            {participationSteps.map((step) => (
              <article className="step-scene" key={step.number}>
                <span className="step-scene__number" aria-hidden="true">{step.number}</span>
                <div className="step-scene__content">
                  <p>{step.eyebrow}</p>
                  <h3>{step.title}</h3>
                  <span>{step.copy}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="story section-pad" aria-labelledby="story-title">
          <div className="story__copy reveal">
            <p className="section-label">PASSO 02, DE PERTO</p>
            <h2 id="story-title">MOSTRE<br />SEU MOMENTO.</h2>
            <p>
              Publique um Story relacionado à sua experiência e marque o perfil da unidade.
            </p>
          </div>
          <div className="story-phone reveal" aria-label="Exemplo ilustrativo de um Story marcando a Fast Escova">
            <div className="story-phone__top">
              <div className="story-phone__progress"><span /></div>
              <div className="story-phone__profile">
                <span className="story-phone__avatar">FE</span>
                <span>seu.story</span>
              </div>
            </div>
            <div className="story-phone__visual" aria-hidden="true">
              <span className="story-phone__arc story-phone__arc--one" />
              <span className="story-phone__arc story-phone__arc--two" />
              <strong>GOOD HAIR.<br />GOOD DAY.</strong>
            </div>
            <span className="story__tag">{campaign.instagram}</span>
            <span className="story-phone__caption">6 anos de beleza em movimento.</span>
          </div>
        </section>

        <section className="timeline section-pad" aria-labelledby="timeline-title">
          <div className="timeline__intro reveal">
            <p className="section-label">SUAS CHANCES</p>
            <div className="counter" aria-label="Contador demonstrativo de bilhetes">
              <Ticket size={42} aria-hidden="true" />
              <span className="counter__value">00</span>
            </div>
            <h2 id="timeline-title">QUANTO MAIS<br />VOCÊ PARTICIPA,<br /><span>MAIS CHANCES TEM.</span></h2>
            <p className="timeline__note">Contador meramente ilustrativo.</p>
          </div>

          <div className="timeline__days">
            <span className="timeline__rail" aria-hidden="true"><span className="timeline__progress" /></span>
            {["01", "02", "03"].map((day) => (
              <article className="timeline-day reveal" key={day}>
                <div className="timeline-day__marker" aria-hidden="true">{day}</div>
                <div>
                  <p>DIA {day}</p>
                  <ul>
                    <li>Procedimento <Check size={16} aria-hidden="true" /></li>
                    <li>Story <Check size={16} aria-hidden="true" /></li>
                    <li>Marcação <Check size={16} aria-hidden="true" /></li>
                  </ul>
                </div>
                <div className="timeline-day__result">
                  <Ticket aria-hidden="true" />
                  <strong>+1 BILHETE</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="daily-limit section-pad" aria-labelledby="limit-title">
          <div className="daily-limit__headline reveal">
            <p className="section-label">REGRA IMPORTANTE</p>
            <h2 id="limit-title"><span>1 DIA</span><b>=</b>ATÉ 1 BILHETE</h2>
            <p>É válido apenas 1 Story por dia para geração de bilhete.</p>
          </div>
          <div className="daily-limit__board reveal">
            <div className="day-column">
              <p>HOJE</p>
              <div><span>STORY 01</span><Check aria-label="Válido" /><ChevronRight aria-hidden="true" /><Ticket aria-label="Gera um bilhete" /></div>
              <div className="day-column__muted"><span>STORY 02</span><Check aria-label="Publicado" /><ChevronRight aria-hidden="true" /><Minus aria-label="Não gera outro bilhete" /></div>
              <div className="day-column__muted"><span>STORY 03</span><Check aria-label="Publicado" /><ChevronRight aria-hidden="true" /><Minus aria-label="Não gera outro bilhete" /></div>
            </div>
            <div className="day-column day-column--tomorrow">
              <p>AMANHÃ</p>
              <div><span>NOVO PROCEDIMENTO + NOVO STORY</span><Check aria-label="Válido" /><ChevronRight aria-hidden="true" /><Ticket aria-label="Gera um novo bilhete" /></div>
            </div>
          </div>
        </section>

        <section className="prize section-pad" aria-labelledby="prize-title">
          <div className="prize__halo" aria-hidden="true" />
          <div className="prize__copy reveal">
            <p className="section-label">O GRANDE PRESENTE</p>
            <h2 id="prize-title">E SE O<br />PRÓXIMO BILHETE<br /><span>FOR O SEU?</span></h2>
          </div>
          <div className="prize__ticket">
            <Ticket3D compact />
          </div>
          <div className="prize__reveal reveal">
            <span>1 ANO</span>
            <strong>DE ESCOVA<br />+ HIDRATAÇÃO</strong>
            <b>GRÁTIS.</b>
          </div>
        </section>

        <section className="numbers section-pad" aria-label="Um ano em números">
          {[
            ["12", "MESES"],
            ["52", "SEMANAS"],
            ["365", "DIAS"],
            ["1", "VENCEDORA"],
          ].map(([number, label]) => (
            <div className="numbers__item" key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
          <p className="numbers__ending reveal">E PODE<br />SER VOCÊ.</p>
        </section>

        <section className="final-cta section-pad" aria-labelledby="cta-title">
          <div className="final-cta__tickets" aria-hidden="true">
            <Ticket3D compact />
            <Ticket3D compact />
          </div>
          <div className="final-cta__content reveal">
            <p className="section-label">SUA CHANCE COMEÇA AQUI</p>
            <h2 id="cta-title">SUA PRÓXIMA VISITA<br />PODE VALER<br /><span>UM ANO DE FAST.</span></h2>
            <p>
              Faça seu procedimento. Poste seu Story.<br />Marque <strong>{campaign.instagram}</strong> e ganhe sua chance.
            </p>
            <a className="cta-button" href={campaign.instagramUrl} target="_blank" rel="noreferrer">
              <span>QUERO PARTICIPAR</span>
              <Ticket aria-hidden="true" />
            </a>
          </div>
        </section>

        <section className="rules section-pad" aria-labelledby="rules-title">
          <div className="rules__heading reveal">
            <p className="section-label">LEIA COM ATENÇÃO</p>
            <h2 id="rules-title">REGULAMENTO<br />DA PROMOÇÃO</h2>
          </div>
          <details className="rules__accordion reveal">
            <summary>
              <span>VER REGULAMENTO</span>
              <Plus aria-hidden="true" />
            </summary>
            <div className="rules__body">
              <ol>
                {rules.map((rule) => <li key={rule}>{rule}</li>)}
              </ol>
              <dl className="rules__dates">
                <div><dt>Data de início</dt><dd>A definir</dd></div>
                <div><dt>Data de encerramento</dt><dd>A definir</dd></div>
                <div><dt>Data do sorteio</dt><dd>A definir</dd></div>
                <div><dt>Regras complementares</dt><dd>A definir</dd></div>
              </dl>
            </div>
          </details>
        </section>
      </main>

      <footer className="footer">
        <div className="brand brand--footer">
          <img
            src="/assets/logo-fast-escova-palmas.png"
            alt="Fast Escova Palmas Avenida JK"
            width="1040"
            height="540"
            loading="lazy"
          />
        </div>
        <div className="footer__location"><MapPin size={16} aria-hidden="true" /><span>PALMAS · AVENIDA JK</span></div>
        <a href={campaign.instagramUrl} target="_blank" rel="noreferrer">
          {campaign.instagram}<ArrowUpRight size={16} aria-hidden="true" />
        </a>
        <small>EXPERIÊNCIA COMEMORATIVA · 6 ANOS</small>
        <div className="footer__credits">
          <span>BY:</span>
          <a
            href="https://www.instagram.com/novadigital.br/"
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da Nova Digital"
          >
            @novadigital.br
          </a>
          <span>· TODOS OS DIREITOS RESERVADOS.</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
