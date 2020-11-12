import React from 'react';

interface iBusinessCard {
  name?: string;
}

const BusinessCard: React.FC<iBusinessCard> = ({
  name = 'Kinga',
}): JSX.Element => {
  return <div>{name}</div>;
};

export default BusinessCard;
