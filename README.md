# LifeSync

LifeSync é uma plataforma web que conecta doadores de sangue a centros de coleta, permitindo agendamento de doações, visualização de campanhas urgentes e cadastro de instituições parceiras.

## 🎯 Objetivo
Facilitar a doação de sangue por meio da tecnologia, promovendo agilidade, segurança e engajamento da comunidade.

## 👥 Integrantes da Equipe
- Amanda Karoline Arcelina Silva
- Isabella Cristina Genuino
- Jéssica Alves de Novais
- Jussara Oliveira de Almeida
- Niria Cristina Gonzaga de Lima Lobregate
- Robinson de Oliveira Argolo Santos
- Wellington Conceição de Souza

## 🛠️ Tecnologias Utilizadas
- Frontend: React, Vite
- Backend: Node.js (JavaScript/TypeScript)
- Banco de Dados: MongoDB
- Versionamento: Git + GitHub 

## 🛠️ Ferramentas de Suporte 
- Visual Studio Code 
- MongoDB Compass
- Postman / Insomnia
- Docker & Docker Compose

## 💻 Como Executar o Projeto Localmente

### Requisitos:
- Node.js
- Git
- (opcional) Docker
- Mongodb

### Verificando a instalação do Git (Windows)
- Abra o **PowerShell** ou o **Prompt de Comando** e execute `git --version`.
- Se aparecer `CommandNotFoundException` ou mensagem dizendo que o comando não existe, instale o Git pelo [site oficial](https://git-scm.com/download/win) ou com `winget install Git.Git`.
- Após a instalação, feche e abra novamente o terminal para que o comando `git` seja reconhecido.
- Caso prefira, utilize o **Git Bash**, instalado junto com o Git, para executar os comandos `git fetch` e `git checkout` sugeridos na revisão da PR.

### Clonando o repositório:
```bash
git clone https://github.com/Genuino-dev/lifesync.git
cd lifesync
```

### Instalando dependências:
```bash
npm install
```

### Iniciando o frontend:
```bash
npm run dev
```

### Backend:
```bash
cd backend
npm install
npm start
```

### Acessar em:
[http://localhost:3000]

## 🧪 Funcionalidades Implementadas
✔️ Cadastro de doador  
✔️ Login com verificação OTP (simulada)  
✔️ Cadastro de instituição  
✔️ Listagem de pontos de coleta  
✔️ Agendamento de doação (simulado)  
✔️ Interface responsiva  


🎨 Design e Documentação
🎨 Design no Figma: https://www.figma.com/design/UK15rkJOMlXdcr57Pg90fR/LifeSync
📄 Prova de Conceito LifeSync: incluída no repositório
🧰 Preparação do ambiente: incluído no projeto

## 📦 Estrutura do Projeto
```
LIFESYNC/
├── backend/                                # Backend da aplicação
├── node_modules/                           # Dependências do projeto
├── public/                                 # Arquivos estáticos públicos
├── src/                                    # Código-fonte da aplicação
├── .gitignore                              # Arquivos e pastas ignorados pelo Git
├── bun.lockb                               # Arquivo de lock do Bun (gerenciador de pacotes)
├── components.json                         # Configuração de componentes (provavelmente usada por algum UI framework)
├── Documento 3 (1).pdf                     # Documento de apoio
├── eslint.config.js                        # Configuração do ESLint
├── index.html                              # Página HTML principal
├── package-lock.json                       # Lockfile do npm
├── package.json                            # Configurações e dependências do projeto
├── postcss.config.js                       # Configuração do PostCSS
├── Preparação de ambiente.pdf              # Documento de preparação de ambiente
├── PROVA DE CONCEITO LIFESYNC V2.pdf       # Documento de prova de conceito
├── README.md                               # Documentação do projeto
├── tailwind.config.ts                      # Configuração do Tailwind CSS
├── tsconfig.app.json                       # Configuração TypeScript para o app
├── tsconfig.json                           # Configuração principal do TypeScript
├── tsconfig.node.json                      # Configuração TypeScript para o Node
├── vite.config.ts                          # Configuração do Vite (build tool)
```

## 🌐 Link do Protótipo Online
🔗 https://lifesync-seven.vercel.app/

## 🎥 Vídeo de Apresentação no Youtube
🎬 https://youtu.be/4JCIaFNPjsg

## 📃 Licença 
Este projeto foi desenvolvido como parte do Projeto Integrador do curso de Análise e Desenvolvimento de Sistemas – 4º semestre.
