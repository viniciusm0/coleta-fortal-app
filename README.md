# COLETAFortal — Aplicativo de Coleta e Pontos de Resíduos (Fortaleza)

Projeto mobile (Expo + React Native + TypeScript) para visualização e gerenciamento de pontos de coleta de resíduos em Fortaleza. Este repositório contém o front-end do aplicativo, dados geoespaciais usados no mapa e componentes reutilizáveis.

**Resumo:**
- **Objetivo:** oferecer uma interface móvel que mostre pontos de coleta (ecopontos, ilhas ecológicas, biodigestores, lixeiras subterrâneas, pontos de coleta domiciliar, entre outros) com filtros, busca e informações detalhadas.
- **Tecnologias:** Expo, React Native, TypeScript, MapView (biblioteca de mapas), GeoJSON para dados espaciais.

**Funcionalidades principais:**
- Mapa interativo com markers para diferentes tipos de pontos.
- Filtros por categoria/serviço.
- Busca por endereço/nome de ponto.
- Informações detalhadas em marcadores (endereços, horários, observações).
- Componentes para adicionar/retornar pontos (esqueleto/feature em desenvolvimento).

## Estrutura do repositório

- `app/` — arquivos de configuração do Expo e entrypoint.
- `src/` — código-fonte do app:
  - `components/` — componentes React organizados por tela e função (ex.: `HomeScreen/MapInterface/RenderMap/MapRender.tsx`).
  - `hooks/` — hooks customizados (`useCoordsCircle.ts`, `useInitialLocation.ts`, `useMapRef.ts`).
  - `screens/` — telas do app (`Home`, `Loading`, `Configuracoes`, `Sobre`, `FaleConosco`, etc.).
  - `backend/` — dados geoespaciais (GeoJSON) usados pelo app:
    - `Biodigestores.geojson`
    - `Ecopontos.geojson`
    - `Ilhas_Ecológicas.geojson`
    - `Lixeiras_Subterrâneas.geojson`
    - `Pontos_de_Coleta_Domiciliar.geojson`
    - `Retorna_Machine.geojson`
    - `Centro_de_Recondicionamento_Tecnológico.geojson`
    - `JSONS.ts`, `JSONTODOS.ts` — utilitários/índices para carregar os dados.

## Instalação (Windows / PowerShell)

1. Clone o repositório (se ainda não):

```powershell
git clone <url-do-repo>
cd "d:\Programação\Projetos\app lixo\fortal-lixo-app"
```

2. Instale dependências:

```powershell
npm install
```

3. Inicie o Expo (abrirá o Metro bundler):

```powershell
npx expo start
```

Abra no emulador Android/iOS ou num dispositivo físico usando o app Expo Go.

## Como rodar em desenvolvimento

- Para rodar no Android (via emulador configurado):

```powershell
npx expo run:android
```

- Para rodar no iOS (macOS necessário) use:

```bash
npx expo run:ios
```

Observação: o projeto foi desenvolvido com foco em Expo/Android e testes em dispositivos reais.

## Dados geoespaciais

Os GeoJSONs estão em `src/backend/`. Para atualizar ou adicionar pontos:

- Adicione/edite o arquivo `.geojson` correspondente.
- Atualize `src/backend/JSONS.ts` ou `JSONTODOS.ts` caso precise exportar/registrar o novo arquivo para uso pelo app.

## Comandos úteis

- Instalar dependências: `npm install`
- Iniciar bundler: `npx expo start`
- Build Android (standalone): `eas build --platform android` (se EAS configurado)



