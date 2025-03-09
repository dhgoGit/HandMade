import React, { useState } from 'react';
import { DhgoSimpleButton } from '../atoms/DhgoSimpleButton';
import { useNoteContext } from './NoteContext';

const fontOptions = [
  { label: '굴림', value: 'Gulim' },
  { label: '맑은 고딕', value: 'Malgun Gothic' },
  { label: '돋움', value: 'Dotum' },
  { label: '바탕', value: 'Batang' }
];

export const FontChanger = ({
}) => {
    const { state, setFont } = useNoteContext();
  return (
    <div style={{ display: 'flex', gap: '8px' }}>
      {fontOptions.map((font) => (
        <DhgoSimpleButton
          key={font.value}
          onClick={() => setFont(font.value)}
          style={{
            fontFamily: font.value,
            backgroundColor: '#e0e0e0',
            padding: '8px 16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          {font.label}
        </DhgoSimpleButton>
      ))}
    </div>
  );
};
