import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

class Discount extends Component {

  state = {
    discountStart: 0,
    discountEnd: 26
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()
    }, 50)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.percentage()}>
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase tickets before 28 February</h3>
              <p>
                Quam sunt illo at? Ullam, velit earum? Explicabo, obcaecati. Vel in rerum, possimus deserunt odio nam aliquam, earum id, repellendus quo ullam? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ipsam totam impedit eaque facilis, asperiores repellat nostrum nulla tempore hic cupiditate ea quisquam, qui ad, cum quidem sed labore error!
            </p>

              <MyButton
                text="Purchase tickets"
                bck="#ffa800"
                color="#ffffff"
                link="http://www.google.com"
              />
            </div>
          </Slide>
        </div>
      </div >
    );
  }
};

export default Discount;