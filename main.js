
    import {
      loadGLTF,
      loadTexture,
      loadTextures,
      loadVideo,
    } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/loader.js";

    import { createChromaMaterial } from "https://cdn.jsdelivr.net/gh/Dwar-liberin/dwar-lib/libs/chroma-video.js" 
    import TWEEN from "https://cdn.jsdelivr.net/npm/@tweenjs/tween.js@18.6.4/dist/tween.esm.js";
      let analytics=null
  const animationManager = new AnimationManager();

      const isIOS = navigator.appVersion.indexOf("Mac") != -1 ? true : false;
      try {

        analytics = new Analytics(
          {
              appName: "DwAR",
              customerId: "4",
              campaignName: "audi2",
              serverUrl: "https://lttl.in/event"
          }
       );

      Analytics.active = true;

      } catch(e) {
        console.log("Err", e.message)
      }
      
  

    const THREE = window.MINDAR.IMAGE.THREE;

    
    async function loadUnmuteLogo() {
      const muteIconGeo = new THREE.CircleGeometry(0.5, 32);
      const muteIconTexture = await loadTexture("assets/mute.png");
      const muteIconMaterial = new THREE.MeshBasicMaterial({
        map: muteIconTexture,
      });
    
      const muteIconMesh = new THREE.Mesh(muteIconGeo, muteIconMaterial);
      muteIconMesh.scale.set(0.1, 0.1);
      muteIconMesh.position.set(0, -0.5, 0.3);
    
      muteIconMesh.userData.clickable = true;
    
      return muteIconMesh;
    }

    

    
 function executeAnimation(animation, mesh) {
  console.log('animation', animation)
  const { name, state, value, duration, delay } = animation;

  switch (name) {
    case "slide":
      if (state === "left") {
        animationManager.animateSlide(mesh, null, duration, null, value, delay);
      }
      else if (state === "right") {
        animationManager.animateSlide(mesh, null, duration, value, state, delay);
      } else if (state === "up") {
        animationManager.animateSlideUp(mesh, duration, value, delay);
      } else {
        animationManager.animateSlideDown(mesh, duration, value, delay);

      }
      break;
    case "fade":
      if (state == "in") {
        animationManager.animateFadeIn(mesh, duration, delay);
      } else {
        animationManager.animateFadeOut(mesh, duration, delay);
      }
      break;
    case "scale":
      if (state == "up") animationManager.animateScaleUp(mesh, value, duration, null, delay);
      else animationManager.animateScaleDown(mesh, value, duration, null, delay);
      break;
    case "bounce":
      animationManager.animateBounce(mesh, "z", value, duration, delay); // Assuming "z" axis for bounce
      break;
    default:
      console.error("Unknown animation");
      break;
  }
}
    

    document.addEventListener("DOMContentLoaded", () => {

    // DwAR Analytics
    try {
      console.log("ana", analytics)
      if(analytics){
        console.log("ana", analytics)
        analytics.trackPageLoad({
          eventType: 'load',
          payload: true,
        });
  
        analytics.sendQueryParam()
      }
     
    } catch(e) {
      console.log("e", e.message)
    }


    async function start(){

      let muteIconMesh;
      
      
 
  const mindThree =  new window.MINDAR.IMAGE.MindARThree({
    container: document.body,
    imageTargetSrc: "assets/target.mind",
    uiLoading: "#scanning-overlay",
  });

  const { renderer, scene, camera } = mindThree;
  const anchor = mindThree.addAnchor(0);

  const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
  scene.add(light);

  const loadFont = (fontURL) => {
    return new Promise((resolve, reject) => {
      const loader = new THREE.FontLoader();

      loader.load(
        fontURL,
        (font) => {
          resolve(font); // Resolve the promise with the loaded font
        },
        undefined, // Progress callback (optional)
        (error) => {
          reject(error); // Reject the promise with the error
        }
      );
    });
  };

  
    
      const image_c53ccca7_4d5858ee_iconGeometry = new THREE.PlaneGeometry(1, 0.65);
   const image_c53ccca7_4d5858ee_texture = await loadTexture("assets/audi-logo.png");
  const image_c53ccca7_4d5858ee_image = new THREE.MeshBasicMaterial({
      map: image_c53ccca7_4d5858ee_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_c53ccca7_4d5858ee = new THREE.Mesh(image_c53ccca7_4d5858ee_iconGeometry, image_c53ccca7_4d5858ee_image);
    image_c53ccca7_4d5858ee.scale.set(0.3, 0.33, 0.3);
    image_c53ccca7_4d5858ee.position.set(-0.305, -0.6, 0.04);
    image_c53ccca7_4d5858ee.rotation.set(0, 0, 0);
    image_c53ccca7_4d5858ee.userData.clickable = true
    
    image_c53ccca7_4d5858ee.userData.eventName ="Audi Website"
const image_36418ace_51694bfe_iconGeometry = new THREE.PlaneGeometry(1, 0.52);
   const image_36418ace_51694bfe_texture = await loadTexture("assets/Group 1261156650.png");
  const image_36418ace_51694bfe_image = new THREE.MeshBasicMaterial({
      map: image_36418ace_51694bfe_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const image_36418ace_51694bfe = new THREE.Mesh(image_36418ace_51694bfe_iconGeometry, image_36418ace_51694bfe_image);
    image_36418ace_51694bfe.scale.set(0.4, 0.4, 1);
    image_36418ace_51694bfe.position.set(0.288, -0.6, 0.04);
    image_36418ace_51694bfe.rotation.set(0, 0, 0);
    image_36418ace_51694bfe.userData.clickable = true
    
    image_36418ace_51694bfe.userData.eventName ="Test Drive"
const target_imageshared346ab_iconGeometry = new THREE.PlaneGeometry(1, 0.720164609053498);
   const target_imageshared346ab_texture = await loadTexture("assets/shared image (4).jpg");
  const target_imageshared346ab_image = new THREE.MeshBasicMaterial({
      map: target_imageshared346ab_texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const target_imageshared346ab = new THREE.Mesh(target_imageshared346ab_iconGeometry, target_imageshared346ab_image);
    target_imageshared346ab.scale.set(1, 1, 1);
    target_imageshared346ab.position.set(0.01, -0.01, 0.01);
    target_imageshared346ab.rotation.set(-0.001, 0, 0);
    
    
    

    const video_asset_8c087b3a4a3_planeGeometry = new THREE.PlaneGeometry(1, 0.7678244972577697);

    const video_asset_8c087b3a4a3_Item0Video = await loadVideo("assets/audi car video.mp4");

    const video_asset_8c087b3a4a3_Item0VideoTexture = new THREE.VideoTexture(
      video_asset_8c087b3a4a3_Item0Video
    );

    let video_asset_8c087b3a4a3_Item0VideoMaterial

      video_asset_8c087b3a4a3_Item0VideoMaterial = new THREE.MeshBasicMaterial({
          map: video_asset_8c087b3a4a3_Item0VideoTexture,
          transparent:true
        })
    
     const video_asset_8c087b3a4a3 = new THREE.Mesh(
      video_asset_8c087b3a4a3_planeGeometry,
      video_asset_8c087b3a4a3_Item0VideoMaterial
    );

  video_asset_8c087b3a4a3.position.set(0.012, -0.004, 0.022);



  if (isIOS) {
    video_asset_8c087b3a4a3_Item0Video.muted=isIOS
    muteIconMesh = await loadUnmuteLogo();
    anchor.group.add(muteIconMesh);
  }

  video_asset_8c087b3a4a3_Item0Video.loop=true;
  
  video_asset_8c087b3a4a3.scale.set(0.97, 0.85, 1);

    video_asset_8c087b3a4a3.rotation.set(0, 0, 0);

    
  
      
       document.body.addEventListener("click", (e) => {
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    const mouse = new THREE.Vector2(mouseX, mouseY);
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);

    if (intersects.length > 0) {
      let o = intersects[0].object;

      while (o.parent && !o.userData?.clickable) {
        o = o.parent;
      }

      if(o.userData.clickable && analytics){
        
        try {
          analytics.trackClick({
            eventType: "click",
            payload: o.userData.eventName
          })
        } catch (err){
          console.log("Err", err)
        }
       
      }

        if(isIOS){ 
          if (o.userData.clickable && o === muteIconMesh) {
            video_asset_8c087b3a4a3_Item0Video.muted=false
    
            anchor.group.remove(muteIconMesh);
            return true;
          }
        }


      // if button is clickable then loading screen is show. And when user redirect to the screen loader automatically gone because script is change.
      
      if (o.userData.clickable) window.showLoadingScreen();

      
      if (o.userData.clickable && o === image_c53ccca7_4d5858ee) {
        setTimeout(()=>{
          window.location.href = "https://www.audi.in/in/web/en.html"
        },100)
        }
      

      if (o.userData.clickable && o === image_36418ace_51694bfe) {
        setTimeout(()=>{
          window.location.href = "https://auditestdrive.in/en/cartestdrive/book/49/Q3BoldEdition/847"
        },100)
        }
      
      }

    })
    
      
    anchor.group.add(image_c53ccca7_4d5858ee)
anchor.group.add(image_36418ace_51694bfe)

anchor.group.add(video_asset_8c087b3a4a3)


    anchor.onTargetFound = () => {
      try {
        if(analytics){
          analytics.trackMarkerScanned();
        }
      } catch(e) {
        console.log("Err", e)
      }

            



                  executeAnimation({"name":"fade","state":"in","value":-1.2,"duration":1000,"delay":0,"event":"load"}, video_asset_8c087b3a4a3)

     
      video_asset_8c087b3a4a3_Item0Video.play();
    };


    anchor.onTargetLost = () => {
       video_asset_8c087b3a4a3_Item0Video.pause();

        


animationManager.resetObject(name)
    }
    
    
      
    await mindThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
       TWEEN.update();
    });
    
    }
    start();
    })
    
    