type SundayOption = {
  value: string;
  label: string;
};

export default function getNextSundays(count: number = 8): SundayOption[] {
  const sundays: SundayOption[] = [];
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + ((7 - currentDate.getDay()) % 7));
  for (let i = 0; i < count; i++) {
    sundays.push({
      value: currentDate.toISOString().split('T')[0],
      label: currentDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    });
    currentDate.setDate(currentDate.getDate() + 7);
  }
  return sundays;
}
