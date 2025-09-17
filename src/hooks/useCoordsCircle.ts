import { useCallback, useEffect, useState } from 'react'
import type { LatLng } from 'react-native-maps'
import useInitialLocation from './useInitialLocation'

type MapEventLike = { nativeEvent: {coordinate: LatLng}}

export const useCoordsCircle = () => {
    const { initialRegion, loading } = useInitialLocation()
    const { latitude, longitude } = initialRegion
    const [circleCenter, setCircleCenter] = useState<LatLng | null>(null)

    useEffect(() => {
        if (!loading && initialRegion && (latitude !== 0 || longitude !== 0)) {
            setCircleCenter({ latitude: latitude, longitude: longitude })
        }
    }, [loading, initialRegion])
    
    const getPositionPressed = useCallback((event: MapEventLike) => {
        setCircleCenter(event.nativeEvent.coordinate)
    }, [])

    return { circleCenter, getPositionPressed, setCircleCenter}
}

