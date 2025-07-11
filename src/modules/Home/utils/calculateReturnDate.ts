type LoanPeriod = 'standard' | 'extended';

export default function calculateReturnDate(pickupDateStr: string, period: LoanPeriod): string {
  const pickupDate = new Date(pickupDateStr);
  const loanDays = period === 'standard' ? 14 : 28;

  const dueDate = new Date(pickupDate);
  dueDate.setDate(dueDate.getDate() + loanDays);

  const dayOfWeek = dueDate.getDay();
  if (dayOfWeek !== 0) {
    dueDate.setDate(dueDate.getDate() + (7 - dayOfWeek));
  }

  return dueDate.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}
