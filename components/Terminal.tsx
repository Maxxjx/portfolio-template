import React, { useState, useRef, useEffect } from 'react';

interface CommandOutput {
  command: string;
  output: string;
}

export const Terminal = () => {
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [outputs, setOutputs] = useState<CommandOutput[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputs]);

  const processCommand = (command: string) => {
    // Add command handling logic here
    return `Executed: ${command}`;
  };

  return (
    <div 
      className="terminal" 
      role="region" 
      aria-label="Interactive terminal interface"
      ref={terminalRef}
    >
      <div className="terminal-history">
        {outputs.map((output, index) => (
          <div key={index} className="terminal-line">
            <span className="prompt">$</span>
            <span className="command">{output.command}</span>
            <div className="output">{output.output}</div>
          </div>
        ))}
      </div>
      <div className="terminal-input-line">
        <span className="prompt">$</span>
        <input
          type="text"
          className="terminal-input"
          aria-label="Terminal command input"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              const command = e.currentTarget.value;
              const output = processCommand(command);
              setOutputs([...outputs, { command, output }]);
              setCommandHistory([command, ...commandHistory]);
              e.currentTarget.value = '';
              setHistoryIndex(-1);
            }
            if (e.key === 'ArrowUp') {
              // Navigate command history
              setHistoryIndex(prev => Math.min(prev + 1, commandHistory.length - 1));
              e.currentTarget.value = commandHistory[historyIndex];
            }
            if (e.key === 'ArrowDown') {
              setHistoryIndex(prev => Math.max(prev - 1, -1));
              e.currentTarget.value = historyIndex >= 0 ? commandHistory[historyIndex] : '';
            }
          }}
        />
      </div>
    </div>
  );
};