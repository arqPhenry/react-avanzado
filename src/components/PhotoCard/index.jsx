import React from 'react';
import { Figure, Image, Button, Article, ButtonList } from './styles.js';
import { MdFavoriteBorder, MdOutlineCategory } from 'react-icons/md';

const defaultImage = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes = 0, src }) => {
  return (
    <Article>
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
    </Article>
  );
};

export { PhotoCard };
