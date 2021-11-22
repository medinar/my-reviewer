import "tailwindcss/tailwind.css"
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { definitions } from "../data";

import React from "react";

export default function FlashCards() {
  return (
    <section id="flash-cards">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
            <h1 className="text-2xl my-5">Flash Cards</h1>
            {definitions.map((def) => (
                <Flippy
                    flipOnHover={false} // default false
                    flipOnClick={true} // default false
                    flipDirection="vertical" // horizontal or vertical
                    // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                    // if you pass isFlipped prop component will be controlled component.
                    // and other props, which will go to div
                    // style={{ width: '500px', height: '150px' }} /// these are optional style, it is not necessary
                    className="my-3 w-6/12 h-72"
                >
                    <FrontSide className="bg-white text-4xl">
                        {def.term}                        
                    </FrontSide>
                    <BackSide className="text-gray-50 text-lg" style={{ backgroundColor: '#047857'}}>
                        <p className="mb-3">{def.definition}</p>
                        <p>
                            <a
                                className="App-link"
                                href={def.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {def.term}
                            </a>
                        </p>
                    </BackSide>
                </Flippy>
            ))}
        </div>
      </div>
    </section>
  );
}