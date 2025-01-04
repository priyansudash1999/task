// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' backgroundColor='#9400D3'/>
                <DraggableNode type='llm' label='LLM' backgroundColor='#4B0082'/>
                <DraggableNode type='customOutput' label='Output' backgroundColor=' #0000FF' />
                <DraggableNode type='text' label='Text' backgroundColor='#00FF00'/>
                <DraggableNode type='math' label='Math' backgroundColor='#16C47F'/>
                <DraggableNode type='name' label='Priyansu' backgroundColor='#FF7F00'/>
                <DraggableNode type='language' label="Language" backgroundColor='#C30E59'/>
                <DraggableNode type='demo' label="Demo" backgroundColor='#500073'/>
                <DraggableNode type='demoo' label="Demoo" backgroundColor='#F72C5B'/>
            </div>
        </div>
    );
};
