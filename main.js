//***********************************************BOILERPLATE***********************************************//
//***********************************************BOILERPLATE***********************************************//
//***********************************************BOILERPLATE***********************************************//

// import './style.css'
// //import library
// import * as THREE from 'three'

// //help us move around the scene with the mouse
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' 

// //always need 3 objects:
// // - Scene
// // - Camera
// // - Renderer

// //like a container that holds all of your objects, cameras and lights
// const scene = new THREE.Scene()

// //to look at things inside the scene - camera
// // Most common one is the prespective Camera - regular
// // - there is an Array Camera, Camera , CubeCamera, OrthographicCamera, SteroCamera

// // Parameters are FOV (degrees), AspectRatio, ViewFrustum 
// // FOV - how much of the world is visible based on a full 360 deg
// // Aspect Ratio - based of the user's browser window : window.innerWidth / window.innerHeight
// // View Frustum - to Control which objects are visible relative to the camera itself (0.1,1000 we can see everything)  

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000)


// //Render out the graphics to the scene - make things happen
// const renderer = new THREE.WebGLRenderer({
//     //needs to know which DOM elements to use:
//     canvas:document.querySelector('#bg')
// })

// //set pixels size
// renderer.setPixelRatio(window.devicePixelRatio)

// // make it a full screen canvas
// renderer.setSize(window.innerWidth, window.innerHeight)

// camera.position.setZ(30)

// //tell renderer to render the scene and the camera
// renderer.render(scene, camera)

// // Add an object to the screen
// // 1. Geometry - the {x,y,z} points that make up a shape (set of vectors that define an objecrs shape)
// //  (there are some built in ones)

// // heres a Torus
// const geometry = new THREE.TorusGeometry(10,3,16,100)
// // define a material to give it color and or texture (wrapping paper for geometry)
// //most materials rely on a light source to bounce off of them

// //const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true} ) // this basic material does not require it
// const material = new THREE.MeshStandardMaterial({color:0xFF6347 } ) // this standard material does
// // parameters for customizaton , like color, etc

// //create a mesh to combine the geometry with the material
// const torus = new THREE.Mesh(geometry, material)

// //add object to screen
// scene.add(torus)
// // to see it gotta rerender(draw) the scene but you dont wanna do that its tideous so we finna set up a recurive function to do that
// //renderer.render(scene)

// //need a lightsource to see that second material so lets add one: pointLight (there are more)
// const pointLight = new THREE.PointLight(0xffffff)
// const ambientLight = new THREE.AmbientLight(0xffffff)
// const lightHelper = new THREE.PointLightHelper(pointLight) // show us the position of a pointLight
// const gridHelper = new THREE.GridHelper(200,500)
// //set its position
// pointLight.position.set(20,20,20)
// //add it to the scene
// scene.add(pointLight)
// scene.add(ambientLight)
// scene.add(lightHelper, gridHelper)

// const controls = new OrbitControls(camera, renderer.domElement)// instanate that class

// function animate(){

//   requestAnimationFrame(animate)// calls request animation frame from the browser which basically tells the browser we're gonna do some animations
//   renderer.render(scene, camera)

//   torus.rotation.x += 0.01
//   torus.rotation.y += 0.005
//   torus.rotation.z += 0.01

//   controls.update() // to show our mouse manipulations of the scene is captured
// }

// // This is like a Game loop 
// animate()

//***********************************************COOLSTUFF***********************************************//
//***********************************************COOLSTUFF***********************************************//
//***********************************************COOLSTUFF***********************************************//

import '/style.scss'
//import library
import * as THREE from 'three'

//help us move around the scene with the mouse
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

//always need 3 objects:
// - Scene
// - Camera
// - Renderer

//like a container that holds all of your objects, cameras and lights
const scene = new THREE.Scene()

//to look at things inside the scene - camera
// Most common one is the prespective Camera - regular
// - there is an Array Camera, Camera , CubeCamera, OrthographicCamera, SteroCamera

// Parameters are FOV (degrees), AspectRatio, ViewFrustum 
// FOV - how much of the world is visible based on a full 360 deg
// Aspect Ratio - based of the user's browser window : window.innerWidth / window.innerHeight
// View Frustum - to Control which objects are visible relative to the camera itself (0.1,1000 we can see everything)  

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)

const randomNumbers = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}


//Render out the graphics to the scene - make things happen
const renderer = new THREE.WebGLRenderer({
  //needs to know which DOM elements to use:
  canvas: document.querySelector('#bg')
})

//set pixels size
renderer.setPixelRatio(window.devicePixelRatio)

// make it a full screen canvas
renderer.setSize(window.innerWidth, window.innerHeight)


camera.position.setZ(30)

//tell renderer to render the scene and the camera
renderer.render(scene, camera)

// Add an object to the screen
// 1. Geometry - the {x,y,z} points that make up a shape (set of vectors that define an objecrs shape)
//  (there are some built in ones)

// heres a Torus
const geometry = new THREE.TorusGeometry(2, 1, 16, 50)
// define a material to give it color and or texture (wrapping paper for geometry)
//most materials rely on a light source to bounce off of them

const material = new THREE.MeshBasicMaterial({ color: 0xFF6347, wireframe: true }) // this basic material does not require it/
//const material = new THREE.MeshStandardMaterial({color:0xFF6347 } ) // this standard material does
// parameters for customizaton , like color, etc

//create a mesh to combine the geometry with the material
const torus = new THREE.Mesh(geometry, material)
const torus2 = new THREE.Mesh(geometry, material)

const knotGeometry = new THREE.TorusKnotGeometry(1, 1, 10, 10);
const knotMaterial = new THREE.MeshBasicMaterial({ color: 'aqua', wireframe: true });
const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);

//SPHERES
const SphereGeometry = new THREE.SphereGeometry(35, 50, 50)
const sphereTexture = new THREE.MeshStandardMaterial({ color: 'red', wireframe: true })
const sphere = new THREE.Mesh(SphereGeometry, sphereTexture)

const sphere2Geometry = new THREE.SphereGeometry(35, 40, 40)
const sphere2Texture = new THREE.MeshStandardMaterial({ color: 'orange', wireframe: true })
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Texture)

const sphere3Geometry = new THREE.SphereGeometry(35, 25, 25)
const sphere3Texture = new THREE.MeshStandardMaterial({ color: 'pink', wireframe: true })
const sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Texture)

const sphere4Geometry = new THREE.SphereGeometry(35, 35, 35)
const sphere4Texture = new THREE.MeshStandardMaterial({ color: 'pink', wireframe: true })
const sphere4 = new THREE.Mesh(sphere4Geometry, sphere4Texture)

const tetraGeo = new THREE.TetrahedronGeometry(2, 1)
const tetraMat = new THREE.MeshBasicMaterial({ color: '#333', wireframe: true })
const tetra = new THREE.Mesh(tetraGeo, tetraMat)



const capsuleGeo = new THREE.CapsuleGeometry(2, 5, 2)
const capsuleMat = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true })
const capsule = new THREE.Mesh(capsuleGeo, capsuleMat)

const boxGeo = new THREE.BoxGeometry(10, 10, 10, 5, 5, 5)
const boxMat = new THREE.MeshBasicMaterial({ color: 'green', wireframe: true })
const box = new THREE.Mesh(boxGeo, boxMat)

const selfie = new THREE.TextureLoader().load('images/selfie.jpg')
const selfieBoxGeo = new THREE.BoxGeometry(3, 3, 3)
const selfieBoxMat = new THREE.MeshBasicMaterial({ map: selfie })
const selfieBox = new THREE.Mesh(selfieBoxGeo, selfieBoxMat)

const planeGeometry = new THREE.PlaneGeometry(500, 25, 5, 5);
const planeMaterial = new THREE.MeshBasicMaterial({ color: 'red', side: THREE.DoubleSide });
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

const plane2Geometry = new THREE.PlaneGeometry(500, 20, 5, 5);
const plane2Material = new THREE.MeshBasicMaterial({ color: 'black', side: THREE.DoubleSide });
const plane2 = new THREE.Mesh(plane2Geometry, plane2Material);

const icoGeo = new THREE.IcosahedronGeometry(1, 1)
const icoMat = new THREE.MeshBasicMaterial({ color: '#333', wireframe: true })
const ico = new THREE.Mesh(icoGeo, icoMat)
//scene.background =  new THREE.Color("#fceee1")
scene.background = new THREE.Color("white")

const atomRingMaterial = new THREE.MeshBasicMaterial({ color: 'blue', wireframe: true })
const atomNucleonMaterial = new THREE.MeshBasicMaterial({ color: 'orange', wireframe: true })


function createAtoms() {
  const ring1Geo = new THREE.RingGeometry(0.55, 0.49, 150)
  const ring1 = new THREE.Mesh(ring1Geo, atomRingMaterial)
  const ring2Geo = new THREE.RingGeometry(0.55, 0.49, 150)
  const ring2 = new THREE.Mesh(ring2Geo, atomRingMaterial)
  const ring3Geo = new THREE.RingGeometry(0.55, 0.49, 150)
  const ring3 = new THREE.Mesh(ring3Geo, atomRingMaterial)
  scene.add(ring1)
  scene.add(ring2)
  scene.add(ring3)

  const nucleon1Geo = new THREE.SphereGeometry(0.05, 10, 10)
  const nucleon1 = new THREE.Mesh(nucleon1Geo, atomNucleonMaterial)
  scene.add(nucleon1)

  const nucleonGeo = new THREE.SphereGeometry(0.05, 10, 10)
  const nucleon = new THREE.Mesh(nucleonGeo, atomNucleonMaterial)
  scene.add(nucleon)

  const nucleon2Geo = new THREE.SphereGeometry(0.05, 10, 10)
  const nucleon2 = new THREE.Mesh(nucleon2Geo, atomNucleonMaterial)
  scene.add(nucleon2)

  const atomRange = 100
  let x = randomNumbers(-atomRange, atomRange)
  let y = randomNumbers(-atomRange, atomRange)
  let z = randomNumbers(-atomRange, atomRange)

  //add to scene


  ring1.position.x = x
  ring1.position.y = y
  ring1.position.z = z

  ring2.position.x = x
  ring2.position.y = y
  ring2.position.z = z
  ring2.rotation.y = 180

  ring3.position.x = x
  ring3.position.y = y
  ring3.position.z = z
  ring3.rotation.z = 180

  nucleon1.position.x = x
  nucleon1.position.y = y + 0.05
  nucleon1.position.z = z

  nucleon.position.x = x + 0.05
  nucleon.position.y = y
  nucleon.position.z = z

  nucleon2.position.x = x
  nucleon2.position.y = y
  nucleon2.position.z = z + 0.05

  return { nucleon, nucleon1, nucleon2, ring1, ring2, ring3 }
}

///
const mainAtomRing1Geo = new THREE.RingGeometry(2.9, 2.4, 150)
const mainAtomRing1Mat = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true })
const mainAtomRing1 = new THREE.Mesh(mainAtomRing1Geo, mainAtomRing1Mat)

const mainAtomRing2Geo = new THREE.RingGeometry(2.9, 2.4, 150)
const mainAtomRing2Mat = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true })
const mainAtomRing2 = new THREE.Mesh(mainAtomRing2Geo, mainAtomRing2Mat)

const mainAtomRing3Geo = new THREE.RingGeometry(2.9, 2.4, 150)
const mainAtomRing3Mat = new THREE.MeshBasicMaterial({ color: 'purple', wireframe: true })
const mainAtomRing3 = new THREE.Mesh(mainAtomRing3Geo, mainAtomRing3Mat)

//scene.add(mainAtomRing1)
//scene.add(mainAtomRing2)
//scene.add(mainAtomRing3)

const mainAtomNucleon1Geo = new THREE.SphereGeometry(0.2, 10, 10)
const mainAtomNucleon1Mat = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true })
const mainAtomNucleon1 = new THREE.Mesh(mainAtomNucleon1Geo, mainAtomNucleon1Mat)
//scene.add(mainAtomNucleon1)

const mainAtomNucleonGeo = new THREE.SphereGeometry(0.2, 10, 10)
const mainAtomNucleonMat = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true })
const mainAtomNucleon = new THREE.Mesh(mainAtomNucleonGeo, mainAtomNucleonMat)
//scene.add(mainAtomNucleon)

const mainAtomNucleon2Geo = new THREE.SphereGeometry(0.2, 10, 10)
const mainAtomNucleon2Mat = new THREE.MeshBasicMaterial({ color: 'yellow', wireframe: true })
const mainAtomNucleon2 = new THREE.Mesh(mainAtomNucleon2Geo, mainAtomNucleon2Mat)
//scene.add(mainAtomNucleon2)



mainAtomRing1.position.x = -12
mainAtomRing1.position.y = 5
mainAtomRing1.position.z = 5
mainAtomRing1.rotation.x = 180

mainAtomRing2.position.x = -12
mainAtomRing2.position.y = 5
mainAtomRing2.position.z = 5
mainAtomRing2.rotation.y = 180

mainAtomRing3.position.x = -12
mainAtomRing3.position.y = 5
mainAtomRing3.position.z = 5
mainAtomRing3.rotation.z = 180

mainAtomNucleon1.position.x = -12
mainAtomNucleon1.position.y = 5 + 0.19
mainAtomNucleon1.position.z = 5

mainAtomNucleon.position.x = -12 + 0.19
mainAtomNucleon.position.y = 5
mainAtomNucleon.position.z = 5

mainAtomNucleon2.position.x = -12
mainAtomNucleon2.position.y = 5
mainAtomNucleon2.position.z = 5 + 0.19


ico.position.x = -5
ico.position.y = 50
ico.position.z = 20


selfieBox.position.x = 5
selfieBox.position.y = 55
selfieBox.position.z = 20



box.position.x = 150
box.position.y = 100
box.position.z = -400

capsule.position.x = -100
capsule.position.y = -20
capsule.position.z = -300

sphere.position.x = 35
sphere.position.y = -30
sphere.position.z = -10

sphere2.position.x = -80
sphere2.position.y = 0
sphere2.position.z = -120

sphere3.position.x = 90
sphere3.position.y = 50
sphere3.position.z = -420

sphere4.position.x = -40
sphere4.position.y = 10
sphere4.position.z = 50

torus.position.x = -9
torus.position.y = 20
torus.position.z = 10

torus2.position.x = 0
torus2.position.y = -40
torus2.position.z = -10

torusKnot.position.x = -50
torusKnot.position.y = 50
torusKnot.position.z = -10

tetra.position.x = -15
tetra.position.y = 5
tetra.position.z = 50

plane.position.x = 0
plane.position.y = 40
plane.position.z = 40
plane.rotation.x = 2.7

plane2.position.x = 0
plane2.position.y = 50
plane2.position.z = 20
plane2.rotation.x = 2.7





//add object to screen
scene.add(sphere)
scene.add(sphere2)
scene.add(sphere3)
scene.add(sphere4)
//scene.add(torus)
//scene.add(torus2)
//scene.add( torusKnot );
//scene.add(capsule)
scene.add(tetra)
//scene.add(box)
scene.add(selfieBox)
//scene.add(ico

// scene.add(plane)
// scene.add(plane2)
// to see it gotta rerender(draw) the scene but you dont wanna do that its tideous so we finna set up a recursive function to do that
//renderer.render(scene)


//need a lightsource to see that second material so lets add one: pointLight (there are more)
const pointLight = new THREE.PointLight(0xffffff)
const ambientLight = new THREE.AmbientLight(0xffffff)
const lightHelper = new THREE.PointLightHelper(pointLight) // show us the position of a pointLight
const gridHelper = new THREE.GridHelper(1000, 1000)
//set its position
pointLight.position.set(0, 0, 0)
//add it to the scene
scene.add(pointLight)
//scene.add(ambientLight)
//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)// instanate that class


const gunish = new THREE.Mesh(
  new THREE.BoxGeometry(3, 3, 3),
  new THREE.MeshBasicMaterial({ map: selfie })
)

//scene.add(gunish)


//Lets add multiple objects
const asteroidGeometry = new THREE.SphereGeometry(0.1, 24, 24)
const asteroidMaterial = new THREE.MeshStandardMaterial({ color: '#333', wireframe: true })

function addAstroids() {
  const astro = new THREE.Mesh(asteroidGeometry, asteroidMaterial)

  const astroRange = 60
  let x = randomNumbers(-astroRange, astroRange)
  let y = randomNumbers(-astroRange, astroRange)
  let z = randomNumbers(-astroRange, astroRange)
  astro.position.set(x, y, z)
  scene.add(astro)
  return astro
}

const themedSceneMaterials = {
  primary: [
    material,
    sphereTexture,
    sphere2Texture,
    sphere3Texture,
    sphere4Texture,
    tetraMat,
    icoMat,
    plane2Material,
    asteroidMaterial
  ],
  accent: [
    knotMaterial,
    planeMaterial,
    atomRingMaterial,
    mainAtomRing1Mat,
    mainAtomRing2Mat,
    mainAtomRing3Mat
  ],
  secondary: [
    capsuleMat,
    boxMat,
    atomNucleonMaterial,
    mainAtomNucleon1Mat,
    mainAtomNucleonMat,
    mainAtomNucleon2Mat
  ]
}

const sceneThemeTargets = {
  background: new THREE.Color('#ffffff'),
  primary: new THREE.Color('#111111'),
  accent: new THREE.Color('#ff6410'),
  secondary: new THREE.Color('#5a5a5a')
}

const buildSectionTheme = ({
  mode = 'light',
  primary,
  text,
  sceneBackground,
  objectPrimary,
  objectAccent,
  objectSecondary = objectPrimary,
  surfaceRgb,
  buttonHover,
  quoteEnd
}) => {
  const isDark = mode === 'dark'
  const baseSurface = surfaceRgb ?? (isDark ? '24, 24, 28' : '255, 255, 255')

  return {
    css: {
      '--primary-color': primary,
      '--bg-color': sceneBackground,
      '--text-color': text,
      '--card-bg': isDark ? `rgba(${baseSurface}, 0.74)` : 'rgba(255, 255, 255, 0.6)',
      '--copy-bg': isDark ? `rgba(${baseSurface}, 0.82)` : 'rgba(255, 255, 255, 0.4)',
      '--panel-bg': isDark ? `rgba(${baseSurface}, 0.88)` : 'rgba(255, 255, 255, 0.45)',
      '--page4-surface-bg': isDark ? `rgba(${baseSurface}, 0.78)` : 'rgba(0, 0, 0, 0.08)',
      '--card-border-color': isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0, 0, 0, 0.1)',
      '--panel-border-color': isDark ? 'rgba(255, 255, 255, 0.14)' : 'rgba(255, 255, 255, 0.35)',
      '--field-border-color': isDark ? 'rgba(255, 255, 255, 0.18)' : 'rgba(0, 0, 0, 0.2)',
      '--card-shadow': isDark ? '0 24px 50px rgba(0, 0, 0, 0.45)' : '0 20px 40px rgba(0, 0, 0, 0.3)',
      '--surface-shadow': isDark ? '0 18px 45px rgba(0, 0, 0, 0.34)' : '0 18px 45px rgba(0, 0, 0, 0.14)',
      '--image-shadow': isDark ? '0 24px 60px rgba(0, 0, 0, 0.48)' : '0 24px 60px rgba(0, 0, 0, 0.26)',
      '--image-hover-shadow': isDark ? '0 30px 70px rgba(0, 0, 0, 0.56)' : '0 30px 70px rgba(0, 0, 0, 0.32)',
      '--input-bg': isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.05)',
      '--input-focus-bg': isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
      '--button-hover': buttonHover,
      '--button-text': '#ffffff',
      '--hero-icon-color': isDark ? '#ffffff' : '#111111',
      '--social-image-filter': isDark ? 'brightness(0) invert(1)' : 'brightness(1)',
      '--name-shadow': isDark ? '0 10px 30px rgba(0, 0, 0, 0.8)' : '0 10px 30px rgba(0, 0, 0, 0.5)',
      '--quote-start': text,
      '--quote-end': quoteEnd ?? (isDark ? 'rgba(255, 255, 255, 0.72)' : '#666666')
    },
    scene: {
      background: sceneBackground,
      primary: objectPrimary,
      accent: objectAccent,
      secondary: objectSecondary
    }
  }
}

const sectionThemes = {
  intro: buildSectionTheme({
    primary: '#ff6410',
    text: '#242424',
    sceneBackground: '#ffffff',
    objectPrimary: '#111111',
    objectAccent: '#ff6410',
    objectSecondary: '#5a5a5a',
    buttonHover: '#ff8540',
    quoteEnd: '#666666'
  }),
  novakey: buildSectionTheme({
    mode: 'dark',
    primary: '#ff6a00',
    text: '#f5f5f5',
    sceneBackground: '#050505',
    objectPrimary: '#ffffff',
    objectAccent: '#ff6a00',
    objectSecondary: '#d0d0d0',
    surfaceRgb: '16, 16, 18',
    buttonHover: '#ff8740',
    quoteEnd: '#a3a3a3'
  }),
  odoro: buildSectionTheme({
    mode: 'dark',
    primary: '#ff8a5b',
    text: '#fbf5ff',
    sceneBackground: '#251548',
    objectPrimary: '#fff8ff',
    objectAccent: '#87d8ff',
    objectSecondary: '#ffcb72',
    surfaceRgb: '39, 24, 68',
    buttonHover: '#ffa27d',
    quoteEnd: '#d6bbff'
  }),
  msp: buildSectionTheme({
    mode: 'dark',
    primary: '#57c98f',
    text: '#f4fff8',
    sceneBackground: '#10231c',
    objectPrimary: '#f4fff8',
    objectAccent: '#57c98f',
    objectSecondary: '#a6efc9',
    surfaceRgb: '18, 40, 32',
    buttonHover: '#76d7a3',
    quoteEnd: '#c0eed2'
  }),
  goodforum: buildSectionTheme({
    mode: 'dark',
    primary: '#ff7a1a',
    text: '#fff8ef',
    sceneBackground: '#261810',
    objectPrimary: '#fff5e6',
    objectAccent: '#ffb067',
    objectSecondary: '#ffd8b3',
    surfaceRgb: '43, 28, 20',
    buttonHover: '#ff9548',
    quoteEnd: '#f0caa5'
  }),
  scamazon: buildSectionTheme({
    primary: '#2f94b8',
    text: '#17313b',
    sceneBackground: '#b9e4f0',
    objectPrimary: '#102a33',
    objectAccent: '#8b4ecb',
    objectSecondary: '#2f94b8',
    buttonHover: '#54abcd',
    quoteEnd: '#417185'
  }),
  logistics: buildSectionTheme({
    mode: 'dark',
    primary: '#71b9ff',
    text: '#edf6ff',
    sceneBackground: '#10233a',
    objectPrimary: '#f5fbff',
    objectAccent: '#71b9ff',
    objectSecondary: '#bedcff',
    surfaceRgb: '18, 40, 65',
    buttonHover: '#91c8ff',
    quoteEnd: '#c8defd'
  }),
  worldofjoy: buildSectionTheme({
    mode: 'dark',
    primary: '#ff924a',
    text: '#fff7fc',
    sceneBackground: '#53225a',
    objectPrimary: '#fff8fd',
    objectAccent: '#f3a1df',
    objectSecondary: '#ffd166',
    surfaceRgb: '66, 34, 72',
    buttonHover: '#ffab72',
    quoteEnd: '#f0c1eb'
  }),
  looped: buildSectionTheme({
    mode: 'dark',
    primary: '#58c2ff',
    text: '#f3fbff',
    sceneBackground: '#182331',
    objectPrimary: '#f5fbff',
    objectAccent: '#58c2ff',
    objectSecondary: '#9ae5ff',
    surfaceRgb: '27, 40, 57',
    buttonHover: '#7bd0ff',
    quoteEnd: '#c3eaff'
  })
}

const sectionThemeElements = Array.from(document.querySelectorAll('[data-theme-section]'))
const rootStyle = document.documentElement.style
let activeThemeName = ''
let themeUpdateScheduled = false

const applySceneThemeTarget = (themeName) => {
  const theme = sectionThemes[themeName] ?? sectionThemes.intro

  sceneThemeTargets.background.set(theme.scene.background)
  sceneThemeTargets.primary.set(theme.scene.primary)
  sceneThemeTargets.accent.set(theme.scene.accent)
  sceneThemeTargets.secondary.set(theme.scene.secondary)
}

const applyDomTheme = (themeName) => {
  const theme = sectionThemes[themeName] ?? sectionThemes.intro

  Object.entries(theme.css).forEach(([property, value]) => {
    rootStyle.setProperty(property, value)
  })
}

const setActiveTheme = (themeName) => {
  if (themeName === activeThemeName) {
    return
  }

  activeThemeName = themeName
  document.documentElement.dataset.themeSection = themeName
  applyDomTheme(themeName)
  applySceneThemeTarget(themeName)
}

const resolveActiveTheme = () => {
  if (!sectionThemeElements.length) {
    return 'intro'
  }

  const viewportMidpoint = window.innerHeight * 0.5
  let closestTheme = 'intro'
  let closestDistance = Number.POSITIVE_INFINITY

  for (const section of sectionThemeElements) {
    const rect = section.getBoundingClientRect()

    if (rect.top <= viewportMidpoint && rect.bottom >= viewportMidpoint) {
      return section.dataset.themeSection ?? 'intro'
    }

    const sectionCenter = rect.top + rect.height / 2
    const distance = Math.abs(sectionCenter - viewportMidpoint)

    if (distance < closestDistance) {
      closestDistance = distance
      closestTheme = section.dataset.themeSection ?? 'intro'
    }
  }

  return closestTheme
}

const syncThemeToViewport = () => {
  themeUpdateScheduled = false
  setActiveTheme(resolveActiveTheme())
}

const requestThemeSync = () => {
  if (themeUpdateScheduled) {
    return
  }

  themeUpdateScheduled = true
  window.requestAnimationFrame(syncThemeToViewport)
}

function moveCamera() {
  const webPage = document.body.getBoundingClientRect().top


  //camera.position.z = webPage * -0.02
  //camera.position.x = webPage * -0.0002
  camera.position.y = webPage * -0.02
}

//  Array(5000).fill().forEach(createAtoms)
const atomsArr = []
for (let i = 0; i < 2500; i++) {
  //let newAtom = createAtoms()
  //console.log(newAtom)
  //atomsArr.push(newAtom)


}

const astroidArr = []
for (let i = 0; i < 1000; i++) {
  let newAstro = addAstroids()
  astroidArr.push(newAstro)
}

const lerpMaterialGroup = (materials, targetColor, amount) => {
  materials.forEach((sceneMaterial) => {
    sceneMaterial.color.lerp(targetColor, amount)
  })
}

const setMaterialGroupColor = (materials, colorValue) => {
  materials.forEach((sceneMaterial) => {
    sceneMaterial.color.set(colorValue)
  })
}

const applyCurrentSceneTheme = (themeName) => {
  const theme = sectionThemes[themeName] ?? sectionThemes.intro

  scene.background.set(theme.scene.background)
  setMaterialGroupColor(themedSceneMaterials.primary, theme.scene.primary)
  setMaterialGroupColor(themedSceneMaterials.accent, theme.scene.accent)
  setMaterialGroupColor(themedSceneMaterials.secondary, theme.scene.secondary)
}

const initialTheme = resolveActiveTheme()
setActiveTheme(initialTheme)
applyCurrentSceneTheme(initialTheme)
moveCamera()

function animate() {

  requestAnimationFrame(animate)// calls request animation frame from the browser which basically tells the browser we're gonna do some animations

  scene.background.lerp(sceneThemeTargets.background, 0.045)
  lerpMaterialGroup(themedSceneMaterials.primary, sceneThemeTargets.primary, 0.06)
  lerpMaterialGroup(themedSceneMaterials.accent, sceneThemeTargets.accent, 0.06)
  lerpMaterialGroup(themedSceneMaterials.secondary, sceneThemeTargets.secondary, 0.06)

  renderer.render(scene, camera)

  sphere.rotation.x += 0.001
  sphere.rotation.y += 0.005
  sphere.rotation.z += 0.001

  sphere2.rotation.x += 0.005
  sphere2.rotation.y -= 0.002
  sphere2.rotation.z -= 0.002


  sphere3.rotation.x -= 0.001
  sphere3.rotation.y -= 0.005
  sphere3.rotation.z -= 0.001

  sphere4.rotation.z += 0.001
  sphere4.rotation.z += 0.005
  sphere4.rotation.z -= 0.001

  capsule.rotation.x += 0.01
  capsule.rotation.y += 0.05
  capsule.rotation.z += 0.01
  capsule.position.z += 0.9

  torus.rotation.x += 0.03
  torus.rotation.y += 0.010
  torus.rotation.z += 0.02
  torus.position.x += 0.09


  torus2.rotation.x -= 0.03
  torus2.rotation.y -= 0.10
  torus2.rotation.z -= 0.02
  torus2.position.z += 0.09

  box.position.x -= 0.110
  box.position.y += 0.1
  box.position.z -= 0.001
  box.rotation.x -= 0.0110
  box.rotation.y += 0.01
  box.rotation.z -= 0.001

  torusKnot.position.x += 0.10
  torusKnot.position.z += 0.01
  torusKnot.rotation.y += 0.01
  torusKnot.rotation.x -= 0.02
  torusKnot.rotation.z += 0.01


  tetra.position.x += 0.1
  tetra.position.z -= 0.5

  selfieBox.rotation.x += 0.01
  selfieBox.rotation.y += 0.01
  selfieBox.rotation.z -= 0.01

  atomsArr.forEach((atom) => {
    let randoNum1x = randomNumbers(0.06, -0.06)
    let randoNum1y = randomNumbers(0.05, -0.05)
    let randoNum1z = randomNumbers(0.04, -0.04)


    let randoNum2x = randomNumbers(-0.07, 0.07)
    let randoNum2y = randomNumbers(-0.06, 0.06)
    let randoNum2z = randomNumbers(-0.02, 0.02)

    let randoNum3x = randomNumbers(-0.03, 0.03)
    let randoNum3y = randomNumbers(-0.09, 0.09)
    let randoNum3z = randomNumbers(-0.1, 0.1)

    atom.ring1.rotation.x += randoNum1x
    atom.ring1.rotation.y += randoNum1y
    atom.ring1.rotation.z += randoNum1z

    atom.ring2.rotation.x += randoNum2x
    atom.ring2.rotation.y += randoNum2y
    atom.ring2.rotation.z += randoNum2z

    atom.ring3.rotation.x += randoNum3x
    atom.ring3.rotation.y += randoNum3y
    atom.ring3.rotation.z += randoNum3z

    atom.nucleon.rotation.x += 0.01
    atom.nucleon.rotation.y += 0.01
    atom.nucleon.rotation.z += 0.01

    atom.nucleon1.rotation.x += 0.01
    atom.nucleon1.rotation.y += 0.01
    atom.nucleon1.rotation.z += 0.01

    atom.nucleon2.rotation.x += 0.01
    atom.nucleon2.rotation.y += 0.01
    atom.nucleon2.rotation.z += 0.01

  })
  mainAtomRing1.rotation.x += 0.08
  mainAtomRing2.rotation.x += 0.08
  mainAtomRing3.rotation.x += 0.08

  mainAtomNucleon.rotation.x += 0.1
  mainAtomNucleon1.rotation.y += 0.1
  mainAtomNucleon2.rotation.z += 0.1

  controls.update() // to show our mouse manipulations of the scene is captured
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    //console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const messageField = document.querySelector('#connectForm .message')

if (messageField instanceof HTMLTextAreaElement) {
  const resizeMessageField = () => {
    messageField.style.height = 'auto'
    messageField.style.height = `${messageField.scrollHeight}px`
  }

  resizeMessageField()
  messageField.addEventListener('input', resizeMessageField)
}

window.addEventListener('scroll', () => {
  moveCamera()
  requestThemeSync()
}, { passive: true })

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  requestThemeSync()
})

requestThemeSync()

// This is like a Game loop 
animate()
