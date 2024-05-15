import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeframeInMinutesToText',
  standalone: true,
})
export class TimeframeInMinutesPipe implements PipeTransform {
  transform(minutes: number): unknown {
    return timeFrameInMinutesToTextDescription(minutes);
  }
}

export function timeFrameInMinutesToTextDescription(minutes: number) {
  let result: string;
  if (minutes === 0) {
    result = 'Immediately';
  } else if (minutes % (60 * 24 * 30) == 0) {
    const months = minutes / (60 * 24 * 30);
    result = months.toString() + ' month' + (months > 1 ? 's' : '');
  } else if (minutes % (60 * 24) == 0) {
    const days = minutes / (60 * 24);
    result = days.toString() + ' day' + (days > 1 ? 's' : '');
  } else if (minutes % 60 == 0) {
    const hours = minutes / 60;
    result = hours.toString() + ' hour' + (hours > 1 ? 's' : '');
  } else {
    result = minutes.toString() + ' minute' + (minutes > 1 ? 's' : '');
  }
  return result;
}
