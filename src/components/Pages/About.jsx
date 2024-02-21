const About = () => {
    return (
        <>
            <h1>About me</h1>

            <p>
                Hello, my name is Andrea. I'm About to finish the front end web
                development bootcamp and i'd love to switch career. It is
                challenching to start over again, but also very rewarding.
            </p>
            <p>
                I am a mother of two wonderful children with 1 and 3 years and
                they are super cute and funny. They also teach me lot's of
                things and how to enjoy every single day.
            </p>

            <section className='container-sm skillsSection' id='skills'>
                <h2>Skills</h2>
                <div className='container text-center mb-5'>
                    <ul className='list-group list-group-flush border-secondary'>
                        <li className='list-group-item'>
                            Terminal <i className='fa-solid bi-terminal'></i>
                        </li>
                        <li className='list-group-item'>
                            Git <i className='bi bi-git'></i>
                        </li>
                        <li className='list-group-item'>
                            GitHub <i className='bi bi-github'></i>
                        </li>
                        <li className='list-group-item'>
                            HTML 5 <i className='bi bi-filetype-html'></i>
                        </li>
                        <li className='list-group-item'>
                            CSS 3 <i className='bi bi-filetype-css'></i>
                        </li>
                        <li className='list-group-item'>Flexbox</li>
                        <li className='list-group-item'>Grid</li>
                        <li className='list-group-item'>
                            Bootstrap <i className='bi bi-bootstrap'></i>
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            JavaScript <i className='bi bi-filetype-js'></i>
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            jQuery
                        </li>
                        <li className='list-group-item toLearnSkills'>APIs</li>
                        <li className='list-group-item toLearnSkills'>
                            Node.js
                        </li>
                        <li className='list-group-item toLearnSkills'>NPM</li>
                        <li className='list-group-item toLearnSkills'>
                            JSON <i className='bi bi-filetype-json'></i>
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            ECMAScript6
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            Object-Oriented Programing
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            Test-Driven Development
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            React.js
                        </li>
                        <li className='list-group-item toLearnSkills'>
                            React Hooks
                        </li>
                        <li className='list-group-item toLearnSkills'>JSX</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default About;
