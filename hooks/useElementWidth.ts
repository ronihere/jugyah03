import React, { useRef, useState, useEffect } from 'react';

export default function useElementWidth() {
    const ref = useRef < HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            if (ref.current) {
                setWidth(ref.current.offsetWidth);
            }
        };

        // Initial width calculation
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup function
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return { ref, width };
}


