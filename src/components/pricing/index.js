import React, { Component } from 'react';
import Zoom from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {

  state = {
    prices: [800, 1800, 3800],
    positions: ['Balcony', 'North End', 'VIP Suit'],
    desc: [
      'Praesentium, possimus libero? Nihil ut suscipit vero dolor, natus rem, voluptatibus perspiciatis!',
      'Nihil eos earum architecto dolor quasi autem ea, non quam repellat in est atque pariatur nostrum impedit optio.',
      'Earum saepe mollitia eveniet nisi? Quia adipisci iusto quo similique? Expedita dolore quo deserunt?'
    ],
    linkTo: [
      'http://sales/b',
      'http://sales/n',
      'http://sales/v'
    ],
    delay: [500, 0, 500]
  }

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">{this.state.desc[i]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;