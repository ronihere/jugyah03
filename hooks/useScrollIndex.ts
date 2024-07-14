import React, { useEffect, useState } from 'react'

export default function useScrollIndex(length: number, startIndex = 0, autoScroll = false, duration = 1000) {
    const [currentindex, setCurrentIndex] = useState(0);
    const changeIndex = () => {
        setCurrentIndex(prev => (prev + 1) % length);
    }
    useEffect(() => {
        if (autoScroll) {
            const timer = setInterval(() => {
                changeIndex()
            }, duration);
            return () => {
                return clearInterval(timer);
            }
        }
    }, [])
    return {
    changeIndex , currentindex
    }

}
