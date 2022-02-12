import React, { useEffect, useState } from 'react';

export default function ChatCount() {
    const [count, setCount] = useState(0);
    const [fndCount, setFndCount] = useState(0);
    // its have dependency count. its relode only this time when change the count value
    useEffect(() => {
        console.log('I am counting dependency');
        if (count >= 1) {
            document.title = `Chats (${count})`;
        } else {
            document.title = `Chats`;
        }
    }, [count]);

    // its run only once when road the page first
    useEffect(() => {
        console.log('I am dependencycount for only once when road the page first');
    }, []);

    // its have no dependency. its roade all time when render the component newly
    useEffect(() => {
        console.log('i am without dependency for friend count');
    });
    return (
        <>
            <div>
                <h2>{count}</h2>
                <button
                    className="btn-lg btn-info rounded"
                    onClick={() => setCount(count + 1)}>
                    Click 😀
                </button>
            </div>
            <div>
                <h2>Friend {fndCount}</h2>
                <button
                    className="btn-lg btn-info rounded"
                    onClick={() => setFndCount(fndCount + 1)}>
                    Add Friend 😀
                </button>
            </div>
        </>
    );
}
