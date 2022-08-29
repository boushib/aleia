import { useEffect, useState } from 'react'
import api from '../../api'
import PropertyCard from '../PropertyCard'
import { Property } from '../../models'
import './Properties.sass'

const PropertyList = () => {
  const [properties, setProperties] = useState<Array<Property>>([])

  useEffect(() => {
    handleFetchProperties()
  }, [])

  const handleFetchProperties = async () => {
    try {
      const { data } = await api.get('data/properties.json')
      setProperties(data)
    } catch (error) {
      // TODO - Handle Error
    }
  }

  return (
    <div className="properties">
      {properties.map(property => (
        <PropertyCard {...property} key={property.id} />
      ))}
    </div>
  )
}

export default PropertyList
