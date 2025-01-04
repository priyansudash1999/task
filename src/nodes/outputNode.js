// outputNode.js

import { useState } from 'react';
import { Abstract } from './abstract';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));

  return (
    <Abstract
      id={id}
      data={data}
      label="Output"
      inputs={[{ id: 'value' }]}
      style={{
        backgroundColor: '#f9f9f9',
        border: '2px solid #2196f3',
        borderRadius: '8px',
        padding: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ marginTop: '10px' }}>
        <label>
          Output Name:
          <input 
            type="text" 
            value={currName} 
            onChange={(e) => setCurrName(e.target.value)} 
          />
        </label>
      </div>
    </Abstract>
  );
};
