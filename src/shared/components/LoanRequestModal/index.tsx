'use client'
import { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Warning from '../Warning';
import Button from '../Button';

type LoanPeriod = 'standard' | 'extended';

type LoanRequestData = {
  loanPeriod: LoanPeriod;
  justification?: string;
  pickupDate: string;
  returnDate: string;
};

type LoanRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LoanRequestData) => void;
};

type SundayOption = {
  value: string;
  label: string;
};

const LoanRequestModal = ({ isOpen, onClose, onSubmit }: LoanRequestModalProps) => {
  const [loanPeriod, setLoanPeriod] = useState<LoanPeriod>('standard');
  const [justification, setJustification] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [sundayOptions, setSundayOptions] = useState<SundayOption[]>([]);

  useEffect(() => {
    if (isOpen) {
      setupDateOptions();
    }
  }, [isOpen]);

  const setupDateOptions = () => {
    const options = getNextSundays();
    setSundayOptions(options);
    setPickupDate(options[0].value);
    updateReturnDate(options[0].value, loanPeriod);
  };

  const getNextSundays = (): SundayOption[] => {
    const sundays: SundayOption[] = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + (7 - currentDate.getDay()) % 7);
    
    for (let i = 0; i < 8; i++) {
      sundays.push({
        value: currentDate.toISOString().split('T')[0],
        label: currentDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      });
      currentDate.setDate(currentDate.getDate() + 7);
    }
    
    return sundays;
  };

  const updateReturnDate = (selectedPickupDate: string, period: LoanPeriod) => {
    const pickupDate = new Date(selectedPickupDate);
    const returnDate = new Date(pickupDate);
    returnDate.setDate(returnDate.getDate() + (period === 'standard' ? 14 : 28));
    
    // Adjust to next Sunday if necessary
    const daysUntilSunday = (7 - returnDate.getDay()) % 7;
    returnDate.setDate(returnDate.getDate() + daysUntilSunday);
    
    setReturnDate(returnDate.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ loanPeriod, justification, pickupDate, returnDate });
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-full max-w-md">
          <Dialog.Title className="text-xl font-bold mb-4 text-primary">Solicitar Empréstimo</Dialog.Title>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-2 font-bold text-primary" htmlFor="loanPeriod">Período de Empréstimo:</label>
              <Select.Root 
                value={loanPeriod} 
                onValueChange={(value: LoanPeriod) => {
                  setLoanPeriod(value);
                  updateReturnDate(pickupDate, value);
                }}
              >
                <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-primary bg-white border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                  <Select.Value />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
                    <Select.Viewport className="p-1">
                      <Select.Item value="standard" className="relative flex items-center px-8 py-2 text-sm text-primary cursor-default select-none hover:bg-accent hover:text-primary">
                        <Select.ItemText>Padrão (2 semanas)</Select.ItemText>
                      </Select.Item>
                      <Select.Item value="extended" className="relative flex items-center px-8 py-2 text-sm text-primary cursor-default select-none hover:bg-accent hover:text-primary">
                        <Select.ItemText>Estendido (4 semanas)</Select.ItemText>
                      </Select.Item>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            {loanPeriod === 'extended' && (
              <>
                <Warning>
                  Solicitações de período estendido ficarão pendentes até avaliação e aprovação.
                </Warning>
                <div className="mb-4">
                  <label className="block mb-2 font-bold text-primary" htmlFor="justification">Justificativa:</label>
                  <textarea
                    id="justification"
                    value={justification}
                    onChange={(e) => setJustification(e.target.value)}
                    className="w-full p-2 border border-secondary rounded text-primary focus:outline-none focus:ring-2 focus:ring-accent"
                    rows={3}
                    required
                  />
                </div>
              </>
            )}

            <div className="mb-4">
              <label className="block mb-2 font-bold text-primary" htmlFor="pickupDate">Data de Retirada:</label>
              <Select.Root 
                value={pickupDate} 
                onValueChange={(value: string) => {
                  setPickupDate(value);
                  updateReturnDate(value, loanPeriod);
                }}
              >
                <Select.Trigger className="inline-flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-primary bg-white border border-secondary rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent">
                  <Select.Value />
                  <Select.Icon>
                    <ChevronDownIcon />
                  </Select.Icon>
                </Select.Trigger>
                <Select.Portal>
                  <Select.Content className="overflow-hidden bg-white rounded-md shadow-lg">
                    <Select.Viewport className="p-1">
                      {sundayOptions.map((option) => (
                        <Select.Item 
                          key={option.value} 
                          value={option.value}
                          className="relative flex items-center px-8 py-2 text-sm text-primary cursor-default select-none hover:bg-accent hover:text-primary"
                        >
                          <Select.ItemText>{option.label}</Select.ItemText>
                        </Select.Item>
                      ))}
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>

            <div className="mb-4">
              <label className="block mb-2 font-bold text-primary" htmlFor="returnDate">Data de Devolução:</label>
              <input
                type="text"
                id="returnDate"
                value={returnDate}
                readOnly
                className="w-full p-2 border border-secondary rounded bg-gray-100 text-primary"
              />
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              <Button variant="secondary" type="button" onClick={onClose}>
                Cancelar
              </Button>
              <Button variant="primary" type="submit">
                {loanPeriod === 'extended' ? 'Enviar para Avaliação' : 'Confirmar Solicitação'}
              </Button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default LoanRequestModal;