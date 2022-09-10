import React, { useEffect, useState } from 'react'

function useDebounced(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const timeoutId = setTimeout(() => setDebouncedValue(value), delay)

        return () => {
            clearTimeout(timeoutId)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return debouncedValue
}

export default useDebounced
