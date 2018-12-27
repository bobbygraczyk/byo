import React, { Component } from "react";
import "./App.css";
import GoogleLogin from "react-google-login";
import Header from "./components/header";
import Card from "./components/product_card";
import MultiButton from "./components/buttons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      scrolled: false
    };
    this.scrollEvent = this.scrollEvent.bind(this);
    this.bodyRef = React.createRef();
  }
  componentDidMount() {
    this.bodyRef.addEventListener("scroll", this.scrollEvent);
  }

  scrollEvent() {
    if (this.bodyRef.scrollTop === 0) {
      this.setState({ scrolled: false });
    } else {
      this.setState({ scrolled: true });
    }
  }
  render() {
    return (
      <div className="App">
        <Header scrolled={this.state.scrolled} />
        <div
          ref={x => (this.bodyRef = x)}
          className="info-body"
          style={{
            top: this.state.scrolled ? "60px" : "100px",
            height: `calc(100vh - ${this.state.scrolled ? "60px" : "100px"})`
          }}
        >
        <div id="top" />
          <div class="content-section">
            <div id="hero-intro">
              Beautiful and discrete
              <br />
              roll-off roof observatories
            </div>
            <div id="scroll-indicator">⮋</div>
          </div>
          <div class="content-section" id="testimonials">
            <div id="about">
              <div class="half-width">
                <h4>
                  "BYO, Scott Horstman traveled from Ohio to Montana to build my
                  Dobservatory; an Observatory adapted for Dobs. It has 3 foot
                  high walls, and one drop-down wall towards the East. The roof
                  is motorized. The size is 10'X10'. It houses a 16" Dob. I have
                  never seen an individual work so quickly, & with no written
                  plans, he amazingly had it completed in one weekend, including
                  wiring it! Mine is in the second Winter, and absolutely no
                  problems of any kind have emerged. What makes Scott so special
                  in this type of construction, is that he also is an
                  Astronomer, so he is aware of the needs of others, while
                  building their Observatories. He also is the friendliest
                  person you could ever hope to meet! His wife Diane, that
                  handles the office end of the business, is an encyclopedia of
                  information, when you are trying to decide what you want &
                  need in your Observatory. I cannot begin to thank the
                  Horstman's for making my viewing so easy and a pleasure in my
                  Dobservatory. "
                </h4>
                <br />
                Carol A., Helena, MT
              </div>
              <div class="half-width">
                <h4>
                  "Just wanted to take the time (6 weeks later) to let you know
                  just how FANTASTIC my new Observatory is working out... I have
                  probably observed more in the last 6 weeks, than in the
                  previous 18 months! Seriously! It is wonderful how quickly I
                  can go from "wow, skies look clear right now" to observing and
                  photographing - literally 2-3 minutes! Everything is already
                  setup, I just loosen the turnbuckles, roll the roof back, and
                  power up. And lets not talk about how great it is at
                  Oh-dark-thirty in the AM to just turn off the mount, and roll
                  the roof closed, and head in for sleep. Like 1-2 minutes!
                  Fabulous! Having an insulated warm room is going to be
                  wonderful come winter! You, Kenny and Jay were awesome to work
                  with, timely in your arrival, highly professional in your
                  building skills and product - and most important and enjoyable
                  to me - really LOVE astronomy. I enjoyed viewing in the
                  evenings with you as well."
                </h4>
                <br />
                Dave W., Bolton, MA
              </div>
            </div>
          </div>
          <div class="content-section" id="products">
            <br />
            <h3> Our Products</h3>
            <MultiButton />
            <br />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
            <Card
              type="observatory_no_warmroom"
              image="http://www.iowabarnfoundation.org/2016px/rimathe-barn.jpg"
              title="CJE Max"
              description={`15'6" x 15'6" roll-off roof observatory (Warm room 15'6" x 5'6")`}
              priceOne="$8,450"
              priceTwo="$5,940"
            />
          </div>
          <div class="content-section" id="about-us">
            <br />
            <h3>About Us</h3>
            <p>
              Backyard Observatories has been building roll-off roof
              observatories for amateur astronomers, clubs, schools, and
              government facilities since the Spring of 2003. Our company has
              continually evolved its product lines to offer more options to
              better suit the diverse needs of our customers. Combining the
              construction expertise of Scott Horstman; the mechanical and
              electrical engineering skills of Don Cilibraise, who designs and
              manufactures all of Backyard Observatories motors, piers, and
              components; Chris Hetlage and Chuck Faranda’s programming and
              software skills in the creation of our m1 OASYS roll-off roof
              observatory automation system; and Diane Horstman's knowledge of
              astronomer's observing needs to help design your custom
              observatory, we have assembled a team, second to none, to make
              your access to the heavens a touch of a button.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
