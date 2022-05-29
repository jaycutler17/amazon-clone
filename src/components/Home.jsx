import React from "react";
import '../Home.css';
import Product from "./product";


function Home() {
    return (
        <div className="home-container" >
            <div className="img-container">
                <img src="https://m.media-amazon.com/images/I/41DBEGWHYmL._SX1500_.jpg" alt="" className="home-img" />
                <div className="products-row">
                    <Product 
                        id="91245993"
                        title="realme 9i (Prism Black, 64 GB)  (4 GB RAM)"
                        image='https://m.media-amazon.com/images/I/51u9-q9539L._SX569_.jpg'
                        price={19.99}
                        rating={3}
                    />
                    <Product 
                        id="35456545"
                        title="2020 Apple MacBook Air Laptop: ATouch ID. Works with iPhone/iPad; Gold"
                        image="https://images-eu.ssl-images-amazon.com/images/I/71jG%2Be7roXL._AC_UL400_SR300,400_.jpg"
                        price={1000.19}
                        rating={4}
                    />
                </div>
                <div className="products-row">
                    <Product 
                        id="12453456"
                        title="Bulls, Bears and Other Beasts: A Story of the Indian Stock Market "
                        image="https://images-na.ssl-images-amazon.com/images/I/51F+lSfnueL._SX321_BO1,204,203,200_.jpg"
                        price={11.00}
                        rating={4}
                    />
                    <Product
                        id="12345455"
                        title="Noise ColorFit Pro 3 Assist Smart Watch with Alexa Built-in, 24*7 Spo2 Monitoring, 1.55 HD TruView Display, Stress, Sleep, Heart Rate Tracking (Rose Pink)"
                        image="https://m.media-amazon.com/images/I/613p9ugUBtL._SY450_.jpg"
                        price={29.14}
                        rating={4}
                    />
                    <Product
                        id="32145456"
                        title="Nike Boy's Air Force 1 Low Youths Trainers"
                        image="https://m.media-amazon.com/images/I/61XuAfLfsfL._UX625_.jpg"
                        price={201} 
                        rating={4}
                        />
                </div>
                <div className="products-row">
                    <Product
                        id="24514356"
                        title="Sony Bravia 215 cm (85 Inches) 4K Ultra HD Smart LED Google TV KD-85X85J (Black) (2021 Model) | with Alexa Compatibility"
                        image="https://m.media-amazon.com/images/I/81mxentP+bS._SX569_.jpg"
                        price={4299}
                        rating={4}
                    />

                </div>

            </div>
        </div>
    );
}

export default Home