'use client'
import React, { useEffect, useState } from 'react'

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

function getWindowDimensions() {
    if (typeof window === 'undefined') return {
        width: 0,
        height:0
    }
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

