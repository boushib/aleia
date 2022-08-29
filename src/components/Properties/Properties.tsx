import { useEffect } from 'react'
import PropertyCard from '../PropertyCard'
import { useActions, useSelector } from '../../hooks'
import './Properties.sass'

const PropertyList = () => {
  const { properties, isLoading } = useSelector(s => s.properties)
  const { fetchProperties } = useActions()

  useEffect(() => {
    fetchProperties()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="properties">
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        properties.map(property => (
          <PropertyCard {...property} key={property.id} />
        ))}
    </div>
  )
}

export default PropertyList
