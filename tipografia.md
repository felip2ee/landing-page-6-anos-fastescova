# 8. Tipografia — Seguir identidade oficial Fast Escova

A tipografia do projeto deve seguir **a mesma família tipográfica utilizada atualmente no site oficial da Fast Escova**.

Referência visual oficial:

https://fastescova.com.br/

## Regra principal

Não escolher uma fonte genérica apenas por possuir aparência semelhante.

Antes de implementar:

1. Inspecionar os estilos do site oficial da Fast Escova.
2. Identificar a família tipográfica utilizada nos títulos, textos e elementos de destaque.
3. Verificar pesos (`font-weight`) utilizados pela marca.
4. Reproduzir a mesma hierarquia tipográfica no projeto.
5. Caso a fonte esteja disponível via Google Fonts ou outro CDN oficial permitido, carregá-la corretamente.
6. Caso seja uma fonte proprietária ou não seja possível utilizá-la diretamente, NÃO copiar arquivos de fonte do site. Nesse caso, utilizar uma alternativa web-safe visualmente próxima até que os arquivos/licença oficiais sejam fornecidos.

## Direção tipográfica

Mesmo utilizando a tipografia oficial, a campanha deve explorar a fonte de maneira muito mais impactante e editorial.

Usar:

* headlines gigantes;
* números em escala extrema;
* pesos fortes;
* bastante espaço negativo;
* animações tipográficas;
* mudanças de escala durante o scroll;
* text reveal;
* mask reveal;
* tracking controlado;
* composição vertical e horizontal;
* palavras ocupando praticamente toda a viewport.

Exemplo:

6

ANOS

O PRESENTE
É PARA
VOCÊ.

---

Na apresentação do prêmio:

1 ANO

DE ESCOVA
+
HIDRATAÇÃO

GRÁTIS

O texto "1 ANO" deve poder atingir dimensões próximas de `15vw–25vw` no desktop quando fizer sentido para a composição.

No mobile, utilizar `clamp()` para preservar impacto sem causar overflow.

## Motion Typography

A tipografia também faz parte das animações.

Implementar efeitos como:

* caracteres entrando individualmente;
* palavras reveladas por máscaras;
* mudança progressiva de `letter-spacing`;
* escala baseada no progresso do scroll;
* textos sticky;
* palavras atravessando horizontalmente a viewport;
* números gigantes funcionando como background;
* blur → focus;
* opacity → solid;
* texto sendo recortado por elementos visuais.

Evitar animações genéricas de `fade-in` em todos os textos.

Cada movimento deve possuir intenção.

## Identidade

O objetivo é que alguém que já conhece a Fast Escova reconheça imediatamente:

**"Isso é Fast Escova."**

Não apenas pelas cores e pelo logo, mas também pela:

**TIPOGRAFIA + COMPOSIÇÃO + AMARELO + MOVIMENTO + FOTOGRAFIA**

A campanha dos 6 anos deve expandir a identidade existente da marca, e não substituí-la por uma identidade visual genérica criada para a landing page.
