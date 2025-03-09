import React, { createContext, useState, useContext } from 'react';

type WriteMode = 'hand' | 'keyboard';

interface NoteContextState {
  font: string;
  writeMode: WriteMode;
}

interface NoteContextValue {
  state: NoteContextState;
  setFont: (font: string) => void;
  setWriteMode: (mode: WriteMode) => void;
}

const defaultState: NoteContextState = {
  font: 'Gulim',
  writeMode: 'keyboard'
};

export const NoteContext = createContext<NoteContextValue | null>(null);

export const NoteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<NoteContextState>(defaultState);

  const setFont = (font: string) => setState(prev => ({ ...prev, font }));
  const setWriteMode = (writeMode: WriteMode) => setState(prev => ({ ...prev, writeMode }));

  return (
    <NoteContext.Provider value={{
      state,
      setFont,
      setWriteMode
    }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNoteContext = () => {
  const context = useContext(NoteContext);
  if (!context) {
    throw new Error('useNoteContext must be used within a NoteProvider');
  }
  return context;
}; 