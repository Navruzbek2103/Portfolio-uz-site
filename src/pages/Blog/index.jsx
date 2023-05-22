import React from 'react'
import "./style.scss"
import allBlogs from './Blogs.js'
import { Link } from 'react-router-dom'
import cardImage from "./../../assets/images/blog-page/blog-section-card-image-10.png"

const index = () => {

  let slicedBlogs1 = allBlogs.slice(0, 9)
  let slicedBlogs2 = allBlogs.slice(9, 16)

  const statusGuides = {
    backgroundColor: "#E6F4FF",
    color: "#0394FC",
  }

  const statusNews = {
    backgroundColor: "#FFF1E8",
    color: "#DD7437",
  }

  const statusReviews = {
    backgroundColor: "#EEEAFE",
    color: "#603FE2",
  }



  return (
    <div className='blog-page'>
      <div className="container">
        <div className="blog-page__top">
          <h2 className="blog-page__top-title">Blog & News</h2>
          <p className="blog-page__top-text">Company and car market news, as well as car selection guides and car reviews from our authors.</p>
        </div>
        <div className="blog-page__wrapper">
          <div className="blog-page__wrapper-left">
            <ul className="blog-page__wrapper-left-topList">
              <li className="blog-page__wrapper-left-topItem">Categories:</li>
              <li className="blog-page__wrapper-left-topItem" title='All the news on this site'>News</li>
              <li className="blog-page__wrapper-left-topItem" title='All guides on this site'>Guides</li>
              <li className="blog-page__wrapper-left-topItem" title='All reviews on this site'>Reviews</li>
            </ul>
            <ul className="blog-page__wrapper-left-cardList">
              {
                slicedBlogs1.map(({ cardId, cardImg, cardType, cardTitle, cardDesc }) => {

                  return (
                    <li className="blog-page__wrapper-left-cardItem" key={cardId}>
                      <Link to={cardTitle.split(" ").join("-")} className='blog-page__wrapper-left-cardItem-link'>
                        <div className="blog-page__wrapper-left-cardItem-link-imgBox">
                          <img src={cardImg} alt="card image" className="blog-page__wrapper-left-cardItem-link-imgBox-img" />
                        </div>
                        <div className="blog-page__wrapper-left-cardItem-link-content">
                          <p className="blog-page__wrapper-left-cardItem-link-content-status" style={cardType === "Guides" ? statusGuides : cardType === "News" ? statusNews : cardType === "Reviews" ? statusReviews : null}>{cardType}</p>
                          <h3 className="blog-page__wrapper-left-cardItem-link-content-title">{cardTitle}</h3>
                          <p className="blog-page__wrapper-left-cardItem-link-content-text">{cardDesc}</p>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }

            </ul>
            <div className="blog-page__wrapper-left-pagination">Pagination is place</div>
          </div>
          <div className="blog-page__wrapper-right">
            <h3 className="blog-page__wrapper-right-title">Featured posts</h3>
            <ul className="blog-page__wrapper-right-list">
              {
                slicedBlogs2.map(({ cardId, cardImg, cardType, cardTitle }) => {
                  return (
                    <li className="blog-page__wrapper-right-item" key={cardId}>
                      <Link to={cardTitle.split(" ").join("-")} className='blog-page__wrapper-right-item-link'>
                        <div className="blog-page__wrapper-right-item-link-imgBox">
                          <img src={cardImg} alt="card image" className="blog-page__wrapper-right-item-link-imgBox-img" />
                        </div>
                        <div className="blog-page__wrapper-right-item-link-content">
                          <p className="blog-page__wrapper-right-item-link-content-status" style={cardType === "Guides" ? statusGuides : cardType === "News" ? statusNews : cardType === "Reviews" ? statusReviews : null}>{cardType}</p>
                          <h4 className="blog-page__wrapper-right-item-link-content-title">{cardTitle}</h4>
                        </div>
                      </Link>
                    </li>
                  )
                })
              }


            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index;