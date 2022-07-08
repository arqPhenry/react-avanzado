import React, { useRef, useEffect, useState } from 'react';
import { Figure, Image, Button, Article, ButtonList } from './styles.js';
import { MdFavoriteBorder, MdOutlineCategory } from 'react-icons/md';

const defaultImage = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes = 0, src }) => {
  const element = useRef(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        console.log('Intersecta');
        setShowCard(true);
        observer.disconnect();
      } else {
        console.log('No intersecta');
        setShowCard(false);
      }
    });
    observer.observe(element.current);
  }, [element]);

  return (
    <Article ref={element}>
      {showCard &&
        <>
          <a href={`/detail/${id}`}>
            <Figure>
              <div>
                <Image src={defaultImage} alt={`image-${id}`} />
              </div>
            </Figure>
          </a>
          <ButtonList>
            <Button type='button'>
              <MdFavoriteBorder size='16px' />{likes}
            </Button>
            <Button type='button'>
              <MdOutlineCategory size='16px' />Dogs
            </Button>
          </ButtonList>
        </>}
    </Article>
  );
};

export { PhotoCard };
