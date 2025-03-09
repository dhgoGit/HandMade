import React from 'react';
import { useNoteContext } from './NoteContext';
import { DhgoSimpleButton } from '../atoms/DhgoSimpleButton';

enum WriteMode {
  KEYBOARD = 'keyboard',
  HAND = 'hand'
}

interface WriteModeChangerProps {
  defaultMode?: WriteMode;
}

export const WriteModeChanger: React.FC<WriteModeChangerProps> = ({
  defaultMode = WriteMode.KEYBOARD
}) => {
  const { state, setWriteMode } = useNoteContext();

  const handleModeChange = (mode: WriteMode) => {
    setWriteMode(mode);
  };

  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {Object.values(WriteMode).map((mode) => (
        <DhgoSimpleButton
          key={mode}
          onClick={() => handleModeChange(mode)}
          style={{
            backgroundColor: state.writeMode === mode ? '#e0e0e0' : '#ffffff',
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {mode}
        </DhgoSimpleButton>
      ))}
    </div>
  );
};

export { WriteMode }; 