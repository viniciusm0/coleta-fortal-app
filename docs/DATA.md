# Dados Geoespaciais

Os dados espaciais utilizados pelo app estão na pasta `src/backend/` em formato GeoJSON. Eles representam pontos e infraestruturas de coleta em Fortaleza.

Arquivos principais (exemplos):

- `Biodigestores.geojson`
- `Ecopontos.geojson`
- `Ilhas_Ecológicas.geojson`
- `Lixeiras_Subterrâneas.geojson`
- `Pontos_de_Coleta_Domiciliar.geojson`
- `Retorna_Machine.geojson`
- `Centro_de_Recondicionamento_Tecnológico.geojson`

Como atualizar ou adicionar dados:

1. Valide o GeoJSON em uma ferramenta como `geojson.io` ou `https://geojsonlint.com/`.
2. Salve o arquivo em `src/backend/` com nome descritivo.
3. Atualize `src/backend/JSONS.ts` ou `src/backend/JSONTODOS.ts` se houver um índice/manual de imports para expor o novo arquivo ao app.

Boas práticas:
- Use propriedades consistentes (por exemplo, `name`, `address`, `category`, `hours`).
- Mantenha `geometry.type: "Point"` para pontos simples e coordenadas como `[longitude, latitude]`.
- Versione grandes alterações de dados em branchs separadas e registre a origem das novas entradas.
