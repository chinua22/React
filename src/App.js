import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Style.css";

const imgUrls = [
    "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/635499/pexels-photo-635499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
];

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentImageIndex: 0,
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index,
        });
    }

    render() {
        return (
            <div className="carousel">
                <div>
                    <FontAwesomeIcon
                        id="move"
                        icon={faChevronLeft}
                        onClick={this.previousSlide}
                    />
                    <img src={imgUrls[this.state.currentImageIndex]} />
                    <FontAwesomeIcon
                        id="move1"
                        icon={faChevronRight}
                        onClick={this.nextSlide}
                    />
                </div>
            </div>
        );
    }
}
//
export default App;
