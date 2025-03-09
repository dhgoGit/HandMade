import React, { useState } from 'react';
import { useNoteContext } from './NoteContext';
import { HandWriteCanvas } from './HandWriteCanvas';

interface HandWriteGuideLineProps {}

export const HandWriteGuideLine: React.FC<HandWriteGuideLineProps> = () => {
    const { state } = useNoteContext();
    const [value, setValue] = useState('');

    return (
        <div style={{
            position: 'relative',
            height: '32px',
            border: `5px solid ${process.env.NODE_ENV === 'development' ? '#FFE600' : 'transparent'}`,
            display: 'flex',
            alignItems: 'center',
            userSelect: state.writeMode === 'hand' ? 'none' : 'auto',
        }}>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: 'transparent',
                    fontSize: '16px',
                    fontFamily: state.font,
                    fontWeight: 'bold',
                    outline: 'none',
                    padding: '0 10px',
                    userSelect: state.writeMode === 'hand' ? 'none' : 'auto',
                }}
            />
            <HandWriteCanvas visible={state.writeMode === 'hand'} />
        </div>
    );
}; 