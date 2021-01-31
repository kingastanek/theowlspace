import React, { useState } from 'react';
import AvatarInfo from 'components/AvatarInfo/AvatarInfo';
import przemekPhoto from 'assets/photos/przemek.png';
import kingaPhoto from 'assets/photos/kinga.png';
import { Paragraph, HorizontalLine } from 'styles/GlobalStyledComponents';
import { Wrapper, TextWrapper } from './BusinessCard.style';

interface iBusinessCard {
  id: string;
}

const BusinessCard: React.FC<iBusinessCard> = ({ id }): JSX.Element => {
  const [przemekSection, setPrzemekSection] = useState<boolean>(true);
  const [kingaSection, setKingaSection] = useState<boolean>(true);

  const showLeft = () => {
    setPrzemekSection(true);
    setKingaSection(false);
  };

  const showRight = () => {
    setPrzemekSection(false);
    setKingaSection(true);
  };

  return (
    <Wrapper id={id}>
      {przemekSection ? (
        <>
          <AvatarInfo
            src={przemekPhoto}
            name='Przemysław Drozd'
            email='przemyslaw.dro@gmail.com'
            linkedin='/in/przemysław-drozd'
            onMouseEnter={showLeft}
            onMouseLeave={showRight}
          />
          <HorizontalLine height='100vh' />
        </>
      ) : (
        <TextWrapper style={{ textAlign: 'right' }}>
          <Paragraph>
            <h1>Hello.</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            volutpat quam velit, a sollicitudin ante gravida ultrices. Cras nec
            ipsum dui. Quisque nec laoreet mauris. Vestibulum sit amet sodales
            sem, quis tristique ipsum. Nunc orci velit, condimentum eget
            lobortis interdum, eleifend sit amet quam. Donec consectetur commodo
            velit, in egestas.
          </Paragraph>
        </TextWrapper>
      )}
      {kingaSection ? (
        <>
          <HorizontalLine height='100vh' />

          <AvatarInfo
            src={kingaPhoto}
            name='Kinga Stanek'
            email='kin.stanek@gmail.com'
            linkedin='/in/kinga-stanek'
            onMouseEnter={showRight}
            onMouseLeave={showLeft}
          />
        </>
      ) : (
        <TextWrapper>
          <Paragraph>
            <h1>Hi.</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            volutpat quam velit, a sollicitudin ante gravida ultrices. Cras nec
            ipsum dui. Quisque nec laoreet mauris. Vestibulum sit amet sodales
            sem, quis tristique ipsum. Nunc orci velit, condimentum eget
            lobortis interdum, eleifend sit amet quam. Donec consectetur commodo
            velit, in egestas.
          </Paragraph>
        </TextWrapper>
      )}
    </Wrapper>
  );
};

export default BusinessCard;
