import React from 'react';

export default function About() {
    const techList = ['JavaScript (ES6)', 'React', 'Ruby on Rails', 'HTML', 'CSS'];
    const listItems = techList.map((myList) => {
        return <li>{myList}</li>
    });


    return (
        <div>
            <h1>About Me</h1>
            <p>Hello! My name is Kirthi Nandi and I am based in the Bay Area in California. I am someone who enjoys spending time discovering new music, going on long walks with my dog, Simba, and picking up new hobbies such as reading or crocheting. My interest in web development started early on as my curious mind always imagined and questioned the inner workings of a simple computer able to compute complex tasks. My time at Flatiron School solidified my interest as I was given the opportunity to learn hands-on what it was like using different languages to build functioning and innovative web applications.</p>
            <h2>Technologies I've Been Working With:</h2>
            <ul>{listItems}</ul>
        </div>
    )
}