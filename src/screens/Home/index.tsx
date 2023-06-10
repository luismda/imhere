import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native'

import { styles } from './styles'

import { Participant } from '../../components/Participant'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleParticipantAdd() {
    if (participantName.trim().length === 0) {
      return Alert.alert('Adicionar', 'Informe o nome do participante para adicionar.')
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Adicionar', 'Esse participante já foi adicionado!')
    }

    setParticipants((prevState) => [participantName, ...prevState])
    setParticipantName('')
  }

  function removeParticipant(name: string) {
    setParticipants((prevState) => {
      return prevState.filter((participant) => participant !== name)
    })
  }

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => removeParticipant(name),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Evento de React Native
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 10 de Junho de 2023.
      </Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}