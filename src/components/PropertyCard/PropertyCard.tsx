import { Property } from '../../models'
import './PropertyCard.sass'

interface Props extends Property {}

const PropertyCard = ({ id, price, address, image }: Props) => (
  <div className="property-card">
    <img className="property-card__image" src={image} alt="" />
    <div className="property-card__info">
      <div className="property-card__price">${price.toFixed(2)}</div>
      <div className="property-card__address">{address}</div>
    </div>
  </div>
)

export default PropertyCard
