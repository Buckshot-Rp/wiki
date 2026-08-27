import {
  IconHome,
  IconScale,
} from '@tabler/icons-react'
import { sidebarTitle } from '../components/SidebarLabel'

export default {
  index: sidebarTitle(IconHome, 'Introduction'),
  rules: sidebarTitle(IconScale, 'Rules'),
}
