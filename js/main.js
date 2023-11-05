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
  
})();

