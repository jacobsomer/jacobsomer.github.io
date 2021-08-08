import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'
function s(bgPath) {
    var tmp = {
        width: '80vw',
        height: '30vh',
        maxWidth: '400px',
        maxHeight: '200px',
        minHeight: '11rem',
        borderRadius: '1rem',
        backgroundImage: `url(${bgPath})`,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: '1px',
        overflow: 'hidden',
        left: '50%',
        position: 'relative',
        transform: 'translate(-50%)'
    }
    return tmp
}
/*

props
    background
    title
    desc
    tech
*/
export default function Project(props) {
    const [firstOpacity, setFirstOpacity] = useState('.5')
    const [visible, setVisible] = useState(false)
    return (
        <div
            style={s(props.background)}
            onMouseLeave={() => setFirstOpacity('.5')}
            onMouseEnter={() => setFirstOpacity('.8')}>
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#383838',
                    opacity: firstOpacity,
                    color: firstOpacity == '.5' ? '#000' : '#F0F0F0'
                }}>
                <div
                    style={{
                        position: 'absolute',
                        transform: 'translate(-50%,-50%)',
                        top: '50%',
                        textAlign: 'left',
                        verticalAlign: 'top',
                        left: '50%',
                        fontSize: '2rem',
                        margin: 'auto'
                    }}>
                    {props.title}
                </div>
            </div>

            <div
                onClick={() => setVisible(!visible)}
                style={{
                    position: 'relative',
                    top: '-100%',
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#E8E8E8',
                    opacity: visible ? '1' : '0',
                    color: '#000',
                    paddingLeft: '1rem'
                }}>
                <Fade when={visible}>
                    <p
                        style={{
                            position: 'absolute',
                            fontSize: '.8rem',
                            paddingRight: '1rem'
                        }}>
                        {props.desc}
                    </p>
                    <p
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            fontSize: '.8rem',
                            textAlign: 'left'
                        }}>
                        <b>{props.tech}</b>
                    </p>
                </Fade>
            </div>
        </div>
    )
}
