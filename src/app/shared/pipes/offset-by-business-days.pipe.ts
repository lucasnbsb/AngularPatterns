import { Pipe, PipeTransform } from '@angular/core';

export function offsetDateByBusinessDays(
  date: Date,
  positiveOffset: number,
): Date {
  if (Number.isNaN(positiveOffset) || positiveOffset < 0) {
    return date;
  }

  // Get the day of the week as a number (0 = Sunday, 1 = Monday, .... 6 = Saturday)
  const dow = date.getDay();
  // If the current day is Sunday add one day
  if (dow == 0) positiveOffset++;
  // If the start date plus the additional days falls on or after the closest Saturday calculate weekends
  if (dow + positiveOffset >= 6) {
    //Subtract days in current working week from work days
    const remainingWorkDays = positiveOffset - (5 - dow);
    //Add current working week's weekend
    positiveOffset += 2;
    if (remainingWorkDays > 5) {
      //Add two days for each working week by calculating how many weeks are included
      positiveOffset += 2 * Math.floor(remainingWorkDays / 5);
      //Exclude final weekend if remainingWorkDays resolves to an exact number of weeks
      if (remainingWorkDays % 5 == 0) positiveOffset -= 2;
    }
  }
  date.setDate(date.getDate() + positiveOffset);
  return new Date(date.toISOString());
}

@Pipe({
  name: 'offsetByBusinessDays',
  standalone: true,
})
export class OffsetByBusinessDaysPipe implements PipeTransform {
  transform(date: Date | string, offset: number): Date {
    const startDate = new Date(date);
    const newDate = offsetDateByBusinessDays(startDate, offset);
    return newDate;
  }
}
