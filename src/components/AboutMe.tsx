{/*added an about me page so that when user enters the website, they can get a little bit of information about me*/}

import aboutMe from '../assets/aboutme.png'
import { TypeAnimation } from 'react-type-animation'


function AboutMe() {

    return (
        <div className="bg-teal-600 w-full items-center justify-center p-30 lg:px-70 w-20">\
            <div className = "max-w-5xl w-full flex flex-col md:flex-row gap-12 items-center">

                <div className="bg-white p-6 rounded-lg shadow-lg p-2 lg:px-5 lg:py-5 width-450">
                    <img src={aboutMe} alt="About Me" className="h-auto w-auto rounded-lg" />
                </div>

                <div className="text-white flex-1 space-y-6">
                    <TypeAnimation sequence={[
                        'About Me!',
                        8000,
                        'Get to know me a little better!',
                        8000,
                    ]} 
                    wrapper="span"
                    speed = {25}
                    style = {{ fontSize: '2em', display: 'inline-block',}}
                    repeat={Infinity}
                    />

                    <p className="text-white text-lg">
                        Hi, I'm Jonah Hamell! I am a recent graduate of Iowa State University with a Bachelor's degree in Computer Science and a minor in Cybersecurity Engineering.
                        All of my life, I have been passionate about technology and programming, and I am excited to embark on whatever journey lies ahead of me in the future
                    </p>

                </div>
            </div>

            <div className="text-white dark:text-gray-300 items-center justify-center mt-40">
                <header className="text-3xl font-bold mb-4">
                    Main Languages and Use Cases
                </header>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 justify-center place-items-center gap-10 mt-10">
                <div className="text-white text-4xl flex flex-col gap-6">
                    <h3 className="text-white text-4xl">Python</h3>
                    <p className="text-white text-xs mt-20">
                        Python is my go-to language for machine learning and data analysis projects.
                        I have used it for various projects, including training a model based on information
                        scraped from Youtube, Reddit, and ESPN to predict NBA games.
                    </p>
                </div>
                <div className="text-white text-4xl flex flex-col gap-6">
                    <h3 className="text-white text-4xl">Java</h3>
                    <p className="text-white text-xs mt-20">
                        Java was mainly used for android development, and I have experience building android applications through Java. I have also worked on various projects using Java in Data Structures and Algorithms courses.
                    </p>
                </div>
                <div className="text-white text-4xl flex flex-col gap-6">
                    <h3 className="text-white text-4xl font-normal">C/C++</h3>
                    <p className="text-white text-xs mt-20">
                        C/C++ is my choice for Operating Systems and low-level programming. I have used it for various projects, including building a simple file system and creating a MUD (Multi-User Dungeon) game.
                    </p>
                </div>
            </div>
            
        </div>
    )

}

export default AboutMe;