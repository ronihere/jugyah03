import React, { useEffect, useRef, useState } from "react"

const useClickOutside = <T extends HTMLElement>() => {
    const [isClickedOutside, setIsClickedOutside] = useState<boolean | null>(null);
    const ref = useRef<T | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            setIsClickedOutside(true);
        } else {
            setIsClickedOutside(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return { ref, isClickedOutside };
};

export default useClickOutside;
