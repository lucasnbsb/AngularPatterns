export type iconLabel = {
  icon: string;
  label: string;
};

export const EXAMPLE_BUTTONS: iconLabel[] = [
  { icon: 'cloud-rain', label: 'cloudy with rain' },
  { icon: 'cloud-sun', label: 'partialy cloudy' },
  { icon: 'cloud-lightning', label: 'cloudy with lightning' },
  { icon: 'cloud-sun-rain', label: 'partialy cloudy with rain' },
  { icon: 'sun', label: 'sunny' },
];

export const SOCIAL_BUTTONS: iconLabel[] = [
  { icon: 'heart', label: 'like' },
  { icon: 'message-circle', label: 'comment' },
  { icon: 'share-2', label: 'share' },
  { icon: 'bell', label: 'subscribe' },
];
