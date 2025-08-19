import { createStyles } from '@mantine/styles';

const useTimePickerStyles = createStyles(() => ({
  input: {
    border: '1px solid #ddd',
    borderRadius: 12,
    padding: '6px 10px',
    transition: 'all 150ms ease',

    '&:focus': {
      borderColor: '#6366f1',
      boxShadow: '0 0 0 3px rgba(99,102,241,0.3)',
    },
  },

  label: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 4,
  },

  description: {
    fontSize: 12,
    color: '#666',
  },

  dropdown: {
    borderRadius: 14,
    border: '1px solid #eee',
    boxShadow: '0 12px 28px rgba(0,0,0,0.12)',
    overflow: 'hidden',
  },

  option: {
    borderRadius: 8,
    padding: '6px 10px',
    '&[data-selected]': {
      background: 'rgba(99,102,241,0.15)',
      color: '#111',
    },
    '&[data-hovered]': {
      background: 'rgba(99,102,241,0.08)',
    },
  },
}));

export default useTimePickerStyles;
