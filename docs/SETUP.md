# Setup e Execução (Windows / PowerShell)

Siga estes passos para configurar o ambiente de desenvolvimento e executar o aplicativo localmente.

1) Clone o repositório e entre na pasta do projeto:

```powershell
git clone <url-do-repo>
cd "d:\Programação\Projetos\app lixo\fortal-lixo-app"
```

2) Instale dependências:

```powershell
npm install
```

3) Inicie o Metro bundler (Expo):

```powershell
npx expo start
```

4) Executar no Android (emulador configurado ou dispositivo conectado):

```powershell
npx expo run:android
```

Notas:
- Para builds standalone, recomenda-se configurar EAS e credenciais apropriadas.
- Se usar um emulador Android, verifique o Android SDK e `ANDROID_HOME`/`ANDROID_SDK_ROOT` configurados.
