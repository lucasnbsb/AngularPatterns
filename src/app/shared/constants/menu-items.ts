import { Observable, delay, of } from 'rxjs';

export type MenuItem = {
  actionId: string;
  label: string;
  icon?: string;
  disabled?: Observable<boolean>;
  shouldRender?: Observable<boolean>;
  loadingLabel?: string;
  nestedOptions?: MenuItem[];
};
export const EXAMPLE_MENU_ITEMS: MenuItem[] = [
  {
    actionId: 'action1',
    label: 'This item is disabled',
    icon: 'hourglass',
    disabled: of(true),
  },
  {
    actionId: 'action2',
    label: 'Submenu with icon',
    icon: 'Sun',
    nestedOptions: [
      {
        actionId: 'action3',
        label: 'dynamically loaded submenu',
        shouldRender: of(true).pipe(delay(1500)),
      },
      {
        actionId: 'action4',
        label: 'Static submenu',
      },
      {
        actionId: 'action5',
        label: 'Disabled submenu',
        disabled: of(true),
      },
      {
        actionId: 'action6',
        label: 'dynamically unloaded submenu',
        shouldRender: of(false).pipe(delay(1500)),
      },
      {
        actionId: 'action7',
        label: 'submenu with icon',
        icon: 'Moon',
      },
    ],
  },
  {
    actionId: 'ifInactive',
    label: 'Dynamically loaded menu item',
    shouldRender: of(true).pipe(delay(1500)),
  },
  {
    actionId: 'ifInactive',
    label: 'RequDynamically rejected menu item',
    shouldRender: of(false).pipe(delay(1500)),
  },
];
