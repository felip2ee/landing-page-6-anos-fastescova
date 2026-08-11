# Fast Escova 6 Anos

Experiência digital comemorativa dos 6 anos da Fast Escova — Palmas Avenida JK.

## Desenvolvimento local

Requisitos: Node.js 20.19+ e npm.

```bash
npm install
npm run dev
```

A aplicação será disponibilizada pelo Vite no endereço exibido no terminal.

## Validação

```bash
npm run typecheck
npm run build
```

Para visualizar a compilação de produção:

```bash
npm run preview
```

## Imagem Docker

O workflow `.github/workflows/publish-image.yml` cria a imagem Linux AMD64 e publica no GHCR a cada push para a branch padrão:

```text
ghcr.io/felip2ee/landing-page-6-anos-fastescova:latest
```

Também são publicadas tags da branch, da versão Git (`v*`) e do commit no formato `sha-...`. A publicação é feita somente pelo GitHub Actions; o fluxo não exige push local da imagem.

## Deploy no Docker Swarm

O `compose.yml` local é ignorado pelo Git. O repositório mantém apenas `compose.example.yml`, sem credenciais ou domínio real. Copie o exemplo, confirme que a rede já existe e informe o domínio da campanha no ambiente:

```bash
cp compose.example.yml compose.yml
docker network inspect NovaNet
export DOMAIN="DOMINIO_DA_CAMPANHA"
export IMAGE_TAG="latest"
docker stack deploy --with-registry-auth -c compose.yml fastescova6anos
```

Substitua `DOMINIO_DA_CAMPANHA` pelo hostname apontado para o Traefik, sem `https://`. Se o pacote GHCR estiver privado, autentique cada nó que poderá baixar a imagem e mantenha `--with-registry-auth` no deploy.

Para acompanhar a atualização:

```bash
docker stack services fastescova6anos
docker service logs -f fastescova6anos_site
```

## Fonte de verdade

Consulte `plan.md` para requisitos de produto e direção criativa. Consulte `AGENTS.md` para as regras de implementação e validação.
