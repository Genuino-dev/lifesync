# 🩸 LifeSync

**LifeSync** é uma plataforma web que conecta **doadores de sangue** a **centros de coleta** e **instituições parceiras**, permitindo o **agendamento de doações**, **acompanhamento de campanhas** e **compartilhamento social de conquistas**.

> 🚀 O projeto foi evoluído no **5º semestre** do curso de **Análise e Desenvolvimento de Sistemas (Senac)**, com foco em **engajamento social, reconhecimento de doadores e impacto comunitário**.


## 🎯 Objetivo
Facilitar e incentivar a **doação de sangue** por meio da tecnologia, promovendo **agilidade**, **segurança** e **conexão entre doadores, instituições e sociedade**.

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

### 🔧 Requisitos
- Node.js  
- Git  
- MongoDB (local ou Atlas)  
- (Opcional) Docker  

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

✔️ Cadastro e login de doadores (com verificação OTP simulada)  
✔️ Cadastro de instituições e campanhas de doação  
✔️ Agendamento de doações (simulado)  
✔️ Compartilhamento social direto em redes (WhatsApp, Instagram, LinkedIn)  
✔️ Certificado Digital de Doador  
✔️ Indicador de impacto em tempo real  
✔️ Interface moderna, responsiva e acessível  

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

## 🎥 Vídeo de Apresentação
🎬[ https://youtu.be/3tl2VnvWn1s](https://drive.google.com/file/d/1iXgcQ-pkHA9SqlgSkKTjanVZqRj1R6xG/view?usp=drive_link)

## 🩸 Evolução do Projeto
🧠 **4º semestre:** foco em funcionalidades básicas de cadastro, gestão e agendamento.  
💡 **5º semestre:** expansão para engajamento social com recursos de **compartilhamento, certificado digital e indicadores de impacto**.  

## 📜 Licença
Projeto desenvolvido como parte do **Projeto Integrador – 5º semestre** do curso de **Análise e Desenvolvimento de Sistemas (Senac)**.  
Uso educacional e demonstrativo.
