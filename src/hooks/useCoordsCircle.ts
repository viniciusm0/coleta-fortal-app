import { useCallback, useEffect, useState } from 'react'
import type { LatLng } from 'react-native-maps'
import useInitialLocation from './useInitialLocation'

type MapEventLike = { nativeEvent: {coordinate: LatLng}}

export const useCoordsCircle = () => {
    const { initialRegion } = useInitialLocation()
    const { latitude, longitude } = initialRegion
    const [circleCenter, setCircleCenter] = useState<LatLng>({latitude, longitude})

    const getPositionPressed = useCallback((event: MapEventLike) => {
        setCircleCenter(event.nativeEvent.coordinate)
    }, [])

    return { circleCenter, getPositionPressed, setCircleCenter}
}

