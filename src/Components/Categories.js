import React from 'react';

export default function Categories({ filter, categories }) {

  return (
    <div className="buttons">
      {
        categories.map((cat, i) => {
          return <button className="btn-port" type="button" onClick={() => filter(cat)} key={i}>{cat}</button>
        })
      }
    </div>
  )
}