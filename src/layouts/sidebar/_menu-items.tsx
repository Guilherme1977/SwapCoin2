import routes from '@/config/routes';
import { PoolIcon } from '@/components/icons/pool';
import { ExchangeIcon } from '@/components/icons/exchange';
import { HomeIcon } from '@/components/icons/home';

export const menuItems = [
  {
    name: 'Home',
    icon: <HomeIcon />,
    href: '',
    dropdownItems: [
      {
        name: 'Explore',
        href: '',
      },
      {
        name: 'Vote with pools',
        href: '',
      },
    ],
  },
  {
    name: 'Swap',
    icon: <ExchangeIcon />,
    href: routes.swap,
  },
  {
    name: 'Liquidity',
    icon: <PoolIcon />,
    href: routes.liquidity,
  },
];
