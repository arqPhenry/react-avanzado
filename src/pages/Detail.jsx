import React from 'react';
import { useParams } from 'react-router';
import { PhotoCardWithQuery } from '../containers/PhotoCardWithQuery.jsx';
import { Helmet } from 'react-helmet';

const Detail = () => {
  const params = useParams();

  return (
    <>
      <Helmet>
        <title>PetGram | 📷 Photo detail</title>
        <meta name='description' content='Detailed photo on Petgram' />
      </Helmet>
      <PhotoCardWithQuery id={params.detailId} />
    </>

  );
};

export default Detail;
