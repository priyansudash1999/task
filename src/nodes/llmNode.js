import React from 'react';
import { Abstract } from './abstract';

export const LLMNode = ({ id, data }) => {
  return (
    <Abstract
      id={id}
      data={data}
      label="LLM"
      inputs={[
        { id: 'system', style: { top: '33%' } },
        { id: 'prompt', style: { top: '66%' } }
      ]}
      outputs={[{ id: 'response' }]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </Abstract>
  );
};
