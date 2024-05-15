import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HouseIcon from 'shared/assets/icons/house.svg';
import InfoIcon from 'shared/assets/icons/info.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface ISidebarItem {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const sidebarItemsList: ISidebarItem[] = [{
  path: RoutePath.main,
  text: 'Home',
  Icon: HouseIcon,
}, {
  path: RoutePath.about,
  text: 'About',
  Icon: InfoIcon,
}, {
  path: RoutePath.profile,
  text: 'Profile',
  Icon: ProfileIcon,
  authOnly: true,
}];
