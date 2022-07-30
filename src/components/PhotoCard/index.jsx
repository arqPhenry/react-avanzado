import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Figure, Image, Button, Article, ButtonList } from './styles.js';
import { MdFavoriteBorder, MdOutlineCategory, MdFavorite } from 'react-icons/md';
import { useNearScreen } from '../../hooks/useNearScreen.js';
import { useToggleLikeMutation } from '../../containers/ToggleLikeMutation';

const PhotoCard = ({ id, likes, liked, src }) => {
  const [showCard, element] = useNearScreen();
  const [loadImage, setLoadImage] = useState(true);
  const Icon = liked ? MdFavorite : MdFavoriteBorder;

  const { mutation } = useToggleLikeMutation();

  const handleClick = () => {
    mutation({
      variables: {
        input: { id }
      }
    });
  };

  return (
    <Article ref={element}>
      {showCard &&
        <>
          <Link to={`/detail/${id}`}>
            <Figure>
              <div className='imageContainer'>
                <Image src={src} alt={`image-${id}`} onLoad={() => setLoadImage(false)} loadImage={loadImage} />
              </div>
            </Figure>
          </Link>
          <ButtonList>
            <Button type='button' liked={liked} onClick={handleClick}>
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
