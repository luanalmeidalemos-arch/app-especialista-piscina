# 🏊 App Especialista em Piscinas

Assistente de diagnóstico de piscinas com inteligência artificial, desenvolvido em React Native com Expo.

## 💡 Sobre o projeto

Aplicativo mobile criado para auxiliar técnicos de piscinas no diagnóstico e solução de problemas. O usuário conversa com um especialista em IA que responde com base em um conhecimento técnico específico de piscinas — sem inventar informações.

Desenvolvido como projeto de portfólio e também utilizado na prática por uma empresa de manutenção de piscinas.

## ✨ Funcionalidades

- Chat com IA especialista em piscinas
- Fluxo guiado de medição de pH e cloro
- Quadro de piscinas por cliente com litragem cadastrada
- Cálculo automático de dosagem de produtos por volume
- Protocolos de contaminação (fezes, vômito, animal)
- Respostas limitadas ao tema piscinas (sem fuga de escopo)

## 🛠️ Tecnologias utilizadas

- [React Native](https://reactnative.dev/) com [Expo](https://expo.dev/)
- [Groq API](https://groq.com/) — LLM gratuita e rápida
- Llama 3.1 8b Instant (Meta) como modelo de linguagem
- Conhecimento técnico armazenado localmente em `dados/poolKnowledge.js`

## 📁 Estrutura do projeto

    app-especialista-piscinas/

    ├── dados/
    │     └── poolKnowledge.js     # Base de conhecimento técnico editável
    ├── serviços/
    │     └── groqService.js       # Integração com a API Groq
    ├── componentes/
    │      └── MessageBubble.js     # Componente de balão de mensagem
    └── App.js                   # Tela principal do chat

## 🚀 Como rodar o projeto

1. Acesse [snack.expo.dev](https://snack.expo.dev)
2. Importe os arquivos do repositório
3. Crie uma conta gratuita em [groq.com](https://groq.com) e gere sua API Key
4. No arquivo `serviços/groqService.js`, substitua `Cole sua chave Groq aqui` pela sua chave
5. Execute o projeto no navegador ou escaneie o QR code com o app Expo Go

## ⚙️ Como personalizar o conhecimento

Edite o arquivo `dados/poolKnowledge.js` para adaptar o especialista a qualquer área. Basta trocar o conteúdo técnico — sem precisar mexer no código do app.

## 👤 Autor

Luan Lemos — [GitHub](https://github.com/luanalmeidalemos-arco)
