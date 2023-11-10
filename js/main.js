(() => {
  //Variables

  const model = document.querySelector("#model");
  const hotSpots = document.querySelectorAll(".Hotspot");

  //Functions

  function mLoaded() {
    hotSpots.forEach(hotspot => {
      hotspot.style.display = "block";
    });
  }

  const infoBoxes = [
    {
      title: "Readily Accessible",
      text: "The 'b' button enables straightforward, customizable on-ear controls for managing music, switching listening modes, handling calls, and activating the voice assistant.",
      img: "images/button.jpg"
    },
    {
      title: "All-Day Comfort",
      text: "The Barbie earbuds create a comfortable acoustic seal with four ear tip options (XS, S, M & L) to accommodate a wider range of ears.",
      img: "images/comfort.jpg"
    },
    {
      title: "42 Hours with Charging Case",
      text: "Experience uninterrupted audio enjoyment with the convenience of up to 42 hours of listening time when utilizing the included charging case.",
      img: "images/battery.jpg"
    },
    {
      title: "3x Larger Microphones",
      text: "3x larger microphones and a voice-targeting algorithm effectively filter out background noise, resulting in crisp and clear call performance.",
      img: "images/microphones.jpg"
    },

  ];

  function loadInfo() {
    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);
      let title = document.createElement('h2');
      title.textContent = infoBox.title;
      let text = document.createElement('p');
      text.textContent = infoBox.text;
      let img = document.createElement('img');
      img.src = infoBox.img;

      selected.appendChild(title);
      selected.appendChild(text);
      selected.appendChild(img);
    })
  }

  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`button[slot="${this.slot}"] > div`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event Listeners
  model.addEventListener("load", mLoaded);

  hotSpots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
  });



  //Animation

  const canvas = document.querySelector("#earbuds-view");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 250; 
  const images = []; 
  const buds = {
    frame: 0
  }
  for (let i = 0; i < frameCount; i++) {
    const img = document.createElement("img");
    img.src = `./images/earbuds/earbuds${(i + 1).toString().padStart(3, '0')}.Webp`;
    images.push(img);
  }
  console.table(images);

  gsap.to(buds, {
    frame: 249,
    snap: "frame",
    scrollTrigger: {
      trigger: "#earbuds-view",
      pin: true,
      scrub: 1,
      start: "top top",
      markers: false
    },
    onUpdate: render, 
  })

  images[0].addEventListener('load', render);

  function render() {
    console.log(buds.frame);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(images[buds.frame], 0, 0);

  }



  // x-ray

  let imageCon = document.querySelector('#imageCon'),
    drag = document.querySelector('.image-drag'),
    left = document.querySelector('.image-left'),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  function onDown() {
    dragging = true;
    console.log(dragging);
  }

  function onUp() {
    dragging = false;
  }

  function onMove(event) {
    if (dragging) {
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      console.log(x);

      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 8;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  drag.addEventListener('mousedown', onDown);
  document.body.addEventListener('mouseup', onUp)
  document.body.addEventListener('mousemove', onMove);

})();

