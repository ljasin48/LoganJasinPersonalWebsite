/**
 * Calculates the duration between two dates in years and months, e.g. '2 years, 3 months'
 * @param start The start date as a string, i.e. 'yyyy-mm-dd'
 * @param end   The end date as a string, i.e. 'yyyy-mm-dd'. If not provided, the end date will be the current day.
 * @returns A string with the number of years and months elapsed.
 */
export function calculateDuration(start: string, end?: string): string {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();
  let years: number = endDate.getFullYear() - startDate.getFullYear();
  let months: number = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // Adjust months if the day of the end date is before the start date's day
  if (endDate.getDate() < startDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  let optionalYears = years > 0 ? `${years} year${years == 1 ? '' : 's'}, ` : '';

  return `${optionalYears}${months} month${months == 1 ? '' : 's'}`;
}
