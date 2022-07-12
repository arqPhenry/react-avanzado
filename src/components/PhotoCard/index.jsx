import React from 'react';
import { Figure, Image, Button, Article, ButtonList } from './styles.js';
import { MdFavoriteBorder, MdOutlineCategory, MdFavorite } from 'react-icons/md';
import { useLocalStorage } from '../../hooks/useLocalStorage.js';
import { useNearScreen } from '../../hooks/useNearScreen.js';

// const defaultImage = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

const PhotoCard = ({ id, likes, src }) => {
  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);
  const [showCard, element] = useNearScreen();

  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  return (
    <Article ref={element}>
      {showCard &&
        <>
          <a href={`/detail/${id}`}>
            <Figure>
              <div>
                <Image src={src} alt={`image-${id}`} />
              </div>
            </Figure>
          </a>
          <ButtonList>
            <Button type='button' onClick={() => setLiked(!liked)}>
              <Icon size='16px' />{likes}
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
