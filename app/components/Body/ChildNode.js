import React from 'react';
import useStore from '../store/useStore';

function ChildNode() {
    const todos = useStore((state) => state.todos);
    return <div>This is ChildNode: {todos.length}</div>;
}

export default ChildNode;
