import React from 'react';

type RuleCardProps = {
  title: string;
  rules: string[];
};

const RuleCard = ({ title, rules }: RuleCardProps) => (
  <div className="rule-card bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
    <h2 className="text-xl font-bold mb-4 pb-2 border-b-2 border-accent">{title}</h2>
    <ul className="space-y-2">
      {rules.map((rule, index) => (
        <li key={index} className="pl-6 relative">
          <span className="absolute left-0 top-0 text-accent text-2xl leading-none">•</span>
          {rule}
        </li>
      ))}
    </ul>
  </div>
);

const RulesSection = () => {
  const loanRules = [
    "Empréstimos realizados exclusivamente aos domingos",
    "Período padrão de empréstimo: 2 semanas",
    "Possibilidade de extensão para 4 semanas (sujeito à aprovação)",
    "Limite de 1 livro por membro",
    "Solicitações para mais de 1 livro serão submetidas a avaliação"
  ];

  const returnRules = [
    "Devoluções também realizadas aos domingos",
    "Devolução na data prevista para evitar penalidades",
    "Atraso resulta em 2 semanas sem novos empréstimos"
  ];

  const careRules = [
    "Manusear os livros com cuidado para preservar sua integridade",
    "Proibido fazer anotações, dobrar páginas ou danificar os livros",
    "Danos ou perdas requerem reposição ou pagamento do valor do livro"
  ];

  const renewalRules = [
    "Uma renovação permitida, se não houver reserva para o livro",
    "Reservas disponíveis para livros que estejam emprestados",
    "Notificação ao membro quando o livro reservado estiver disponível"
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <RuleCard title="Empréstimo de Livros" rules={loanRules} />
      <RuleCard title="Devolução de Livros" rules={returnRules} />
      <RuleCard title="Cuidados com os Livros" rules={careRules} />
      <RuleCard title="Renovações e Reservas" rules={renewalRules} />
    </div>
  );
};

export default RulesSection;