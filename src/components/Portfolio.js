import React, { useState } from 'react'
import background from '../images/cover.png'
import Card from 'react-bootstrap/Card'
import './Portfolio.css'
import Project from './Project.js'
import portfolio from '../images/portfolio.png'
import notes from '../images/notes.png'
import go from '../images/go.jpeg'
import google from '../images/google.png'
export default function Portfolio() {
    return (
        <div class="flex-container">
            <div class="flex-item-left">
                <Project
                    background={go}
                    title={'AlphaGo Lite'}
                    desc={
                        'Built alongside a fellow researcher at the GeoLab, this project includes a full-stack application along with a game-playing AI. My contributions have been developing websockets for low-latency gameplay, implementing backend models to store key user information for authentication, and implementing a lite version of the Reinforcement Learning Based AI used in the original paper for AlphaGo.'
                    }
                    tech={'Django, React, Docker, Redis'}></Project>
            </div>
            <div class="flex-item-right">
                <Project
                    background={notes}
                    title={'Notes App'}
                    desc={
                        'During the Covid-19 quarantine, I created this full-stack webapp to learn more about cloud services while providing a clever tool to take personal notes. Using AWS, Serverless, and React I created a REST API to create, read, update, and delete notes.'
                    }
                    tech={
                        'DynamoDB, S3, Lambda, API Gateway, Cognito User Pool, Stripe API'
                    }></Project>
            </div>
            <div class="flex-item-left">
                <Project
                    background={portfolio}
                    title={'Portfolio Website'}
                    desc={
                        "This is the portfolio you are looking at right now! Working on this digital portfolio has helped me better understand the principles of reactive web design. Additionally, all the components you see have been abstracted so that sections like the one you're reading can be easily added or removed with few changes to the source code."
                    }
                    tech={'React'}></Project>
            </div>
            <div class="flex-item-right">
                <Project
                    background={background}
                    title={'Stock Portfolio Optimizer'}
                    desc={
                        'This was project where I used machine learning to optimize a personal stock portfolio. I used multi threading in python to access numerous APIs and execute trades.'
                    }
                    tech={'Python, Tensorflow'}></Project>
            </div>
            <div class="flex-item-left">
                <Project
                    background={google}
                    title={'Google Trends and Unemployment'}
                    desc={
                        'This data-science focused project includes a paper demonstrating how Google trends have a statistically signifigant effect on U.S. Unemplyment Claims. I use a vector auto-regression and machine learning to accurately forecast the unemployment rate in both the short and long run.'
                    }
                    tech={
                        'Tensorflow, Google Trends API, Statsmodels'
                    }></Project>
            </div>
            <div class="flex-item-right">2</div>
        </div>
    )
}
