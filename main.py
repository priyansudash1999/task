from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
import networkx as nx

app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[str]
    edges: List[List[str]] 

@app.get("/")
def read_root():
    return {"Ping": "Pong"}

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
   
    nodes = pipeline.nodes
    edges = pipeline.edges

    if not nodes or not edges:
        raise HTTPException(status_code=422, detail="Nodes and edges cannot be empty.")

    graph = nx.DiGraph()
    graph.add_nodes_from(nodes)
    graph.add_edges_from(edges)

    num_nodes = graph.number_of_nodes()
    num_edges = graph.number_of_edges()

    is_dag = nx.is_directed_acyclic_graph(graph)

    return {
        "num_nodes": num_nodes,
        "num_edges": num_edges,
        "is_dag": is_dag,
    }
