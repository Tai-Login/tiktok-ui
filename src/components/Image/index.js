import { forwardRef, useState } from 'react'
import images from '~/assets/images'

const Image = ({ src, alt, fallback, ...props }, ref) => {
    const [_fallback, setFallback] = useState('')
    const handleError = () => setFallback(fallback || images.defaultImage)

    return (
        <img
            style={{ overflow: 'hidden' }}
            ref={ref}
            src={_fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    )
}

export default forwardRef(Image)
