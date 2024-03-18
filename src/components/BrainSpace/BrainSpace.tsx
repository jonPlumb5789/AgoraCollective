import React, { useEffect, useState, useCallback, CSSProperties, MouseEvent } from "react";
// Remove the import statement for 'EmbeddedApp'
// import EmbeddedApp from "./EmbeddedApp";

// Define a type for the message event data you expect
type ResizeMessage = {
  type: 'setHeight';
  height: number;
};

// Define a type for the position state
type Position = {
  x: number;
  y: number;
};

const BrainSpace: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [position, setPosition] = useState<Position>({ x: 100, y: 100 }); // Starting position

  // Handle resize messages from iframe
  const handleResizeMessage = useCallback((event: MessageEvent<ResizeMessage>) => {
    // Validate the origin and the type of message
    if (event.origin !== "https://CHILD_APP_ORIGIN" || event.data.type !== 'setHeight') return;

    const iframe = document.getElementById('yourIframeId') as HTMLIFrameElement | null;
    if (iframe) {
      iframe.style.height = `${event.data.height}px`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('message', handleResizeMessage);
    return () => window.removeEventListener('message', handleResizeMessage);
  }, [handleResizeMessage]);

  // Implement dragging logic with a callback to update position
  const handleDragStart = useCallback((event: MouseEvent<HTMLDivElement>) => {
    const startPosition: Position = { x: event.pageX - position.x, y: event.pageY - position.y };

    const handleDragging = (moveEvent: MouseEvent) => {
      setPosition((prevPosition) => ({
        x: moveEvent.pageX - startPosition.x,
        y: moveEvent.pageY - startPosition.y,
      }));
    };

    const handleDragEnd = () => {
      document.removeEventListener('mousemove', handleDragging as unknown as EventListener);
      document.removeEventListener('mouseup', handleDragEnd);
    };

    document.addEventListener('mousemove', handleDragging as unknown as EventListener);
    document.addEventListener('mouseup', handleDragEnd);

    return () => {
      handleDragEnd();
    };
  }, [position]);

  const toggleMinimize = useCallback(() => {
    setIsMinimized((prev) => !prev);
  }, []);

  const containerStyle: CSSProperties = {
    width: isMinimized ? '100px' : '400px', // Example sizes
    height: isMinimized ? '50px' : '300px',
    position: 'absolute',
    left: `${position.x}px`,
    top: `${position.y}px`,
    transition: 'all 0.3s ease',
    cursor: 'move', // Cursor indicates this element is movable
    zIndex: 1000, // Ensure it's above other items
  };

  return (
    <div style={containerStyle} onMouseDown={handleDragStart}>
      <button onClick={toggleMinimize}>{isMinimized ? 'Expand' : 'Minimize'}</button>
      {!isMinimized && (
        <EmbeddedApp src="https://jonplumb5789.github.io/tokes-not-notes/" title="Child App" allow="microphone" />
      )}
    </div>
  );
};

export default BrainSpace;

// Make sure you define the props for the EmbeddedApp component.
interface EmbeddedAppProps {
  src: string;
  title: string;
  allow: string;
}

const EmbeddedApp: React.FC<EmbeddedAppProps> = ({ src, title, allow }) => {
  return (
    <iframe
      id="yourIframeId"
      src={src}
      title={title}
      allow={allow}
      style={{ width: '100%', height: '100%', border: 'none' }}
    />
  );
};