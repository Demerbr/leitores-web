import LoanCard from "../LoanCard";

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

type LoanListProps = {
  loans: Loan[];
  emptyMessage: string;
};

const LoanList = ({ loans, emptyMessage }: LoanListProps) => {
  if (loans.length === 0) {
    return <p className="text-secondary italic text-center">{emptyMessage}</p>;
  }

  return (
    <div>
      {loans.map(loan => (
        <LoanCard
          key={loan.id}
          title={loan.title}
          requestDateTime={loan.requestDateTime}
          startDate={loan.startDate}
          endDate={loan.endDate}
          status={loan.status}
          actualReturnDate={loan.actualReturnDate}
          availableDate={loan.availableDate}
        />
      ))}
    </div>
  );
};

export default LoanList;