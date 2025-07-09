import React from 'react';

type WarningProps = {
  children: React.ReactNode;
};

const Warning =  ({ children }: WarningProps) => {
  return (
    <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-4" role="alert">
      <p className="font-bold">Atenção</p>
      <p>{children}</p>
    </div>
  );
};

export default Warning;