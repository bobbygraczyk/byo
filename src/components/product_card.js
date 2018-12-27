import React, { Component } from "react";

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.type === "observatory_no_warmroom") {
            return(
                <div className="product-card">
                    <div className="product-image" style={{ backgroundImage: `url(${this.props.image})`}} />
                    <h2>{this.props.title}</h2>
                    <p className="description">{this.props.description}</p>
                    <p className="priceOneTitle">Deck</p>
                    <p className="priceTwoTitle">Slab</p>
                    <h4 className="priceOne">{this.props.priceOne}</h4>
                    <h4 className="priceTwo">{this.props.priceTwo}</h4>
                </div>
            );
        } else if (this.props.type === "observatory_warmroom") {
            return(
                <div className="product-card">
                    <div className="product-image" style={{ backgroundImage: this.props.image }} />
                    <h2>{this.props.title}</h2>
                    <h3 className="description">{this.props.description}</h3>
                    <p className="priceOneTitle">Deck</p>
                    <h4 >{this.props.priceOne}</h4>
                    <p className="priceTwoTitle">Slab</p>
                    <h4>{this.props.priceTwo}</h4>
                    <p className="priceThree">Warm Room:</p>
                    <h4>{this.props.priceThree}</h4>
                </div>
            );
        }
    }
}

export default Card;