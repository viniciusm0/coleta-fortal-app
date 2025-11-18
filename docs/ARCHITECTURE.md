# Arquitetura e Organização do Código

Visão geral dos principais diretórios e responsabilidades:

- `app/` — entrypoint e configurações do Expo (app.json, App.tsx, assets iniciais).
- `src/components/` — componentes React organizados por tela (ex.: `HomeScreen/MapInterface/RenderMap/MapRender.tsx`).
- `src/hooks/` — hooks customizados para lógica reutilizável (ex.: localização, referência ao mapa).
- `src/screens/` — telas do aplicativo (Home, Loading, Configurações, Sobre, FaleConosco, etc.).
- `src/backend/` — dados estáticos (GeoJSON) e utilitários para carregamento.

Fluxo principal:

1. A tela `HomeScreen` inicializa o componente de mapa e hooks de localização.
2. Os GeoJSONs em `src/backend/` são carregados/parseados em runtime e renderizados como markers.
3. Componentes de UI (Searchbar, FilterButtons, MarkerInfo) controlam a filtragem e apresentação dos pontos.

Considerações técnicas:
- Tipagem: TypeScript usado em todo o projeto.
- Estilização: NativeWind/Tailwind para estilos responsivos no React Native.
- Mapa: biblioteca baseada em MapView (ver `RenderMap` e componentes filhos).
