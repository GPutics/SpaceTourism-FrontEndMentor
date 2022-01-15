import React, {useState} from 'react';

// Components
import Navbar from '../Navbar/Navbar';

// Data
import data from '../../data.json';
const destData = data.destinations;

const Destination = () => {
    const [data, setData] = useState(destData);
    const [value, setValue] = useState(0);

    const {name, images, description, distance, travel} = data[value];

    return (
        <body className='destination'>
            <Navbar />
            <main id="main" className="grid-container grid-container--destination flow">
                <h1 className="numbered-title">
                    <span aria-hidden="true">
                        01
                    </span>
                    Pick your destination
                </h1>
                
                <div 
                    className="tab-list underline-indicators flex"
                    role="tab-list"
                    aria-label="destination list"
                >
                    {data.map((item, index) => (
                        <button
                            key={index}
                            className="uppercase ff-sans-cond text-accent letter-spacing-2" 
                            role="tab" 
                            aria-selected={`${index === value ? "true" : "false"}`}
                            onClick={() => setValue(index)}
                        >{item.name}</button>

                    ))}
                </div>
                
                <picture>
                    <source srcSet={images.webp} type="image/webp" />
                    <img src={images.png} alt={name} />
                </picture>

                <article className="destination-info flow" role="tabpanel">
                    <h2 className="fs-800 uppercase ff-serif">{name}</h2>

                    <p>{description}</p>

                    <div className="destination-meta flex">
                        <div>
                            <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                            <p className="ff-serif uppercase">{distance}</p>
                        </div>
                        <div>
                            <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                            <p className="ff-serif uppercase">{travel}</p>
                        </div>
                    </div>
                </article>
            </main>
        </body>
    )
}

export default Destination
