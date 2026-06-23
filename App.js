import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MessageBubble from './components/MessageBubble';
import { perguntarEspecialista } from './services/groqService';

export default function App() {
  const [mensagens, setMensagens] = useState([
    {
      role: 'assistant',
      content: 'Olá! Sou seu especialista em piscinas. Como posso te ajudar hoje?',
    },
  ]);
  const [inputTexto, setInputTexto] = useState('');
  const [carregando, setCarregando] = useState(false);

  async function enviarMensagem() {
    if (!inputTexto.trim() || carregando) return;

    const novaMensagemUsuario = {
      role: 'user',
      content: inputTexto.trim(),
    };

    const historicoAtualizado = [...mensagens, novaMensagemUsuario];
    setMensagens(historicoAtualizado);
    setInputTexto('');
    setCarregando(true);

    try {
      const resposta = await perguntarEspecialista(
        inputTexto.trim(),
        mensagens
      );

      setMensagens([
        ...historicoAtualizado,
        {
          role: 'assistant',
          content: resposta,
        },
      ]);
    } catch (erro) {
      setMensagens([
        ...historicoAtualizado,
        {
          role: 'assistant',
          content: 'Erro ao conectar. Verifique sua conexão e tente novamente.',
        },
      ]);
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.tela}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.cabecalho}>
        <Text style={styles.tituloCabecalho}>🏊 Especialista em Piscinas</Text>
        <Text style={styles.subtituloCabecalho}>Online • Pronto para ajudar</Text>
      </View>

      <FlatList
        data={mensagens}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <MessageBubble mensagem={item} />}
        style={styles.listaMensagens}
        contentContainerStyle={styles.conteudoLista}
      />

      {carregando && (
        <View style={styles.containerCarregando}>
          <ActivityIndicator size="small" color="#0084FF" />
          <Text style={styles.textoCarregando}>Especialista digitando...</Text>
        </View>
      )}

      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={inputTexto}
          onChangeText={setInputTexto}
          placeholder="Digite sua dúvida sobre piscinas..."
          placeholderTextColor="#999"
          multiline
          onSubmitEditing={enviarMensagem}
        />
        <TouchableOpacity
          style={[styles.botaoEnviar, carregando && styles.botaoDesabilitado]}
          onPress={enviarMensagem}
          disabled={carregando}
        >
          <Text style={styles.textoBotao}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  cabecalho: {
    backgroundColor: '#0084FF',
    paddingTop: 50,
    paddingBottom: 16,
    paddingHorizontal: 20,
  },
  tituloCabecalho: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtituloCabecalho: {
    color: '#CCE5FF',
    fontSize: 12,
    marginTop: 2,
  },
  listaMensagens: {
    flex: 1,
  },
  conteudoLista: {
    paddingVertical: 12,
  },
  containerCarregando: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    gap: 8,
  },
  textoCarregando: {
    color: '#888',
    fontSize: 13,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    maxHeight: 100,
    color: '#222',
  },
  botaoEnviar: {
    backgroundColor: '#0084FF',
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoDesabilitado: {
    backgroundColor: '#AAAAAA',
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});