import PageHeader from '../components/PageHeader'
import Properties from '../components/Properties'

const Home = () => (
  <div className="home">
    <div className="container">
      <PageHeader
        heading="We are an award winning interior design Agency"
        cta="View all properties"
        onClick={() => {}}
      />
      <Properties />
    </div>
  </div>
)

export default Home
