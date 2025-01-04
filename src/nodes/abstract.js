import React from 'react';
import { Handle, Position } from 'reactflow';

export const Abstract = ({
  id,
  label,
  inputs = [],
  outputs = [],
  children,
  style = {}
}) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
      <div>
        <span>{label}</span>
      </div>
      {children}
      {inputs.map((input, index) => (
        <Handle
          key={`${id}-${input.id}`}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          style={input.style || { top: `${(index + 1) * 33}%` }}
        />
      ))}
      {outputs.map((output, index) => (
        <Handle
          key={`${id}-${output.id}`}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          style={output.style || { top: `${(index + 1) * 33}%` }}
        />
      ))}
    </div>
  );
};
