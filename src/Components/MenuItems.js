import React from 'react';

export default function MenuItems({ menuItem }) {
  return (
    <div className="portfolios">
      {
        menuItem.map(item => {
          return <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-items">
                <li>
                  <a href={item.link}>{item.icon}</a>
                </li>
              </ul>
            </div>
            <h5>
              {item.title}
            </h5>
            <p>Web Development Project</p>
          </div>
        })
      }

    </div>
  )


}