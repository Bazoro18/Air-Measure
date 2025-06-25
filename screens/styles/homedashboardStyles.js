import { StyleSheet } from 'react-native';

export const homedashboardStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e5e7eb',
    paddingVertical: 20,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginTop: 4,
  },
  headerIcon: {
    backgroundColor: '#dbeafe',
    borderRadius: 999,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#2563eb',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 3,
  },
  thumbnail: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 12,
  },
  projectName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 4,
  },
  projectDesc: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  projectHint: {
    fontSize: 12,
    color: '#9ca3af',
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    backgroundColor: '#2563eb',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  fabIcon: {
    fontSize: 32,
    color: '#ffffff',
    lineHeight: 32,
  },
});
