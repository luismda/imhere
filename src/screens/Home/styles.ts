import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 4,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: '#31CF67',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    marginTop: 36,
    marginBottom: 42,
  },
  listEmptyText: {
    color: '#FDFCFE',
    fontSize: 16,
    textAlign: 'center',
  },
})
