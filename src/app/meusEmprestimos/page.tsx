// pages/MyLoansPage.tsx

import LoanList from "@/shared/components/LoanList";
import Tabs from "@/shared/components/Tabs";


// Função auxiliar para obter o próximo domingo
const getNextSunday = (date: Date): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + (7 - result.getDay()) % 7);
  return result;
};

type Loan = {
  id: number;
  title: string;
  requestDateTime: Date;
  startDate: Date;
  endDate: Date;
  status: 'active' | 'waiting' | 'completed';
  actualReturnDate?: Date;
  availableDate?: Date;
};

// Mockup de dados atualizado
const mockLoans: Loan[] = [
  { 
    id: 1, 
    title: "O Peregrino", 
    requestDateTime: new Date(2024, 6, 29, 14, 30), // 29 de julho de 2024, 14:30
    startDate: getNextSunday(new Date(2024, 6, 29)), // Próximo domingo após a solicitação
    endDate: new Date(2024, 7, 15), 
    status: 'active' 
  },
  { 
    id: 2, 
    title: "Mero Cristianismo", 
    requestDateTime: new Date(2024, 7, 15, 10, 45), // 15 de agosto de 2024, 10:45
    startDate: getNextSunday(new Date(2024, 7, 15)),
    endDate: new Date(2024, 8, 15), 
    status: 'waiting',
    availableDate: new Date(2024, 7, 20)
  },
  { 
    id: 3, 
    title: "A Razão da Nossa Fé", 
    requestDateTime: new Date(2024, 4, 28, 9, 15), // 28 de maio de 2024, 09:15
    startDate: getNextSunday(new Date(2024, 4, 28)),
    endDate: new Date(2024, 5, 15), 
    status: 'completed',
    actualReturnDate: new Date(2024, 5, 14)
  },
  { 
    id: 4, 
    title: "Cristianismo Puro e Simples", 
    requestDateTime: new Date(2024, 5, 30, 16, 20), // 30 de junho de 2024, 16:20
    startDate: getNextSunday(new Date(2024, 5, 30)),
    endDate: new Date(2024, 6, 15), 
    status: 'completed',
    actualReturnDate: new Date(2024, 6, 16)
  },
];

const MyLoansPage = () => {
  const activeLoans = mockLoans.filter(loan => loan.status === 'active');
  const waitingLoans = mockLoans.filter(loan => loan.status === 'waiting');
  const completedLoans = mockLoans.filter(loan => loan.status === 'completed');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-8 text-center">Meus Empréstimos</h1>
      
      <Tabs defaultValue="current">
        <Tabs.List>
          <Tabs.Trigger value="current">Atual</Tabs.Trigger>
          <Tabs.Trigger value="waiting">Na Fila</Tabs.Trigger>
          <Tabs.Trigger value="history">Histórico</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="current">
          <LoanList 
            loans={activeLoans} 
            emptyMessage="Você não tem empréstimos ativos no momento."
          />
        </Tabs.Content>

        <Tabs.Content value="waiting">
          <LoanList 
            loans={waitingLoans} 
            emptyMessage="Você não está na fila de espera para nenhum livro."
          />
        </Tabs.Content>

        <Tabs.Content value="history">
          <LoanList 
            loans={completedLoans} 
            emptyMessage="Seu histórico de empréstimos está vazio."
          />
        </Tabs.Content>
      </Tabs>
    </div>
  );
};

export default MyLoansPage;