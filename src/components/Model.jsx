import { useGSAP } from "@gsap/react";
import { useEffect } from "react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { rotateArrow, yellowImg } from "../utils";
import { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import { models, sizes } from "../constans";
import { animateWithGsapTimeline, animateWithGasp } from "../utils/animations";

const Model = () => {
    useGSAP(() => {
        animateWithGasp('#heading', { y: 0, opacity: 1 })
    }, [])

    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 Pro in Natural Titanum',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animateWithGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2
            })
        }
        if (size === 'small') {
            animateWithGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2
            })
        }
    }, [size])



    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">Find your uniqe style.</h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[55vh] md:h-[70vh] overflow-hidden relative bg-gradient">
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType='view1'
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelView
                            index={2}
                            groupRef={large}
                            gsapType='view2'
                            controlRef={cameraControlLarge}
                            setRotationState={setLargeRotation}
                            item={model}
                            size={size}
                        />
                        <Canvas className="w-full h-full"
                            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className="mx-auto w-full">
                        <img src={rotateArrow} alt="rotate" className="mx-auto w-[60px] md:w-[80px] mb-5" />
                        <p className="rc-text-sm md:text-xl font-light text-center mb-5">{model.title}</p>
                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0], border: item.title === model.title ? '3px solid white' : 'none' }} onClick={() => setModel(item)} />
                                ))}
                            </ul>
                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                    <span key={label} className="size-btn" style={{
                                        backgroundColor: size === value ? 'white' : 'transparent',
                                        color: size === value ? 'black' : 'white'
                                    }}
                                        onClick={() => setSize(value)}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Model