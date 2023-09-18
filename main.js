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
    
    import './style.css'
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

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1,1000)


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
const geometry = new THREE.TorusGeometry(10,3,6,100)
// define a material to give it color and or texture (wrapping paper for geometry)
//most materials rely on a light source to bounce off of them

const material = new THREE.MeshBasicMaterial({color:0xFF6347, wireframe:true} ) // this basic material does not require it/
//const material = new THREE.MeshStandardMaterial({color:0xFF6347 } ) // this standard material does
// parameters for customizaton , like color, etc

//create a mesh to combine the geometry with the material
const torus = new THREE.Mesh(geometry, material)

//add object to screen
scene.add(torus)
// to see it gotta rerender(draw) the scene but you dont wanna do that its tideous so we finna set up a recursive function to do that
//renderer.render(scene)

const bufferGeo = new THREE.BoxGeometry(10,10,10)
const bufferMat = new THREE.MeshBasicMaterial({color:'blue', wireframe:true})
const buffer = new THREE.Mesh(bufferGeo,bufferMat)


//need a lightsource to see that second material so lets add one: pointLight (there are more)
const pointLight = new THREE.PointLight(0xffffff)
const ambientLight = new THREE.AmbientLight(0xffffff)
const lightHelper = new THREE.PointLightHelper(pointLight) // show us the position of a pointLight
const gridHelper = new THREE.GridHelper(200,500)
//set its position
pointLight.position.set(20,20,20)
//add it to the scene
scene.add(pointLight)
scene.add(ambientLight)
scene.add(lightHelper, gridHelper)
//scene.add(buffer)
const controls = new OrbitControls(camera, renderer.domElement)// instanate that class

const randomNumbers = (min, max) => {
	return Math.round(Math.random() * (max - min)) + min;
}

//Lets add multiple objects

function addStar(){
  //create star object:
  const starGeometry = new THREE.SphereGeometry(0.24, 24,24)
  const starMaterial= new THREE.MeshStandardMaterial({color:'red', wireframe:true})
  //combine
  const star = new THREE.Mesh(starGeometry,starMaterial)
  
  //get random x,y,z positions
  //const [x,y,z] = Array(2).fill().map(()=> THREE.MathUtils.randFloatSpread(100)) // creates an array which fills each element with random floats between -100 and 100
  let x = randomNumbers(-25,25)
  let y = randomNumbers(-25,25)
  let z = randomNumbers(-25,25)
  star.position.set(x,y,z)
  //add to scene
  scene.add(star)
}

Array(200).fill().forEach(addStar)

function animate(){

  requestAnimationFrame(animate)// calls request animation frame from the browser which basically tells the browser we're gonna do some animations
  renderer.render(scene, camera)

  torus.rotation.x += 0.01
  torus.rotation.y += 0.05
  torus.rotation.z += 0.01
  buffer.rotation.x += 0.05
  controls.update() // to show our mouse manipulations of the scene is captured
}

// This is like a Game loop 
animate()