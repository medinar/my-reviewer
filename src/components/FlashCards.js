import "tailwindcss/tailwind.css"
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import React from "react";

export default function FlashCards() {
  return (
    <section id="flash-cards">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1>Flash Cards</h1>
            <Flippy
                flipOnHover={false} // default false
                flipOnClick={true} // default false
                flipDirection="horizontal" // horizontal or vertical
                // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                // if you pass isFlipped prop component will be controlled component.
                // and other props, which will go to div
                style={{ width: '200px', height: '200px' }} /// these are optional style, it is not necessary
            >
                <FrontSide className="bg-white">
                    Question
                </FrontSide>
                <BackSide className="bg-gray-900 text-green-900">
                    Answer
                </BackSide>
            </Flippy>
        </div>
      </div>
    </section>
  );
}