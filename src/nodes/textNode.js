import { useState, useEffect } from 'react';
import { Abstract } from './abstract';   // abstraction file 
import { Handle } from 'reactflow';  // It is for react-flow diagram

export const TextNode = ({ id, data }) => {   //id is for unique identifier and data is for contain information
  const [currText, setCurrText] = useState(data?.text || '{{input}}');   // if data.text is provided then currText value is that otherwise byDefault it is {{input}}
  const [variables, setVariables] = useState([]);           // It is for store variable
  const [dimensions, setDimensions] = useState({ width: 150, height: 50 });  // It is for store width and height of the textnode div

  const extractVariables = (text) => {   // function that takes a string and extract variable names encloded with double curly braces {{}}
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;    // check for valid variable name in {{}}
    const matches = [];           // store variable names found in text 
    let match;
    while ((match = regex.exec(text)) !== null) {  // extract variable name and push into the matched array if matches found
      matches.push(match[1]); 
    }
    return matches;
  };

  useEffect(() => {     //runs when currText changes
  
    const newVariables = extractVariables(currText);
    setVariables(newVariables);

    // This section dynamically calculate the height and width of the textnode and apply some styling
    const tempElement = document.createElement('div');
    tempElement.style.position = 'absolute';
    tempElement.style.visibility = 'hidden';
    tempElement.style.whiteSpace = 'normal'; 
    tempElement.style.fontSize = '14px';
    tempElement.style.lineHeight = '1.5';
    tempElement.style.width = '150px'; 
    tempElement.textContent = currText;

    document.body.appendChild(tempElement);
    const newHeight = tempElement.offsetHeight + 20; 
    const newWidth = Math.max(150, tempElement.scrollWidth + 20);
    document.body.removeChild(tempElement);

    setDimensions({ width: newWidth, height: newHeight });
  }, [currText]);


  
  return (

    // It is abstaction code
    <Abstract
      id={id}
      data={data}
      label="Text"
      outputs={[{ id: 'output' }]}
      style={{ width: dimensions.width, height: dimensions.height }}
    >
      <div>
        <label>
          Text:
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
              width: '100%',
              height: '100%',
              padding: '5px',
              fontSize: '14px',
              boxSizing: 'border-box',
              resize: 'none', 
              overflow: 'hidden',
              lineHeight: '1.5',
            }}
          />
        </label>
      </div>

      {/* Loops through the variables array and creates a Handle for each variable. */}

      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position="left"
          id={`handle-${variable}`}
          style={{ 
            background: 'cyan',
          }}
          isConnectable={true}
        />
      ))}
    </Abstract>
  );
};
