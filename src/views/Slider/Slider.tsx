import React from 'react';
import {
  colorReact,
  colorAWS,
  colorAdobeXD,
  colorNodeJS,
  colorJS,
} from 'styles/GlobalStyles';
import { Slider } from 'components';

const imageURL =
  'https://be-theowlspace-image-bucket.s3.eu-west-2.amazonaws.com/profile/';

const slides = [
  {
    title: 'React',
    description: 'A JavaScript library for building user interfaces',
    image: `${imageURL}react.png`,
    color: colorReact,
  },
  {
    title: 'AWS',
    description:
      'Amazon Web Services, offers reliable, scalable, and inexpensive cloud computing services',
    image: `${imageURL}aws.png`,
    color: colorAWS,
  },
  {
    title: 'Adobe XD',
    description:
      'Vector-based user experience design tool for web and mobile applications',
    image: `${imageURL}adobexd.png`,
    color: colorAdobeXD,
  },
  {
    title: 'Node.js',
    description:
      'Node.js is a JavaScript runtime, is designed to build scalable network applications',
    image: `${imageURL}nodejs.png`,
    color: colorNodeJS,
  },
  {
    title: 'JavaScript',
    description: `JavaScript is the world's most popular programming language`,
    image: `${imageURL}js.png`,
    color: colorJS,
  },
];

interface iSliderView {
  id: string;
}

const SliderView: React.FC<iSliderView> = ({ id }): JSX.Element => {
  return <Slider id={id} slides={slides} />;
};

export default SliderView;
