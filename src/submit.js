import React from 'react';
import { useStore } from './store';   // where the all datas are

export const SubmitButton = () => {    // responsible for displaying a Submit button and handling the submission of data.
  const { nodes, edges } = useStore((state) => ({   //useStore hook is called to retrieve the current state.
    nodes: state.nodes,     // nodes represent the nodes in a graph or flow. Each node may contain details like id, data, and position
    edges: state.edges,     // edges represent the connections between the nodes. Each edge likely contains information about the source and target nodes.
  }));

  const handleSubmit = async () => {    // async function is triggered when the Submit button is clicked
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {      // fetches the data from the server which is backend using fastapi
        method: "POST",                 // method is set to POST as we are sending a POST request.
        headers: {
          "Content-Type": "application/json",    // its set to be a json data
        },
        body: JSON.stringify({               // the data is converted to a json string
          nodes: nodes.map(node => node.id),
          edges: edges.map(edge => [edge.source, edge.target]),
        }), 
      });
  
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        alert(                      // alert about number of nodes and edges and whether the graph is a DAG or not   if everything is okay 
          `Number of Nodes: ${data.num_nodes}\n` +                 
          `Number of Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag}`
        );
      } else {
        // console.error("Error response:", await response.text());
        alert("Failed to parse pipeline. Please check the input.");  // alet if there is no node and edges and the graph is not a DAG
      }
    } catch (error) {                                               // error part handled
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <button
      onClick={handleSubmit}
      style={{
        marginTop: "20px",
        padding: "10px 20px",
        backgroundColor: "blue",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Submit
    </button>
  );
};
