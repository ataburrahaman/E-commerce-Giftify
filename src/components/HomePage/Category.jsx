import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Link } from "react-router-dom";
import "./Style.css";

export const HomePageCategory = () => {
  return (
    <div>
      <div className='flex-center'>
        <h2 className='category-header'>Special Category</h2>
      </div>
      <div className='category-container'>
        <div className='category__grid'>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>Birthday Gifts</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>Children Gifts</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>Christmas</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div>
                <div className='category-name'>Valentine Gifts</div>
                <div></div>
              </div>
            </Link>
          </div>

          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>Anniversary Gifts</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>New Years Gifts</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div className='category-name'>Welcome Gifts</div>
            </Link>
          </div>
          <div class='column col-lg-3 col-md-4 col-sm-6'>
            <Link to='/products/women'>
              <div className=' category'>
                <img
                  src='https://capricathemes.com/prestashop/PRS13/PRS130316/modules/cz_categoryimagelist/views/img/3-cz_categoryimagelist.jpg'
                  className='img-category'
                ></img>
              </div>
              <div>
                <div className='category-name'>Engagement Gifts</div>
                <div></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
