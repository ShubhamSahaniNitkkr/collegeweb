import React from 'react';

export default function Title({ name, title }) {
  return (
    <p className='textcenter pt4 fs25'>
      {name} {title}{' '}
    </p>
  );
}
