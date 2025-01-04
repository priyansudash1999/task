import React from 'react';
import { Abstract } from './abstract';

export const DemoNode4 = ({ id, data }) => {
  return (
    <Abstract
      id={id}
      data={data}
      label="DemoNode"
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
        <span>This is a DemoNode</span>
      </div>
    </Abstract>
  );
};
