import poolKnowledge from '../data/poolKnowledge';

const GROQ_API_KEY = 'Cole sua chave Groq aqui';

const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';

export async function perguntarEspecialista(mensagem, historico) {

  const resposta = await fetch(GROQ_URL, {

    method: 'POST',

    headers: {

      'Content-Type': 'application/json',

      'Authorization': `Bearer ${GROQ_API_KEY}`,

    },

    body: JSON.stringify({

      model: 'llama-3.1-8b-instant',

      messages: [

        {

          role: 'system',

          content: poolKnowledge,

        },

        ...historico,

        {

          role: 'user',

          content: mensagem,

        },

      ],

    }),

  });

  const dados = await resposta.json();

  return dados.choices[0].message.content;

}