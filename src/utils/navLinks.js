import { GoHome, GoGear } from 'react-icons/go';
import { BiWorld } from 'react-icons/bi';

const navLinks = [
  {
    id: 0,
    name: 'Overview',
    url: '/',
    icon: GoHome,
  },
  {
    id: 1,
    name: 'Global Index',
    url: '/global-index',
    icon: BiWorld,
  },
  {
    id: 2,
    name: 'Settings',
    url: '/settings',
    icon: GoGear,
  },
];

export default navLinks;
