import Home from '~/pages/Home'
import GettingStarted from '~/pages/GettingStarted'
import ResearchTools from '~/pages/ResearchTools'
import NhdVideos from '~/pages/NhdVideos'
import Donate from '~/pages/Donate'

const routes = {
  Home,
  GettingStarted,
  ResearchTools,
  NhdVideos,
  Donate,
  ContactUs: {
    icon: 'fa-envelope',
    displayName: 'Contact Us',
    name: 'ContactUs'
  }
}

export default routes