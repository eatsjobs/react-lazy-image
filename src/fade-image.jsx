import React, { Component } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';

import isInViewport from './isInViewport';
import style from './fade-image.css';

export default class FadeImage extends Component {
    constructor(props) {
        super(props);

        this.onImgLoad = this.onImgLoad.bind(this);
        this.onImgError = this.onImgError.bind(this);
        this.scrollHandler = throttle(this.scrollHandler.bind(this), 200, { leading: true });
        this.state = {
            src: this.props.src,
            isLoaded: false
        };
    }

    onImgLoad() {
        this.setState({ ...this.state, isLoaded: true });
        window.removeEventListener('scroll', this.scrollHandler);
    }

    onImgError() {
        this.setState({ ...this.state, isLoaded: false });
        window.removeEventListener('scroll', this.scrollHandler);
    }

    componentDidMount() {
        this.scrollHandler();
        window.addEventListener('scroll', this.scrollHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollHandler);
    }

    scrollHandler() {
        if (isInViewport(this.refs.container) && !this.state.loaded) {
            //console.log("Append img src", this.props.src);
            this.loadImage();
        }
    }

    loadImage() {
        this.imageElement.src = this.state.src;
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.src !== nextProps.src) {
            this.setState({ isLoaded: false, src: nextProps.src }, this.loadImage);
        }
    }
    render() {
        //console.log("Render!");
        let imageClasses = [style.fadeImg];
        let loaded = this.state.isLoaded ? style.loaded : null;
        imageClasses.push(loaded);

        /**
         * Padding bottom image is a trick to calculate the space
         * that the image will cover in document
         * http://davidecalignano.it/lazy-loading-with-responsive-images-and-unknown-height/
         */
        let theStyle = {};
        let width, height;
        if (this.props.ratio) {
            [width, height] = this.props.ratio.split(':');
        } else if (this.props.height && this.props.width) {
            width = this.props.width;
            height = this.props.height;
        }

        const result = ((height / width) * 100);
        theStyle = { paddingBottom: `${result}%` };

        return (
            <div ref='container' className={style.container} style={theStyle}>
                {this.state.isLoaded ? null : this.props.loaderComponent}
                <img ref={(image) => this.imageElement = image} className={imageClasses.join(' ')}
                    onLoad={this.onImgLoad}
                    onError={this.onImgError}
                    style={this.props.style}
                    alt={this.props.alt}
                />
            </div>
        )
    }
}

FadeImage.propTypes = {
    src: PropTypes.string,
    ratio: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    loaderComponent: PropTypes.element
}

FadeImage.defaultProps = {
    src: '',
    ratio: '4:3',
    loaderComponent: null
}