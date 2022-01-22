import React, { Component } from 'react'
import Header from 'Parts/Header';
import PageDetailTitle from 'Parts/PageDetailTitle';
import { connect } from "react-redux";

import itemDetails from 'json/itemDetails'
import FeaturedImage from 'Parts/FeaturedImage';
import PageDetailDescription from 'Parts/PageDetailDescription';
import BookingForm from 'Parts/BookingForm';
import Categories from 'Parts/Categories';
import Testimony from 'Parts/Testimony';
import Footer from 'Parts/Footer';

import Fade from 'react-reveal/Fade';

import { checkoutBooking } from 'store/actions/checkout';

class DetailsPage extends Component {
  componentDidMount(){
    window.title = 'Details Page';
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data={itemDetails}
        />
        <FeaturedImage data={itemDetails.imageUrls} />
        <section className='container'>
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription data={itemDetails} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm itemDetails={itemDetails} startBooking={this.props.checkoutBooking} />
              </Fade>
            </div>
          </div>
        </section>

        <Categories data={itemDetails.categories} />
        <Testimony data={itemDetails.testimonial} />

        <Footer />
      </>
    )
  }
}

export default connect(null, { checkoutBooking })(DetailsPage);