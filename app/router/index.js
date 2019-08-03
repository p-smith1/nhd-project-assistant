import Home from '~/pages/Home'
import GettingStarted from '~/pages/GettingStarted'
import ResearchTools from '~/pages/ResearchTools'
import NhdVideos from '~/pages/NhdVideos'

const routes = {
  Home,
  GettingStarted,
  ResearchTools,
  NhdVideos,
  ContactUs: {
    icon: 'fa-envelope',
    displayName: 'Contact Us',
    name: 'ContactUs'
  }
}

export default routes