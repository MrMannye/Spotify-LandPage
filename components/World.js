import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}

const VoxelDog = () => {
    const refContainer = useRef()
    let mixer = null; 

    const obj = null;
    const clock = new THREE.Clock();
    const loader = new GLTFLoader()

    const [loading, setLoading] = useState(true)
    const [renderer, setRenderer] = useState()
    const [_camera, setCamera] = useState()
    const [target] = useState(new THREE.Vector3(-0.5, 1, 0))
    const [initialCameraPosition] = useState(
        new THREE.Vector3(
            20 * Math.sin(0.2 * Math.PI),
            10,
            20 * Math.cos(0.2 * Math.PI)
        )
    )
    const [scene] = useState(new THREE.Scene())
    const [_controls, setControls] = useState()

    const handleWindowResize = useCallback(() => {
        const { current: container } = refContainer
        if (container && renderer) {
            const scW = container.clientWidth
            const scH = container.clientHeight

            renderer.setSize(scW, scH)
        }
    }, [renderer])

    /* eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
        const { current: container } = refContainer
        if (container && !renderer) {
            const scW = container.clientWidth + 100
            const scH = container.clientHeight + 100

            const renderer = new THREE.WebGLRenderer({
                antialias: true,
                alpha: true
            })
            renderer.setPixelRatio(window.devicePixelRatio)
            renderer.setSize(scW, scH)
            renderer.outputEncoding = THREE.sRGBEncoding
            container.appendChild(renderer.domElement)
            setRenderer(renderer)

            // 640 -> 240
            // 8   -> 6
            const scale = 100 * 0.005 + 4.8
            const camera = new THREE.OrthographicCamera(
                -scale,
                scale,
                scale,
                -scale,
                0.01,
                50000
            )
            camera.position.copy(initialCameraPosition)
            camera.lookAt(target)
            setCamera(camera)

            const ambientLight = new THREE.AmbientLight(0xcccccc, 1)
            // scene.background = new THREE.Color(0xbfe3dd )
            scene.add(ambientLight)

            const controls = new OrbitControls(camera, renderer.domElement)
            controls.target = target
            setControls(controls)

            loader.load('./scene.gltf', function(gltf){
                obj = gltf.scene;
                obj.name = 'world'
                obj.position.y = 0.8
                obj.position.x = -0.5
                obj.scale.set(5,5,5)
                obj.receiveShadow = true
                obj.castShadow = true
                scene.add(obj)

                obj.traverse(function (child) {
                    if (child.isMesh) {
                        child.castShadow = true
                        child.receiveShadow = true
                    }
                    })

                mixer = new THREE.AnimationMixer(obj);
                mixer.clipAction(gltf.animations[0]).play();
                animate();

            })

            const animate = () => {
                requestAnimationFrame(animate)
                obj.rotation.y += 0.01;
				controls.update();
                renderer.render(scene, camera)
            }

            return () => {
                console.log('unmount')
            }
        }
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize, false)
        return () => {
            window.removeEventListener('resize', handleWindowResize, false)
        }
    }, [renderer, handleWindowResize])

    return (
        <div className='flex items-center justify-center w-[500px] h-[500px]' ref={refContainer}></div>
    )
}

export default VoxelDog