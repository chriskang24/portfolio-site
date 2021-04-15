import { React, useState } from 'react';
import Title from '../Components/title';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import portfolios from '../Components/allPortfolios';


const allCategories =['All', ...new Set(portfolios.map(item => item.category))];

export default function PortfoliosPage() {

  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {

    if (category === 'All') {
      setMenuItems(portfolios)
      return;
    }

    const filteredData = portfolios.filter(item => {
      return item.category === category;
    })
    setMenuItems(filteredData);
  }

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={'Portfolios'} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  )
}