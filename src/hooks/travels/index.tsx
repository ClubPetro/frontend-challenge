import React, { createContext, useCallback, useState, useContext } from 'react'
import {
  fetchAddTravel,
  fetchUpdateTravel,
  fetchRemoveTravel,
} from '../../services/api'

type Travel = {
  id: number
  country_name: string
  country_flag_url: string
  local: string
  target: string
}

export type TravelsProps = Array<Travel>

type TravelContextData = {
  travels: TravelsProps
  setMultipleTravels: (travels: TravelsProps) => void
  setTravel: (travel: Travel) => Promise<void>
  removeTravel: (traveleId: number) => void
  updateTravel: (updateInfo: Pick<Travel, 'local' | 'target' | 'id'>) => void
}

const TravelContext = createContext<TravelContextData>({} as TravelContextData)

const TravelProvider: React.FC = ({ children }) => {
  const [travels, setTravels] = useState<TravelsProps>([] as TravelsProps)

  const setMultipleTravels = useCallback((travels: TravelsProps) => {
    setTravels(travels)
  }, [])

  const setTravel = useCallback(
    async ({
      country_name,
      country_flag_url,
      local,
      target,
    }: Omit<Travel, 'id'>) => {
      const res = await fetchAddTravel({
        country_name,
        country_flag_url,
        local,
        target,
      })

      setTravels((prevState) => [
        ...prevState,
        { id: res.id, country_name, country_flag_url, local, target },
      ])
    },
    []
  )

  const updateTravel = useCallback(
    async ({ id, local, target }: Pick<Travel, 'local' | 'target' | 'id'>) => {
      await fetchUpdateTravel({
        id,
        local,
        target,
      })

      const updatedInfo = {
        local,
        target,
      }

      const travelIndex = travels.findIndex((travel) => travel.id === id)
      const travelsClone = travels

      if (travelIndex < 0) {
        return
      }

      Object.assign(travelsClone[travelIndex], updatedInfo)

      setTravels(travelsClone)
    },
    [travels]
  )

  const removeTravel = useCallback(
    (travelId) => {
      const travelIndex = travels.findIndex((travel) => travel.id === travelId)
      const removedTravelArray = travels.filter((travel, index) => {
        return travelIndex !== index
      })

      fetchRemoveTravel(travelId)
      setTravels(removedTravelArray)
    },
    [travels]
  )

  return (
    <TravelContext.Provider
      value={{
        setTravel,
        travels,
        setMultipleTravels,
        removeTravel,
        updateTravel,
      }}
    >
      {children}
    </TravelContext.Provider>
  )
}

function useTravel(): TravelContextData {
  const context = useContext(TravelContext)

  return context
}

export { TravelProvider, useTravel }
