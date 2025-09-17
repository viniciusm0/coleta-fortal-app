import { useRef } from 'react';

function useMapRef() {
    const mapRef = useRef<any>(null)

    return mapRef
}

export default useMapRef


