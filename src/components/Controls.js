import React,{useRef} from "react";
import {extend,useThree,useFrame} from "react-three-fiber";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

const Controls= () => {
    const controlRef = useRef();
    const { camera,gl}  = useThree();

    useFrame(()=>controlRef.current&&controlRef.current.update());

    return (
        <orbitControls
            ref={controlRef}
            args={[camera,gl.domElement]}
            enableRotate
            enablePan={false}
            maxDistance={100}
            minDistance={5}
            minPolarAngle={Math.PI/6}
            maxPolarAngle={Math.PI/2}
        />
    );
};

export default Controls;