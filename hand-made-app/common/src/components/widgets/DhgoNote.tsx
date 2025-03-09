import React, { useState, useEffect, useRef } from 'react';
import { FontChanger } from './FontChanger';
import { HandWriteGuideLine } from './HandWriteGuideLine';
import { NoteProvider } from './NoteContext';
import { WriteModeChanger } from './WriteModeChanger';

export function DhgoNote() {
  const lineCount = Math.floor(920 / 32);

  return (
    <NoteProvider>
      <div style={{
        width: '100%',
        height: '1000px',
        padding: '20px',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        position: 'relative'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <FontChanger/>
          <WriteModeChanger/>
        </div>
        <div style={{ position: 'relative', height: '920px', overflowY: 'auto' }}>
          {Array.from({ length: lineCount }).map((_, index) => (
            <HandWriteGuideLine key={index} />
          ))}
        </div>
      </div>
    </NoteProvider>
  );
}
