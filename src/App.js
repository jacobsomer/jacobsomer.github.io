import './App.css'
import React, { useState, useEffect } from 'react'
import { ReactComponent as Arrow } from './images/arrow.svg'
import { ReactComponent as GitHub } from './images/github.svg'
import { ReactComponent as Linkedin } from './images/linkedin.svg'
import { Link } from 'react-scroll'
import background from './images/portait.PNG'
import Fade from 'react-reveal/Fade'
import MPT from './images/cover.png'
import Portfolio from './components/Portfolio'
function App() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [xcoord, setXcoord] = useState(window.innerWidth)
    const [ycoord, setYcoord] = useState(window.innerWidth)
    const [linkedinColor, setLinkedinColor] = useState('0')
    const [githubColor, setGithubColor] = useState('0')
    const [arrowColor, setArrowColor] = useState('0')

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
        getSunPosition()
    }

    function pickHex(weight) {
        var color1 = [188, 231, 255]
        var color2 = [109 - (188 - 109), 157 - (231 - 157), 191 - (255 - 191)]
        // console.log(weight);
        var w1 = weight
        var w2 = 1 - w1
        return (
            'rgb(' +
            String(Math.round(color1[0] * w1 + color2[0] * w2)) +
            ',' +
            String(Math.round(color1[1] * w1 + color2[1] * w2)) +
            ',' +
            String(Math.round(color1[2] * w1 + color2[2] * w2)) +
            ')'
        )
    }

    function getSunPosition() {
        var degree = (270 * window.pageYOffset) / window.innerHeight / 3

        if (window.pageYOffset / window.innerHeight >= 3) {
            degree = 270
        }
        // console.log(degree);
        var b = window.innerHeight * 0.9
        var a = (window.innerWidth / 2) * 0.66

        //toReturn
        var x
        var y
        //cases:
        if (degree % 360 === 0) {
            x = -a
            y = 0
        } else if (degree % 360 === 90) {
            x = 0
            y = b
        } else if (degree % 360 === 180) {
            x = a
            y = 0
        } else if (degree % 360 === 270) {
            x = 0
            y = -b
        }
        //main cases:
        else if (degree % 360 > 0 && degree % 360 < 90) {
            x =
                -(a * b) /
                Math.pow(
                    Math.pow(b, 2) +
                        Math.pow(a, 2) *
                            Math.pow(Math.tan(degree * 0.0174533), 2),
                    0.5
                )
            y = -x * Math.tan(degree * 0.0174533)
        } else if (degree % 360 > 90 && degree % 360 < 180) {
            x =
                (a * b) /
                Math.pow(
                    Math.pow(b, 2) +
                        Math.pow(a, 2) *
                            Math.pow(Math.tan(degree * 0.0174533), 2),
                    0.5
                )
            y = -x * Math.tan(degree * 0.0174533)
        } else if (degree % 360 > 180 && degree % 360 < 270) {
            x =
                (a * b) /
                Math.pow(
                    Math.pow(b, 2) +
                        Math.pow(a, 2) *
                            Math.pow(Math.tan(degree * 0.0174533), 2),
                    0.5
                )
            y = -x * Math.tan(degree * 0.0174533)
        } else if (degree % 360 > 270 && degree % 360 < 360) {
            x =
                -(a * b) /
                Math.pow(
                    Math.pow(b, 2) +
                        Math.pow(a, 2) *
                            Math.pow(Math.tan(degree * 0.0174533), 2),
                    0.5
                )
            y = -x * Math.tan(degree * 0.0174533)
        }

        setXcoord(Math.floor(x))
        setYcoord(Math.floor(y))
    }

    useEffect(() => {
        function handleResize() {
            setWindowHeight(window.innerHeight)
            setWindowWidth(window.innerWidth)
            getSunPosition()
        }
        getSunPosition()
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div
            style={{
                position: 'relative',
                // height: '420vh',
                background: '#e2f4fe',
                // overflowY: 'clip'
                overflowX: 'clip'
            }}>
            <div
                class="background"
                style={{
                    position: 'fixed',
                    background:
                        'linear-gradient(to top, #fff4bc  0%,#fff4bc 25%,#ffd4bc 30%,#ec544c 45%,#f37588  55%,#bf6d9d   60%, #3e2f63  65%, #000000 100%)',
                    height: '300vh',
                    width: '100vw',
                    top:
                        scrollPosition / windowHeight < 0.5
                            ? String(
                                  Math.round(
                                      -100 -
                                          (200 * scrollPosition) / windowHeight
                                  )
                              ) + 'vh'
                            : scrollPosition / windowHeight < 1.5
                            ? String(-200) + 'vh'
                            : String(
                                  Math.min(
                                      Math.round(
                                          -200 +
                                              200 *
                                                  (scrollPosition /
                                                      windowHeight -
                                                      1.5)
                                      ),
                                      0
                                  )
                              ) + 'vh'
                }}
            />
            <div class="nameContainer">
                <h1 class="title">Jacob Somer</h1>
                <div class="itemContainer">
                    <div class="centerwrapper">
                        <div class="square">
                            <a
                                href="https://www.linkedin.com/in/jacob-somer/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Linkedin
                                    style={{
                                        position: 'relative',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter:
                                            'brightness(0) invert(' +
                                            linkedinColor +
                                            ')'
                                    }}
                                    onMouseLeave={() => setLinkedinColor('0')}
                                    onMouseEnter={() =>
                                        setLinkedinColor('1')
                                    }></Linkedin>
                            </a>
                        </div>
                        <div
                            class="square"
                            onMouseLeave={() => setArrowColor('0')}
                            onMouseEnter={() => setArrowColor('1')}>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-50}>
                                <Arrow
                                    id="arrow"
                                    style={{
                                        height: '100%',
                                        width: '100%',
                                        filter:
                                            'brightness(0) invert(' +
                                            arrowColor +
                                            ')'
                                    }}></Arrow>
                            </Link>
                        </div>
                        <div class="square">
                            <a
                                href="https://github.com/jacobsomer"
                                target="_blank">
                                <GitHub
                                    style={{
                                        position: 'relative',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        filter:
                                            'brightness(0) invert(' +
                                            githubColor +
                                            ')'
                                    }}
                                    onMouseLeave={() => setGithubColor('0')}
                                    onMouseEnter={() =>
                                        setGithubColor('1')
                                    }></GitHub>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="container"
                style={{
                    top: Math.round(windowHeight - ycoord) - 200 + 'px',
                    right: Math.round(windowWidth / 2 - xcoord) + 'px',
                    transform: 'translate(60%)'
                }}>
                <div
                    class="sun"
                    style={{
                        backgroundPosition:
                            '50% ' +
                            Math.max(
                                Math.round(100 - 200 * (ycoord / windowHeight)),
                                0
                            ) +
                            '%'
                    }}></div>
            </div>
            <div
                class="container"
                style={{
                    top: Math.round(windowHeight + ycoord) + 'px',
                    right: Math.round(windowWidth / 2 - 100 + xcoord) + 'px'
                }}>
                <div
                    class="moon"
                    style={{
                        backgroundPosition:
                            '50% ' +
                            Math.round(100 - 100 * (ycoord / windowHeight)) +
                            '%'
                    }}></div>
            </div>
            <div class="ocean" style={{ zIndex: 999 }}>
                <div class="wave">
                    <svg
                        style={{
                            position: 'fixed',
                            bottom:
                                scrollPosition / windowHeight > 2
                                    ? Math.round(
                                          (-scrollPosition / windowHeight + 2) *
                                              25
                                      ) + 'vh'
                                    : '0px',
                            left: '0vw',
                            width: '1600px',
                            height: '25vh'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="1600"
                        height="198">
                        <defs>
                            <linearGradient
                                id="a"
                                x1="50%"
                                x2="50%"
                                y1="-10.959%"
                                y2="100%">
                                <stop
                                    stop-color="#57BBC1"
                                    stop-opacity=".25"
                                    offset="0%"
                                />
                                <stop stop-color="#015871" offset="100%" />
                            </linearGradient>
                        </defs>
                        <path
                            style={{
                                fill: pickHex(
                                    (((ycoord / windowHeight) * 3) / 2 + 1) / 2
                                )
                            }}
                            fill="url(#a)"
                            width="6400px"
                            fill-rule="evenodd"
                            d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
                            transform="matrix(-1 0 0 1  1600 0)"
                        />
                    </svg>
                    <svg
                        style={{
                            position: 'fixed',
                            bottom:
                                scrollPosition / windowHeight > 2
                                    ? Math.round(
                                          (-scrollPosition / windowHeight + 2) *
                                              25
                                      ) + 'vh'
                                    : '0px',
                            left: '1600px',
                            width: '1600px',
                            height: '25vh'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="1600"
                        height="198">
                        <defs>
                            <linearGradient
                                id="a"
                                x1="50%"
                                x2="50%"
                                y1="-10.959%"
                                y2="100%">
                                <stop
                                    stop-color="#57BBC1"
                                    stop-opacity=".25"
                                    offset="0%"
                                />
                                <stop stop-color="#015871" offset="100%" />
                            </linearGradient>
                        </defs>
                        <path
                            style={{
                                fill: pickHex(
                                    (((ycoord / windowHeight) * 3) / 2 + 1) / 2
                                )
                            }}
                            fill="url(#a)"
                            width="6400px"
                            fill-rule="evenodd"
                            d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
                            transform="matrix(-1 0 0 1  1600 0)"
                        />
                    </svg>
                    <svg
                        style={{
                            position: 'fixed',
                            bottom:
                                scrollPosition / windowHeight > 2
                                    ? Math.round(
                                          (-scrollPosition / windowHeight + 2) *
                                              25
                                      ) + 'vh'
                                    : '0px',
                            left: '3200px',
                            width: '1600px'
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width="1600"
                        height="198">
                        <defs>
                            <linearGradient
                                id="a"
                                x1="50%"
                                x2="50%"
                                y1="-10.959%"
                                y2="100%">
                                <stop
                                    stop-color="#57BBC1"
                                    stop-opacity=".25"
                                    offset="0%"
                                />
                                <stop stop-color="#015871" offset="100%" />
                            </linearGradient>
                        </defs>
                        <path
                            style={{
                                fill: pickHex(
                                    (((ycoord / windowHeight) * 3) / 2 + 1) / 2
                                )
                            }}
                            fill="url(#a)"
                            width="6400px"
                            fill-rule="evenodd"
                            d="M.005 121C311 121 409.898-.25 811 0c400 0 500 121 789 121v77H0s.005-48 .005-77z"
                            transform="matrix(-1 0 0 1  1600 0)"
                        />
                    </svg>
                </div>
            </div>
            <div class="textContainer">
                <Fade cascade when={scrollPosition / windowHeight > 0.5}>
                    <h2 id="about">College of William and Mary</h2>

                    <div
                        style={{
                            textAlign: 'left',
                            transform: 'translate(20px)',
                            width: '100%'
                        }}>
                        <h3>Aspiring Software Engineer</h3>
                        <h3>Computer Science</h3>
                        <h3>Economics</h3>
                        <h3>3.65 GPA</h3>
                    </div>

                    <h2 id="about">Former Intern @ Fidelity Investments</h2>
                    <h2 id="about">
                        Research Assistant @ Geospatial Evaluation and
                        Observation Laboratory
                    </h2>
                </Fade>

                <div
                    style={{
                        top: '100vh',
                        position: 'absolute',
                        borderRadius: '25px',
                        background: 'rgb(245, 245, 220,.5)',
                        // border: '2px solid black',
                        padding: '20px',
                        width: '80vw',
                        left: '50%',
                        transform: 'translate(-50%)',
                        zIndex: 100,
                        color: 'black',
                        textAlign: 'center'
                    }}>
                    <Fade when={scrollPosition / windowHeight > 1.4}>
                        <h1>About Me </h1>
                    </Fade>
                    <div
                        id="box"
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            textAlign: 'left',
                            // overflow: 'scroll',
                            msOverflowStyle: 'none'
                            // maxHeight: '70vh'
                        }}>
                        <div style={{ width: '40vw' }}>
                            <Fade when={scrollPosition / windowHeight > 1.4}>
                                <p style={{ fontSize: '1rem' }}>
                                    Hi, I'm Jacob. I'm currently a junior at the
                                    College of William and Mary double majoring
                                    in Computer Science and Economics. I'm also
                                    an AI research assistant at a student-run
                                    lab, and I tutor intro to Object Oriented
                                    Programming.
                                    <br />
                                    <br />
                                    As an aspiring software engineer, my goal is
                                    to get as much industry experience as
                                    possible, and I am open to any software
                                    related positions. There is nothing more
                                    exciting to me than the creativity and
                                    mathematical mindset required to solve
                                    complex problems in computer science.
                                    <br />
                                    <br />
                                    In my free time, I like hiking, making
                                    music, and learning new things. Recently,
                                    I've been learning how to cook foods from
                                    around world. A fun fact about me is that I
                                    speak three languages: English, French, and
                                    Russian.
                                </p>
                            </Fade>
                        </div>
                        <Fade when={scrollPosition / windowHeight > 1.4}>
                            <div
                                style={{
                                    width: '40vw',
                                    position: 'relative',
                                    backgroundColor: ''
                                }}>
                                <div
                                    style={{
                                        position: 'relative',
                                        left: '50%',
                                        top: '50%',
                                        transform: 'translate(-50%,-50%)',
                                        maxHeight: '200px',
                                        maxWidth: '200px',
                                        width: '18vw',
                                        height: '18vw',
                                        backgroundColor: 'black',
                                        borderRadius: '50%',
                                        padding: '2px'
                                    }}>
                                    <div
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundImage: `url(${background})`,
                                            backgroundPosition: '50% 50%',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            borderRadius: '50%',
                                            transform: 'scale(1)'
                                        }}></div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>

            <div
                id="box"
                style={{
                    position: 'absolute',
                    top: '320vh',
                    maxWidth: '900px',
                    width: '100vw',
                    height: '100vh',
                    left: '0',
                    transform: 'translate(-50%)',
                    left: '50%',
                    msOverflowStyle: 'none',
                    padding: '1rem'
                }}>
                <Portfolio />
            </div>
        </div>
    )
}

export default App
