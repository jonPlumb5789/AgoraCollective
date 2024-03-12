import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import skelebutler from '../../assets/skelebutler.webp';
import skeledrink from '../../assets/skeledrink.webp';
import cheeseburgerman from '../../assets/cheeseburgerman.png';
import './Gallery.css';

const Gallery: React.FC = () => {
    return (
        <div>
            <h1>Image Gallery</h1>
            <Carousel>
                <div>
                    <img className="legendimage" src={skelebutler} alt="Image 1" />
                    <p className="legend">Image 1</p>
                </div>
                <div>
                    <img className="legendimage" src={skeledrink} alt="Image 2" />
                    <p className="legend">Image 2</p>
                </div>
                <div>
                    <img className="legendimage" src={cheeseburgerman} alt="Image 3" />
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
        </div>
    );
};

export default Gallery;