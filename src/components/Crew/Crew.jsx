import React, {useState} from 'react';

// Components
import Navbar from '../Navbar/Navbar';

// Data
import data from '../../data.json';
const crewData = data.crew;

const Crew = () => {
    const [data, setData] = useState(crewData);
    const [value, setValue] = useState(0);

    const {name, images, role, bio} = data[value];

    return (
        <body className='crew'>
            <Navbar />
            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span aria-hidden="true">02</span>Meet your crew</h1>

                <div className="dot-indicators flex">
                    {data.map((item, index) => (
                        <button 
                            key={index} 
                            aria-selected={`${index === value ? "true" : "false"}`}
                            onClick={() => setValue(index)}
                        >
                            <span className="sr-only">{item.name}</span>
                        </button>
                    ))}
                </div>
                <article className="crew-details flow">
                    <header className="flow flow--space-small">
                    <h2 className="fs-600 ff-serif upppercase">{role}</h2>
                    <p className="fs-700 uppercase ff-serif">{name}</p>
                    </header>
                    <p>{bio}</p>
                </article>
                <picture>
                    <source srcSet={images.webp} type="image/webp" />
                    <img src={images.png} alt={name} />
                </picture>
            </main>
        </body>
    )
}

export default Crew
