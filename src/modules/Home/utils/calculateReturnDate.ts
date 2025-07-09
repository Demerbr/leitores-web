type LoanPeriod = 'standard' | 'extended';

export default function calculateReturnDate(pickupDateStr: string, period: LoanPeriod): string {
  const pickupDate = new Date(pickupDateStr);
  const daysToAdd = period === 'standard' ? 14 : 28;
  const returnDate = new Date(pickupDate);
  returnDate.setDate(returnDate.getDate() + daysToAdd);
  const daysUntilSunday = (7 - returnDate.getDay()) % 7;
  returnDate.setDate(returnDate.getDate() + daysUntilSunday);
  return returnDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}
