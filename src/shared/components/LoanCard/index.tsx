import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

type LoanStatus = 'active' | 'waiting' | 'completed';

type LoanCardProps = {
  title: string;
  requestDateTime: Date;
  startDate: Date;
  endDate: Date;
  status: LoanStatus;
  actualReturnDate?: Date;
  availableDate?: Date;
};

const statusText: Record<LoanStatus, string> = {
  active: 'Em andamento',
  waiting: 'Na fila de espera',
  completed: 'Concluído'
};

const statusColor: Record<LoanStatus, string> = {
  active: 'text-green-600',
  waiting: 'text-yellow-600',
  completed: 'text-gray-600'
};

const LoanCard = ({ 
  title, 
  requestDateTime, 
  startDate, 
  endDate, 
  status, 
  actualReturnDate, 
  availableDate 
}: LoanCardProps) => {
  const formatDate = (date: Date) => format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
  const formatDateTime = (date: Date) => format(date, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR });

  const renderDates = () => {
    switch (status) {
      case 'active':
        return (
          <>
            <span><strong>Solicitado em:</strong> {formatDateTime(requestDateTime)}</span>
            <span><strong>Início:</strong> {formatDate(startDate)}</span>
            <span><strong>Devolução Prevista:</strong> {formatDate(endDate)}</span>
          </>
        );
      case 'waiting':
        return (
          <>
            <span><strong>Solicitado em:</strong> {formatDateTime(requestDateTime)}</span>
            <span><strong>Disponível em:</strong> {availableDate ? formatDate(availableDate) : 'Data não definida'}</span>
          </>
        );
      case 'completed':
        return (
          <>
            <span><strong>Solicitado em:</strong> {formatDateTime(requestDateTime)}</span>
            <span><strong>Início:</strong> {formatDate(startDate)}</span>
            <span><strong>Devolução:</strong> {actualReturnDate ? formatDate(actualReturnDate) : formatDate(endDate)}</span>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
      <div className="flex flex-col text-sm text-secondary mb-2">
        {renderDates()}
      </div>
      <p className={`text-sm font-medium ${statusColor[status]}`}>
        {statusText[status]}
      </p>
    </div>
  );
};

export default LoanCard;