import React from 'react';
import { Abstract } from './abstract';

export const MathNode = ({ id, data }) => {
  return (
    <Abstract
      id={id}
      data={data}
      label="Math"
      inputs={[
        { id: 'system', style: { top: '33%' } },
        { id: 'prompt', style: { top: '66%' } }
      ]}
      outputs={[{ id: 'response' }]}
      style={{
        backgroundColor: '#f9f9f9',
        border: '2px solid #4caf50',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{marginTop: '10px' }}>
        <span>This is a MathNode</span>
      </div>
    </Abstract>
  );
};
