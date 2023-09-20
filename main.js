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
    
    import './style.scss'
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
const geometry = new THREE.TorusGeometry(5,3,10,50)
// define a material to give it color and or texture (wrapping paper for geometry)
//most materials rely on a light source to bounce off of them

const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true} ) // this basic material does not require it/
//const material = new THREE.MeshStandardMaterial({color:0xFF6347 } ) // this standard material does
// parameters for customizaton , like color, etc

//create a mesh to combine the geometry with the material
const torus = new THREE.Mesh(geometry, material)
const torus2 = new THREE.Mesh(geometry, material)

const knotGeometry = new THREE.TorusKnotGeometry( 1, 1, 10, 10 ); 
const knotMaterial = new THREE.MeshBasicMaterial( { color: 'pink', wireframe:true } ); 
const torusKnot = new THREE.Mesh( knotGeometry, knotMaterial ); 

const SphereGeometry = new THREE.SphereGeometry(35,25,25)
const sphereTexture = new THREE.MeshBasicMaterial({color:'blue', wireframe:true})
const sphere = new THREE.Mesh(SphereGeometry, sphereTexture)

const tetraGeo = new THREE.TetrahedronGeometry(2,0)
const tetraMat = new THREE.MeshBasicMaterial({color:'purple', wireframe:true})
const tetra  = new THREE.Mesh(tetraGeo,tetraMat)

const sphere2Geometry = new THREE.SphereGeometry(10,10,15)
const sphere2Texture = new THREE.MeshBasicMaterial({color:'orange', wireframe:true})
const sphere2 = new THREE.Mesh(sphere2Geometry, sphere2Texture)

const capsuleGeo = new THREE.CapsuleGeometry(2, 5,2)
const capsuleMat = new THREE.MeshBasicMaterial({color:'yellow', wireframe:true})
const capsule = new THREE.Mesh(capsuleGeo,capsuleMat)

const boxGeo = new THREE.BoxGeometry(10,10,10,5,5,5)
const boxMat = new THREE.MeshBasicMaterial({color:'green', wireframe:true})
const box = new THREE.Mesh(boxGeo,boxMat)

const selfie = new THREE.TextureLoader().load('./images/selfie.jpg')
const selfieBoxGeo = new THREE.BoxGeometry(3,3,3)
const selfieBoxMat = new THREE.MeshBasicMaterial({map:selfie})
const selfieBox = new THREE.Mesh(selfieBoxGeo,selfieBoxMat)


selfieBox.position.x = 5
selfieBox.position.y = 50
selfieBox.position.z = 20

sphere2.position.x = -100
sphere2.position.y = 200
sphere2.position.z = -500

box.position.x =150
box.position.y = 100
box.position.z= -400

capsule.position.x = -100
capsule.position.y = -20
capsule.position.z= -300

sphere.position.x = 0
sphere.position.y = -40
sphere.position.z = -10

torus.position.x = 0
torus.position.y = -40
torus.position.z = -10
torus2.position.x = 0
torus2.position.y = -40
torus2.position.z = -10

torusKnot.position.x = -50
torusKnot.position.y = 50
torusKnot.position.z = -10

tetra.position.x = -15
tetra.position.y = 5
tetra.position.z = 50
//add object to screen
scene.add(sphere)
scene.add(sphere2)
scene.add(torus)
scene.add(torus2)
scene.add( torusKnot );
scene.add(capsule)
scene.add(tetra)
scene.add(box)
scene.add(selfieBox)
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
const texture = new THREE.TextureLoader().load('./images/JWT.png')
//scene.background = texture

const gunish = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial({map:texture})
)

//scene.add(gunish)

const randomNumbers = (min, max) => {
	return Math.round(Math.random() * (max - min)) + min;
}

//Lets add multiple objects

function addStar(){
  //create star object:
  const starGeometry = new THREE.SphereGeometry(0.1, 24,24)
  const starMaterial= new THREE.MeshStandardMaterial({color:'red', wireframe:true})
  //combine
  const star = new THREE.Mesh(starGeometry,starMaterial)
  
  //get random x,y,z positions
  //const [x,y,z] = Array(2).fill().map(()=> THREE.MathUtils.randFloatSpread(100)) // creates an array which fills each element with random floats between -100 and 100
  const starRange = 100
  let x = randomNumbers(-starRange,starRange)
  let y = randomNumbers(-starRange,starRange)
  let z = randomNumbers(-starRange,starRange)
  star.position.set(x,y,z)
  //add to scene
  scene.add(star)
}

function moveCamera(){
  const webPage =  document.body.getBoundingClientRect().top

  
  //camera.position.z = webPage * -0.02
  //camera.position.x = webPage * -0.0002
  camera.position.y = webPage * -0.02
}

document.body.onscroll = moveCamera
Array(5000).fill().forEach(addStar)

function animate(){

  requestAnimationFrame(animate)// calls request animation frame from the browser which basically tells the browser we're gonna do some animations
  renderer.render(scene, camera)

  sphere.rotation.x += 0.001
  sphere.rotation.y += 0.005
  sphere.rotation.z += 0.001
  sphere.position.z += 0.09
  
  capsule.rotation.x += 0.01
  capsule.rotation.y += 0.05
  capsule.rotation.z += 0.01
  capsule.position.z += 0.9
  
  torus.rotation.x += 0.03
  torus.rotation.y += 0.10
  torus.rotation.z += 0.02
  torus.position.z += 0.09

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

  sphere2.position.x += 0.500
  sphere2.position.y -= 0.200
  sphere2.rotation.y -= 0.200

  tetra.position.x += 0.1
  tetra.position.z -= 0.5

  selfieBox.rotation.x +=0.01
  selfieBox.rotation.y +=0.01
  selfieBox.rotation.z -=0.01
  
  controls.update() // to show our mouse manipulations of the scene is captured
}

// This is like a Game loop 
animate()