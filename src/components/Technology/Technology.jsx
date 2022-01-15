import React, {useState} from 'react';

// Components
import Navbar from '../Navbar/Navbar';

// Data
import data from '../../data.json';
const techData = data.technology;

const Technology = () => {
    const [data, setData] = useState(techData);
    const [value, setValue] = useState(0);

    const {name, images, description} = data[value];

    return (
        <body className='technology'>
            <Navbar />
            <main id='main' className='grid-container grid-container--technology flow'>
                <h1 className="numbered-title"><span aria-hidden="true">03</span>Space launch 101</h1>

                <div className="number-indicators flex">
                    {data.map((item, index) => (
                        <button 
                        key={index} 
                        aria-selected={`${index === value ? "true" : "false"}`}
                        onClick={() => setValue(index)}
                        >
                                {index + 1}
                        </button>
                    ))}
                </div>
                <article className="technology-details flow">
                    <header className="flow flow--space-small">
                        <h2 className="text-accent fs-600 ff-serif upppercase">The terminology...</h2>
                        <p className="fs-700 uppercase ff-serif">{name}</p>
                    </header>
                    <p>{description}</p>
                </article>
                <picture>
                    <source media="(min-width: 45em)" srcSet={images.portrait} type="image/webp" />
                    <img src={images.landscape} alt={name} />
                </picture>
            </main>
        </body>
    )
}

export default Technology
