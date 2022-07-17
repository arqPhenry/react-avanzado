import React, { useState } from 'react';

import { Figure, Image, Button, Article, ButtonList } from './styles.js';
import { MdFavoriteBorder, MdOutlineCategory, MdFavorite } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';

const PhotoCardDetail = ({ id, likes, src }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [loadImage, setLoadImage] = useState(true);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article>
      <Figure>
        <Image src={src} alt={`image-${id}`} onLoad={() => setLoadImage(false)} loadImage={loadImage} />
      </Figure>
      <ButtonList>
        <Button type='button' onClick={() => setLiked(!liked)} liked={liked}>
          <Icon size='16px' />{liked ? likes + 1 : likes}
        </Button>
        <Button type='button'>
          <MdOutlineCategory size='16px' />Dogs
        </Button>
      </ButtonList>
    </Article>
  );
};

export { PhotoCardDetail };
