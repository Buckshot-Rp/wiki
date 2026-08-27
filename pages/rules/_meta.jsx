import {
  IconBuildingBank,
  IconSwords,
  IconMapPin,
  IconMasksTheater,
  IconServer,
  IconUsers,
  IconUsersGroup,
  IconUser,
  IconVideo,
  IconMessageCircle,
  IconBug,
  IconPackage,
} from '@tabler/icons-react'
import { sidebarTitle } from '../../components/SidebarLabel'

export default {
  index: {
    display: 'hidden',
  },
  community: sidebarTitle(IconUsers, 'Community'),
  feedback: sidebarTitle(IconMessageCircle, 'Feedback'),
  'bug-reports': sidebarTitle(IconBug, 'Bug reports'),
  'loot-rollbacks': sidebarTitle(IconPackage, 'Loot rollbacks'),
  server: sidebarTitle(IconServer, 'Server'),
  'green-zones': sidebarTitle(IconMapPin, 'Green zones'),
  character: sidebarTitle(IconUser, 'Character'),
  roleplay: sidebarTitle(IconMasksTheater, 'Roleplay'),
  gangs: sidebarTitle(IconUsersGroup, 'Gangs'),
  combat: sidebarTitle(IconSwords, 'Combat'),
  robbery: sidebarTitle(IconBuildingBank, 'Robbery'),
  footage: sidebarTitle(IconVideo, 'Footage'),
}
