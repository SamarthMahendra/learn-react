import { useState } from 'react';

export default function RequestTracker() {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function handleClick() {
        // Increment pending using the functional updater
        setPending(prev => prev + 1);
        await delay(3000);
        // Decrement pending and increment completed using functional updaters
        setPending(prev => prev - 1);
        setCompleted(prev => prev + 1);
    }

    return (
        <>
            <h3>Pending: {pending}</h3>
            <h3>Completed: {completed}</h3>
            <button onClick={handleClick}>
                Buy
            </button>
        </>
    );
}

function delay(ms: number) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
