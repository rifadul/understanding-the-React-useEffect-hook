import React, { useEffect, useState } from 'react';

export default function ChatCount() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (count >= 1) {
            document.title = `Chats (${count})`;
        } else {
            document.title = `Chats`;
        }
    });

    return (
        <>
            <h2>{count}</h2>
            <button
                className="btn-lg btn-info rounded"
                onClick={() => setCount(count + 1)}>
                Click 😀
            </button>
        </>
    );
}
