import React, { useRef, useEffect, useState } from 'react';

interface HandWriteCanvasProps {
    visible: boolean;
}

export const HandWriteCanvas: React.FC<HandWriteCanvasProps> = ({ visible }) => {
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const contextRef = useRef<CanvasRenderingContext2D | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * window.devicePixelRatio;
        canvas.height = rect.height * window.devicePixelRatio;
        
        const context = canvas.getContext('2d');
        if (!context) {
            return;
        }

        context.scale(window.devicePixelRatio, window.devicePixelRatio);
        context.lineCap = 'round';
        context.strokeStyle = '#000000';
        context.lineWidth = 2;
        contextRef.current = context;
    }, [visible]);

    const startDrawing = (e: React.MouseEvent) => {
        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current?.beginPath();
        contextRef.current?.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const handleMouseEnter = (e: React.MouseEvent) => {
        if (e.buttons === 1) { // 마우스 왼쪽 버튼이 눌린 상태
            startDrawing(e);
        }
    };

    const draw = (e: React.MouseEvent) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = e.nativeEvent;
        contextRef.current?.lineTo(offsetX, offsetY);
        contextRef.current?.stroke();
    };

    const stopDrawing = () => {
        contextRef.current?.closePath();
        setIsDrawing(false);
    };

    return (
        <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseEnter={handleMouseEnter}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onBlur={() => {
                stopDrawing();
                setIsDrawing(false);
            }}
            tabIndex={0}
            style={{
                display: visible ? 'block' : 'none',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(224, 255, 176, 0.3)',
                zIndex: 1,
                pointerEvents: 'auto',
                touchAction: 'none'
            }}
        />
    );
}; 