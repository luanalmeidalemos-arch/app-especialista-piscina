import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MessageBubble({ mensagem }) {
  const isUsuario = mensagem.role === 'user';

  return (
    <View style={[
      styles.container,
      isUsuario ? styles.containerUsuario : styles.containerEspecialista
    ]}>
      {!isUsuario && (
        <Text style={styles.nomeEspecialista}>🏊 Especialista</Text>
      )}
      <Text style={[
        styles.texto,
        isUsuario ? styles.textoUsuario : styles.textoEspecialista
      ]}>
        {mensagem.content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '80%',
    borderRadius: 16,
    padding: 12,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  containerUsuario: {
    backgroundColor: '#0084FF',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  containerEspecialista: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  nomeEspecialista: {
    fontSize: 11,
    color: '#888',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  textoUsuario: {
    color: '#FFFFFF',
    fontSize: 15,
    lineHeight: 21,
  },
  textoEspecialista: {
    color: '#222222',
    fontSize: 15,
    lineHeight: 21,
  },
});