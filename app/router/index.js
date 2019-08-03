import Home from '~/pages/Home'
import GettingStarted from '~/pages/GettingStarted'
import ResearchTools from '~/pages/ResearchTools'
import NhdVideos from '~/pages/NhdVideos'
import Events from '~/pages/Events'

const routes = {
  Home,
  GettingStarted,
  ResearchTools,
  NhdVideos,
  Events,
  ContactUs: {
    icon: 'fa-envelope',
    displayName: 'Contact Us',
    name: 'ContactUs'
  }
}

export default routes