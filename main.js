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
    import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls' 
    
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

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1,1000)

const randomNumbers = (min, max) => {
	return Math.round(Math.random() * (max - min)) + min;
}


//Render out the graphics to the scene - make things happen
const renderer = new THREE.WebGLRenderer({
    //needs to know which DOM elements to use:
    canvas:document.querySelector('#bg')
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
const geometry = new THREE.TorusGeometry(2,1,16,50)
// define a material to give it color and or texture (wrapping paper for geometry)
//most materials rely on a light source to bounce off of them

const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true} ) // this basic material does not require it/
//const material = new THREE.MeshStandardMaterial({color:0xFF6347 } ) // this standard material does
// parameters for customizaton , like color, etc

//create a mesh to combine the geometry with the material
const torus = new THREE.Mesh(geometry, material)
const torus2 = new THREE.Mesh(geometry, material)

const knotGeometry = new THREE.TorusKnotGeometry( 1, 1, 10, 10 ); 
const knotMaterial = new THREE.MeshBasicMaterial( { color: 'aqua', wireframe:true } ); 
const torusKnot = new THREE.Mesh( knotGeometry, knotMaterial ); 

const SphereGeometry = new THREE.SphereGeometry(35,25,25)
const sphereTexture = new THREE.MeshBasicMaterial({color:'red', wireframe:true})
const sphere = new THREE.Mesh(SphereGeometry, sphereTexture)

const tetraGeo = new THREE.TetrahedronGeometry(2,1)
const tetraMat = new THREE.MeshBasicMaterial({color:'white', wireframe:true})
const tetra  = new THREE.Mesh(tetraGeo,tetraMat)

const sphere2Geometry = new THREE.SphereGeometry(10,10,15)
const sphere2Texture = new THREE.MeshBasicMaterial({color:'orange', wireframe:true})
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Texture)

const sphere3Geometry = new THREE.SphereGeometry(27,35,35)
const sphere3Texture = new THREE.MeshBasicMaterial({color:'red', wireframe:true})
const sphere3 = new THREE.Mesh(sphere3Geometry, sphere3Texture)

const capsuleGeo = new THREE.CapsuleGeometry(2, 5,2)
const capsuleMat = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true})
const capsule = new THREE.Mesh(capsuleGeo,capsuleMat)

const boxGeo = new THREE.BoxGeometry(10,10,10,5,5,5)
const boxMat = new THREE.MeshBasicMaterial({color:'green', wireframe:true})
const box = new THREE.Mesh(boxGeo,boxMat)

const selfie = new THREE.TextureLoader().load('./images/selfieSquare.jpg')
const selfieBoxGeo = new THREE.BoxGeometry(3,3,3)
const selfieBoxMat = new THREE.MeshBasicMaterial({map:selfie})
const selfieBox = new THREE.Mesh(selfieBoxGeo,selfieBoxMat)

const planeGeometry = new THREE.PlaneGeometry( 500, 25, 5,5 );
const planeMaterial = new THREE.MeshBasicMaterial( {color: 'red', side: THREE.DoubleSide} );
const plane = new THREE.Mesh( planeGeometry, planeMaterial );

const plane2Geometry = new THREE.PlaneGeometry( 500, 20, 5,5 );
const plane2Material = new THREE.MeshBasicMaterial( {color: 'black', side: THREE.DoubleSide} );
const plane2 = new THREE.Mesh( plane2Geometry, plane2Material );

const icoGeo = new THREE.IcosahedronGeometry(1,1)
const icoMat = new THREE.MeshBasicMaterial({color:'white', wireframe:true})
const ico = new THREE.Mesh(icoGeo,icoMat)
scene.background =  new THREE.Color("#fceee1")

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
  const newColorScheme = event.matches ? "dark" : "light";
  //console.log(newColorScheme)
  if(newColorScheme==='light'){
    scene.background =  new THREE.Color("#fceee1")
  
} else if(newColorScheme==='dark'){
  scene.background =  new THREE.Color("black")
  
  }
});

function createAtoms(){
const ring1Geo = new THREE.RingGeometry(0.5,0.49,150)
const ring1Mat = new THREE.MeshBasicMaterial({color:'blue', wireframe:true})
const ring1 = new THREE.Mesh(ring1Geo,ring1Mat)
const ring2Geo = new THREE.RingGeometry(0.5,0.49,150)
const ring2Mat = new THREE.MeshBasicMaterial({color:'blue', wireframe:true})
const ring2 = new THREE.Mesh(ring2Geo,ring2Mat)
const ring3Geo = new THREE.RingGeometry(0.5,0.49,150)
const ring3Mat = new THREE.MeshBasicMaterial({color:'blue', wireframe:true})
const ring3 = new THREE.Mesh(ring3Geo,ring3Mat)
scene.add(ring1)
scene.add(ring2)
scene.add(ring3)

const nucleon1Geo = new THREE.SphereGeometry(0.05,10,10)
const nucleon1Mat = new THREE.MeshBasicMaterial({color:'orange', wireframe:true})
const nucleon1 = new THREE.Mesh(nucleon1Geo,nucleon1Mat)
scene.add(nucleon1)

const nucleonGeo = new THREE.SphereGeometry(0.05,10,10)
const nucleonMat = new THREE.MeshBasicMaterial({color:'orange', wireframe:true})
const nucleon = new THREE.Mesh(nucleonGeo,nucleonMat)
scene.add(nucleon)

const nucleon2Geo = new THREE.SphereGeometry(0.05,10,10)
const nucleon2Mat = new THREE.MeshBasicMaterial({color:'orange', wireframe:true})
const nucleon2 = new THREE.Mesh(nucleon2Geo,nucleon2Mat)
scene.add(nucleon2)

const atomRange = 100
let x = randomNumbers(-atomRange,atomRange)
let y = randomNumbers(-atomRange,atomRange)
let z = randomNumbers(-atomRange,atomRange)

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

return {nucleon, nucleon1, nucleon2, ring1, ring2, ring3}
}

///
const mainAtomRing1Geo = new THREE.RingGeometry(2.5,2.4,150)
const mainAtomRing1Mat = new THREE.MeshBasicMaterial({color:'purple', wireframe:true})
const mainAtomRing1 = new THREE.Mesh(mainAtomRing1Geo,mainAtomRing1Mat)

const mainAtomRing2Geo = new THREE.RingGeometry(2.5,2.4,150)
const mainAtomRing2Mat = new THREE.MeshBasicMaterial({color:'purple', wireframe:true})
const mainAtomRing2 = new THREE.Mesh(mainAtomRing2Geo,mainAtomRing2Mat)

const mainAtomRing3Geo = new THREE.RingGeometry(2.5,2.4,150)
const mainAtomRing3Mat = new THREE.MeshBasicMaterial({color:'purple', wireframe:true})
const mainAtomRing3 = new THREE.Mesh(mainAtomRing3Geo,mainAtomRing3Mat)

scene.add(mainAtomRing1)
scene.add(mainAtomRing2)
scene.add(mainAtomRing3)

const mainAtomNucleon1Geo = new THREE.SphereGeometry(0.2,10,10)
const mainAtomNucleon1Mat = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true})
const mainAtomNucleon1 = new THREE.Mesh(mainAtomNucleon1Geo,mainAtomNucleon1Mat)
scene.add(mainAtomNucleon1)

const mainAtomNucleonGeo = new THREE.SphereGeometry(0.2,10,10)
const mainAtomNucleonMat = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true})
const mainAtomNucleon = new THREE.Mesh(mainAtomNucleonGeo,mainAtomNucleonMat)
scene.add(mainAtomNucleon)

const mainAtomNucleon2Geo = new THREE.SphereGeometry(0.2,10,10)
const mainAtomNucleon2Mat = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true})
const mainAtomNucleon2 = new THREE.Mesh(mainAtomNucleon2Geo,mainAtomNucleon2Mat)
scene.add(mainAtomNucleon2)



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
mainAtomNucleon1.position.y = 5+0.19
mainAtomNucleon1.position.z = 5

mainAtomNucleon.position.x = -12 + 0.19
mainAtomNucleon.position.y = 5
mainAtomNucleon.position.z = 5

mainAtomNucleon2.position.x = -12 
mainAtomNucleon2.position.y = 5
mainAtomNucleon2.position.z =  5+ 0.19


ico.position.x = -5
ico.position.y = 50
ico.position.z = 20


selfieBox.position.x = 5
selfieBox.position.y = 55
selfieBox.position.z = 20

sphere2.position.x = 80
sphere2.position.y = 30
sphere2.position.z = -100

box.position.x =150
box.position.y = 100
box.position.z= -400

capsule.position.x = -100
capsule.position.y = -20
capsule.position.z= -300

sphere.position.x = 30
sphere.position.y = -45
sphere.position.z = -10

sphere3.position.x = -20
sphere3.position.y = 50
sphere3.position.z = 50

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
//scene.add(sphere2)
scene.add(sphere3)
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
const gridHelper = new THREE.GridHelper(1000,1000)
//set its position
pointLight.position.set(20,20,20)
//add it to the scene
scene.add(pointLight)
scene.add(ambientLight)
//scene.add(lightHelper, gridHelper)

const controls = new OrbitControls(camera, renderer.domElement)// instanate that class


const gunish = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map:selfie})
)

//scene.add(gunish)


//Lets add multiple objects

function addAstroids(){
  //create star object:
  const astroGeometry = new THREE.SphereGeometry(0.1, 24,24)
  const astroMaterial= new THREE.MeshStandardMaterial({color:'white', wireframe:true})
  //combine
  const astro = new THREE.Mesh(astroGeometry,astroMaterial)
  
  //get random x,y,z positions
  //const [x,y,z] = Array(2).fill().map(()=> THREE.MathUtils.randFloatSpread(100)) // creates an array which fills each element with random floats between -100 and 100
  const astroRange = 60
  let x = randomNumbers(-astroRange,astroRange)
  let y = randomNumbers(-astroRange,astroRange)
  let z = randomNumbers(-astroRange,astroRange)
  astro.position.set(x,y,z)
  //add to scene
  scene.add(astro)
}

function moveCamera(){
  const webPage =  document.body.getBoundingClientRect().top

  
  //camera.position.z = webPage * -0.02
  //camera.position.x = webPage * -0.0002
  camera.position.y = webPage * -0.02
}

document.body.onscroll = moveCamera

//  Array(5000).fill().forEach(createAtoms)
const atomsArr = []
for(let i=0; i<2500; i++){
  let newAtom = createAtoms()
  //console.log(newAtom)
  atomsArr.push(newAtom)


}

const astroidArr = []
for(let i=0; i<100; i++){
  let newAstro = addAstroids()
  //console.log(newAstro)
  astroidArr.push(astroidArr)
}

function animate(){

  requestAnimationFrame(animate)// calls request animation frame from the browser which basically tells the browser we're gonna do some animations
  renderer.render(scene, camera)

   sphere.rotation.x += 0.001
   sphere.rotation.y += 0.005
   sphere.rotation.z += 0.001
   
   sphere3.rotation.x -= 0.001
   sphere3.rotation.y -= 0.005
   sphere3.rotation.z -= 0.001
  // sphere.position.z += 0.09
  
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

  box.position.x -=0.110
  box.position.y += 0.1
  box.position.z -= 0.001
  box.rotation.x -=0.0110
  box.rotation.y += 0.01
  box.rotation.z -= 0.001

  torusKnot.position.x += 0.10
  torusKnot.position.z += 0.01
  torusKnot.rotation.y += 0.01
  torusKnot.rotation.x -= 0.02
  torusKnot.rotation.z += 0.01

  sphere2.rotation.x += 0.05
  sphere2.rotation.y -= 0.02
  sphere2.rotation.z -= 0.02

  tetra.position.x += 0.1
  tetra.position.z -= 0.5

  selfieBox.rotation.x +=0.01
  selfieBox.rotation.y +=0.01
  selfieBox.rotation.z -=0.01

  // sphere3.rotation.z += 0.001
  // sphere3.rotation.z += 0.005
  // sphere3.rotation.z -= 0.001

  atomsArr.forEach((atom)=>{
    let randoNum1x = randomNumbers(0.06,-0.06)
    let randoNum1y = randomNumbers(0.05,-0.05)
    let randoNum1z = randomNumbers(0.04,-0.04)


    let randoNum2x = randomNumbers(-0.07,0.07)
    let randoNum2y = randomNumbers(-0.06,0.06)
    let randoNum2z = randomNumbers(-0.02,0.02)

    let randoNum3x = randomNumbers(-0.03,0.03)
    let randoNum3y = randomNumbers(-0.09,0.09)
    let randoNum3z = randomNumbers(-0.1,0.1)

    atom.ring1.rotation.x += randoNum1x
    atom.ring1.rotation.y += randoNum1y
    atom.ring1.rotation.z += randoNum1z

    atom.ring2.rotation.x += randoNum2x
    atom.ring2.rotation.y += randoNum2y
    atom.ring2.rotation.z += randoNum2z

    atom.ring3.rotation.x += randoNum3x
    atom.ring3.rotation.y += randoNum3y
    atom.ring3.rotation.z += randoNum3z

    atom.nucleon.rotation.x +=0.01
    atom.nucleon.rotation.y += 0.01
    atom.nucleon.rotation.z += 0.01

    atom.nucleon1.rotation.x +=0.01
    atom.nucleon1.rotation.y += 0.01
    atom.nucleon1.rotation.z += 0.01

    atom.nucleon2.rotation.x +=0.01
    atom.nucleon2.rotation.y += 0.01
    atom.nucleon2.rotation.z += 0.01

  })
  mainAtomRing1.rotation.x +=0.08
  mainAtomRing2.rotation.x +=0.08
  mainAtomRing3.rotation.x +=0.08

  mainAtomNucleon.rotation.x += 0.1
  mainAtomNucleon1.rotation.y += 0.1
  mainAtomNucleon2.rotation.z += 0.1
  
  controls.update() // to show our mouse manipulations of the scene is captured
}



opacity: 0;
const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    //console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show')
    } else{
      entry.target.classList.remove('show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el)=>observer.observe(el))

// This is like a Game loop 
animate()