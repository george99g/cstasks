using System.Collections.Generic;

namespace Graph
{
    public class GraphNode<Type>
    {
        public GraphNode(Type value)
        {
            Value = value;
            Connections = new List<GraphNodeConnector<Type>>();
        }
        public void Connect(GraphNode<Type> to)
        {
            GraphNodeConnector<Type> connector
            = new GraphNodeConnector<Type>(this, to);
            Connections.Add(connector);
        }
        public void Disconnect(GraphNode<Type> from)
        {
            for(int i = 0; i < Connections.Count; i++)
                if(Connections[i].To == from)
                {
                    Connections.RemoveAt(i);
                    break;
                }
        }
        public List<GraphNode<Type>> DFSTraverse()
        {
            List<GraphNode<Type>> discoveredList = new List<GraphNode<Type>>();
            Stack<GraphNode<Type>> stack = new Stack<GraphNode<Type>>();
            stack.Push(this);
            while(stack.Count != 0)
            {
                GraphNode<Type> node = stack.Pop();
                if(!discoveredList.Contains(node))
                {
                    discoveredList.Add(node);
                    for(int i = node.Connections.Count - 1; i >= 0; i--)
                        stack.Push(node.Connections[i].To);
                }
            }
            return discoveredList;
        }
        public List<GraphNode<Type>> BFSTraverse()
        {
            List<GraphNode<Type>> discoveredList = new List<GraphNode<Type>>();
            Queue<GraphNode<Type>> queue = new Queue<GraphNode<Type>>();
            queue.Enqueue(this);
            while(queue.Count != 0)
            {
                GraphNode<Type> node = queue.Dequeue();
                if(!discoveredList.Contains(node))
                {
                    discoveredList.Add(node);
                    for(int i = 0; i < node.Connections.Count; i++)
                        queue.Enqueue(node.Connections[i].To);
                }
            }
            return discoveredList;
        }
        public List<GraphNodeConnector<Type>> Connections {get; set;}
        public Type Value {get; set;}
    }
    public class GraphNodeConnector<Type>
    {
        public GraphNodeConnector(GraphNode<Type> from, GraphNode<Type> to)
        {
            _from = from;
            _to = to;
        }
        public GraphNode<Type> To
        {
            get
            {
                return _to;
            }
        }
        public GraphNode<Type> From
        {
            get
            {
                return _from;
            }
        }
        GraphNode<Type> _from;
        GraphNode<Type> _to;
    }
}