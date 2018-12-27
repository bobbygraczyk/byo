import React, { Component } from "react";

class Header extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div 
                id="header"
                style={{ 
                    height: this.props.scrolled ? '64px' : '100px',
                    fontSize: this.props.scrolled ? '1.2em' : '1.8em'
                }}>
                <table class="center">
                    <tr>
                    <td>
                        <a href="">NEWS</a> 
                    </td>
                    <td>
                        <a href="#products">PRODUCTS</a> 
                    </td>
                    <td>
                        <a href="#top">
                        <h2>BYO</h2>
                        </a>
                    </td>
                    <td>
                         <a href="#about-us">ABOUT</a> 
                    </td>
                    <td>
                        <a href="">GALLERY</a>
                    </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Header;