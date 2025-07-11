type SundayOption = {
  value: string;
  label: string;
};

export default function getNextSundays(count: number = 8): SundayOption[] {
  const sundays: SundayOption[] = [];
  const today = new Date();

  const daysUntilSunday = (7 - today.getDay()) % 7;
  let nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + daysUntilSunday);

  for (let i = 0; i < count; i++) {
    sundays.push({
      value: nextSunday.toISOString().split('T')[0],
      label: nextSunday.toLocaleDateString('pt-BR', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    });
    nextSunday.setDate(nextSunday.getDate() + 7);
  }

  return sundays;
}
