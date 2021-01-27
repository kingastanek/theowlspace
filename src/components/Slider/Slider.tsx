import React, { useState, useEffect, useRef } from 'react';
import {
  Wrapper,
  Slide,
  Slides,
  Button,
  SlideContent,
  SlideContentInner,
  SlideTitle,
  SlideBackground,
  SlideDescription,
  ButtonWrapper,
} from './Slider.style';

const Slider = ({ id }): JSX.Element => {
  const [slideIndex, setSlideIndex] = useState<number>(2);
  const [positionNumber, setPositionNumber] = useState<number>(0.5);

  const slides = [
    {
      title: 'ReactJS',
      description: 'A JavaScript library for building user interfaces',
      image:
        'https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg.webp',
    },
    {
      title: 'AWS',
      description: 'Cloud Computing Services',
      image: 'https://www.infracode.co/wp-content/uploads/2017/10/AWS.jpg',
    },
    {
      title: 'AdobeXD',
      description: 'UI/UX design and collaboration tool',
      image:
        'https://cdn.dribbble.com/users/1771947/screenshots/7293013/media/29ddd523feb86b17f3a9b02f452c50bc.png?compress=1&resize=1600x1200',
    },
    {
      title: 'NodeJS',
      description: 'UI/UX design and collaboration tool',
      image:
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAABC1BMVEX///8zMzNnnmM/hz8sLCxPm0N/f39Sn0RMl0JXpkZkt0lZqEZVpEVUokVQnENaqkZfmlt4eHhdr0cnJydpaWlal1VitUlIkkGTk5NVVVXr8urB1b+40LdGj0Hz+POcv5ocHBxkZGRnvEoYGBg+ljeJiYmnxqcSEhL19fXHx8ciIiI+kjk+mDbl5eVuompJSUk+njM6OjrW1taioqLq6uozhDKGsYPU4tO0tLSoqKjOzs6ZmZm5ubmRvI9ERETf6t89ozEAAACRvo6RxYyv0anK4MZQpzlZnlF3t2huqWdptVRUsDR9snaawpW827WLx3qm0pshhBszoyORyoszqh+z3K4rmR4ofihhqlO4Om/HAAANl0lEQVR4nO2daVvbSBaFvYhAWAXCQLwKbGwjg1gtszkmnQ7d03QyncxMp///L5kqqbRUqap0JYvHxtL5ZCdCll7fOrXdKxcKb1tXHz+czPoa5lm7mqJ/uJr1VcyvdpViUdHf3cz6OuZVmE+xqBkPs76QOZXDp1g0irezvpS5lMunWNQ/3s/6YuZQPh9kQ7tns76cuVOADyJkHPdnfUFzJooPMmrlbtZXNF9i+CCjvsxHQwGF+BSVXu5CvsJ8itrBrC9qjsTho7yb9UXNkXI+cuV85Mr5yJXzkSvnI1fOR66cj1w5H7lyPnLlfOTK+ciV85Er5yNXzkeunI9cOR+5cj5y5XzkyvnIlfORK+cjV85HrpyPXDkfuXI+cs2Wz9X19ZxnQ0zL52aKZIab7bZhtLdTyQ1tfl5bt5ppnKlQONne9nKep+NztmsY50nzpx80DX+cpl0nPEFAvz4/r611Bt3pz1Q4O2wrSvuQfO/T8OkfGDg7uJ0oLe/x0nA/0LicMkX9yz/PW2tr79dXOr/VpjtToX+s20QU3Umlm4LPbZHcoWLEzog5+9AOfqT3dSVR9ffnrS3M5/3yytLpv6rJz1Qo3Bmae02ahlPpEvO5Otf9PzGUxzhX0X/XYz5W6b1LmPnY/Pyys0P4rC+tIELjxDZ04sc0ieuTMB4Qn5tt5g71c3hHdK1p4U91vq7Y+nXvecfns7yCAHU2k9nQ2aEeSjY0whcK4fNghO5Q0YEd0clH3ofii4nv9F/+eNnbCfDZWMKAljq/jeKeyTOeaEXyebzk3iGoIzrbbQsvI67TV//9smfj8fngAEKANk//jGlDdwonphPxuaKtNSjjY1QEHLPGw3x07wBuQ3+9rK6yfDY2bT5Lm8unX8EnwjGtyy4rBp+wtVJ/Ku+IbnnGQ0vTgHUg316OVjl8SAAtbW52OnUgHTzigeOR8rnWI+5Q6QlT8O/PQV+ScQ6oA0HGs7rK5bNJWtgmCiGQDTmjuFT4CK01KI1fCYQmE1D/i5xyIOM5OhLw8QNoc3kDYEO3RbDxRPDh9H988QoSH+J8SYq8HO0vREfMZ8kDtLyMCMltCBjTAD79Y3gjVXpMBDwWAYEXlGTA+e3IkYgPC2hDbENnu/LuQnB3PD534RGPTFo7EAFXH+J/SdwgRBr98RLBZ9N2IGJBNiGBDfUPYtmyJw6fe4jx0DKKpK/vv4MOvJjL0LdDTm8bTySfpYAFYUAbF585NnQbN6a9C2P5nO0mukP9EEdA/zKu/3nSigyg+vPREZSP18IwoPXTL8w9JYppRyyf22TfP+6IUCO7TvgtYTHrApPvAxgfBtAGAvSdjqCrJMbj3hbN5+pT8hvsnRS2k19IUdmlruTrYLgTg0/AgjY2h7RLbycO6hCfhylOpR2nyWc8GAzi8fEANYb0nP7DNFdF8zmYBvV22nzWYvDxO/mVclb4DOLw8VpY+Y3yMXRdZt8snw7isx6HDwG0EpOPfBodh4+mSzs3OR9Nu7vpy4bWPD6D1Xh8cAsrx+KjGdfSZRg4H6X37ur+ULgcJOfj7hBIpmZcPh0Yn30f0H4cPkobr4TLljzAfMgUQLCcaJ9KyCf4sAbh1J7LZ7AH4+MDKsfg401rxGsVQD5G0ZtCPmiCjxPyYVYaBfOXEJ9Oxw+gqPa17zaxBpyPpgTWZq4FU04QH0UProTeCGYgIj56aKX6jjfcZ/j8ctqxCe3A+LiAylA+Su+YOii0SQPnE1pJ50eAcc3lo3MWL044gLh8OqSPj+bjAGpA+WjhteEr3nEAPprbOkZmyd3R5Uy0NKXP5XMexlMonEP5dAZbMfjsl4F8UKwDryqSj3tE1aqUSqo1Iadi90TbuzcFHh/lkHclvJ1cPp/OAMgHA2o0gP6j0Y1LAjKSDzlVV1VLWGqryTkVWWdPk8+FC2gLxqexj8KnYROaAR/LoYMBlUKn8h6Uky6fU2JBqzA+DRw+tmbBp+TJZE4V2OVJm49D6BTIpzGPfKhdwvT5YEKoj3+zfOix31R86C7l84UL6LTceKt82CyFdPkQQqjT3jp6Q3w8fw5vOoD58A5k+DxdEEK4x55/Pn7/pZJTtcObVunzubiwRzTr/PwElk95Oj7soC4GH3t0iFVxRojXny4584Y0+fzt4Ok4Q2JY/JTLs+KDZxcqHvy4MwxuVsEr8HHwlJehfPZBfPjb6h9Dx0HmF94EqlZSI5L9UuXz9PR08TQgfMp7MD5l/AowP1XC6W/9Y87kEzA/VbwuvBmVQJJm//XjCQNy8ZRXgHwa6CVkfSOUh81POoCsb0Qkir0mn32PT3kHxqcM5MPkYYuSDmDrh5JEsVfl44cPum8gHxRAAxCfwBNoxUkH0PVn2LNaU+TzH8ynHNTaKohPGczHS3+TJN3B9y+i81VT9WfE58cpxacB5FOG88FL9PeSLYdY+18AG0o1fn7Q4YMGia/AB00CpDknsfZPI20oXT4Dhk8ZyKcch0+EYu4va7rUhtLk8182fNAgcQ/GZ5b771Ib4vHZhR7I8tkP8SkD42em+QmKLrYhzm33uAnSj70oPv/7O4ynvLIH4vOTLpw7nIIPM1F7hCTqiW0ozKcnyK8OVy6wWy6NIQfQFoTPsBT5ZYD1iVmjOAdlEGoG34ZYPgZvku/ohE3WDm1JWT/DfPYBfIYt9rNEm8fR9xnOzAZWRvHLSGk+GmcSGBBTZRTespuYYUJrUXx+WpxJ4s12krRTL+mEkqxoKygno1fMJ/qHfuhkad6W5pdQI2vI1w+HFUGVylX82gKhz4IqU2wALN4AH87qYlhngXwi/pZvlw2hdQmf4VBS5QSotwpKWmcNLDAI2ZDHB1zF7VfJCiplmqwNifl8DxkPrQN4HrQWTjqh1Aeeq03fFOET6ykAbgGvsNJqUqIIbe7w+fyMLm+CWoeTVpbGuRQ6O8PmE/cXxogNSSr1aBvixs9AZDy0TiD9M89ZOQKUS2ka3YwwH+DZg7LrI/j+Q9Qa+oRWdkJ8BgNoeWXhLsqGAqlyUYqwtPAvHD309GKix0c8Fo2etEwuaENrDJ/B9zjlufKiWqpWK/pcktxXpccp0L5L/MNrd1HrbxPVJbRP84ld3n0mzMIN1fpF6kZQdaeA+u905dnQ+pbPJ8njAdhnS7hK9OOVXBvSAYuJryBiQw2PT2f5m+jYSW0kiauHsHUYlwmDP1R8ZxRn9cNh1T/tRrbs8Nk4/UX0eJKRWVHVSkv89BI2D5vO0Y2n/kFwIqBNcabpNar8xAGE+Kxf/C4KkObY2Q1XK5INzeCUQ+kdTvVkK9+G4ltY2qojG1pae3/xD1tG6albCWQDSh6i5DUMHfKYArmcGk7EeQ6esfZ1OLxYExpPreTQIZC8lFuOnIZBJdIn1+Nlu5f4+WPpqlr/JnKWCcnEUc1R3QUlsaGz7eJlar9TeT8HsSNXs0WMR60571TnnWR4naUf8aw7Sdq+LbtpS1IbyopGbnsKLiHaaUt+Xld2NXFDxWQG1CSopDa08JJZTbOlRtvQYsszHn6MCGMrG/I9Rjjj8r0pczZUhQVHRm2oSQqv1FKUufhjI+rIWsvqTvWY0rkWmUyoKiQqAmNr95+qZr3ZHJkLOjqaRBsPLd+GCM5Sc1SvTwrWQvp2NUGvVCfjANN5VytY3Vqj0LRe6RJnKjPJqIbYkJPqjsLIqjUrhULy5wDPryb4RkHGw/ydY0P4JQqbsWkiVK0FtOgaLghJZBwt/JeYCMKCrKdhg1o4YT6VyO+9yYmvustn0sJ8Ks1JGg+znzdx+Ewmk5HHo1lrmWoFSTVbNeo4j0+ha5vXZBHDh8OniWmQLA48Yw0U9VETC59PoW5161ZE4scbFYePbdj2y5EPhyiwlxHgg0YJC2jNtmR8RhU3cLDIay9MKD4LKxkfsv2FGg9S13IGhV4OTOb54P8KNijnH5zS9ELOxy5Hp4tB7QZXIR6deT52+NAA7DEhmYrkfDAfemCIZyPq2HmdeT6lUPtCbc6yzDx+HD64MZVUsz7hT14zz2fiLqWqJdTFj6oMpszzcQLIGyJWEKVRgFHOp9Cq0PMLRGnszcByPqiJjSsqPQfz0xZyPrZG3TFe4PAxuYByPoF/m4xqLcvdHCSLGjkfRs2RveisOhtdWefTRWPBECYMiMDLOh8T9+m8w3M+NgKLt7OR8/HbF/Yads3d8ifwWedDdg6po21mZAEo63ycxxGqpS4pUWlO6nYmg0piKvN8mqq7rYOGh/YWWHD4k/MpVE12ewfTcg/O+fgP9PZnX34mQ84Hv6lbZPsLL3CYwSS6nA95Xx3V6vV6bcSsI2aDD96yodN/xPMvSlWcWKUuYEYUraY9ygmmj4H4kASyhUzZoNUiqYR+Nqoa3rZgRfKgYc9beOOymKT4emAPkC8v1X4RE6LCcitNK3b+YF2NCAxgqv0CyUuKRz04GfCIj+0CygkXTm5tjjsMFDacmrzGZ3FVC8wlVFNwUKbrCOumGxtj/gHVcdaMh9GoZZqm1RXEhms8lSwZD1i1bFZ+iTQaU1GUaeMJa2RVgj2UZzx5ATxWs+QU55B9QM94oiYdmZE/Qp4EnlQyXvi1DLg8vxmbqo8qly+3GD43HoHcSZltPHmfzpHTyFRw3W72VLNKZmvOjOf/D0c3zfDBA88AAAAASUVORK5CYII=',
    },
    {
      title: 'Agile',
      description: 'UI/UX design and collaboration tool',
      image:
        'https://www.aerospacewalesforum.com/wp-content/uploads/Agile-Logo.png',
    },
  ];

  const changeSlide = (action) => {
    action === 'PREV'
      ? setSlideIndex((slideIndex + 1) % slides.length)
      : setSlideIndex(slideIndex === 0 ? slides.length - 1 : slideIndex - 1);
  };

  const getSlideStyle = (index: number, active) => {
    const selected = {
      left: '40%',
      // zIndex: 2,
    };
    const previous = {
      left: '18%',
      transform: `perspective(1000px) rotateY(45deg)`,
    };
    const next = {
      left: '62%',
      transform: `perspective(1000px) rotateY(-45deg)`,
    };
    const first = {
      left: '0%',
      transform: `perspective(1000px) rotateY(45deg)`,
    };
    const last = {
      left: '80%',
      transform: `perspective(1000px) rotateY(-45deg)`,
    };

    const getIndicator = (number: number) =>
      (slideIndex + number) % slides.length;

    console.log('slideIndex', slideIndex);

    switch (index) {
      case getIndicator(3):
        return first;
      case getIndicator(4):
        return previous;
      case getIndicator(0):
        return selected;
      case getIndicator(1):
        return next;
      case getIndicator(2):
        return last;
    }
  };

  const useTilt = (active) => {
    const ref = useRef<any>(null);

    useEffect(() => {
      if (!ref.current || !active) {
        return;
      }

      const state = {
        rect:
          ref && ref.current ? ref.current!.getBoundingClientRect() : undefined,
        mouseX: undefined,
        mouseY: undefined,
      };

      const handleMouseMove = (event) => {
        if (!ref.current) return;
        if (!state.rect) {
          state.rect = ref.current.getBoundingClientRect();
        }

        state.mouseX = event.clientX;
        state.mouseY = event.clientY;
        const px =
          (state.mouseX! - state.rect.left) / state.rect.width - positionNumber;
        const py = (state.mouseY! - state.rect.top) / state.rect.height - 0.5;

        ref.current.style.setProperty('--px', px);
        ref.current.style.setProperty('--py', py);
      };

      setPositionNumber(2);

      ref.current.addEventListener('mousemove', handleMouseMove);

      return () => {
        ref.current &&
          ref.current.removeEventListener('mousemove', handleMouseMove);
      };
    }, [active]);

    return ref;
  };

  return (
    <Wrapper id={id}>
      <Slides>
        {slides.map((slide, i) => {
          const offset = slideIndex - i;
          const active = offset === 0 ? true : null;

          // eslint-disable-next-line react-hooks/rules-of-hooks
          const ref = useTilt(active);

          const dir: number = offset === 0 ? 0 : offset > 0 ? 1 : -1;
          const { image } = slide;
          return (
            <Slide active={active} key={i}>
              <SlideBackground active={active} backgroundImage={image} />
              <SlideContent
                backgroundImage={image}
                active={active}
                dir={dir}
                offset={offset}
                style={getSlideStyle(i, active)}
                ref={ref}
              >
                <SlideContentInner active={active}>
                  <SlideTitle>{slide.title}</SlideTitle>
                  <SlideDescription>{slide.description}</SlideDescription>
                </SlideContentInner>
              </SlideContent>
            </Slide>
          );
        })}
        <ButtonWrapper>
          <Button onClick={() => changeSlide('PREV')}>‹</Button>
          <Button onClick={() => changeSlide('NEXT')}>›</Button>
        </ButtonWrapper>
      </Slides>
    </Wrapper>
  );
};

export default Slider;
