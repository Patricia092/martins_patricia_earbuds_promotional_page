(() => {
    //Variables

    const model = document.querySelector("#model");
    const hotSpots = document.querySelectorAll(".Hotspot");
  
    //Functions

    function mLoaded() {
      //console.log(hotspots);
      hotSpots.forEach(hotspot => {
        hotspot.style.display = "block";
      });
    }
  
    const infoBoxes = [
      {
        title: "...",
        text: "...",
        image: "image/copperinsulation.jpg"
      },
      {
        title: "...",
        text: "..."
      },
      {
        title: "...",
        text: "..."
      }
    ];
  
    function loadInfo() {
      infoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);
        let title = document.createElement('h2');
        title.textContent = infoBox.title;
        let text = document.createElement('p');
        text.textContent = infoBox.text;
  // so falta fazer para a imagem, com a srct tag
        console.log(selected);
        console.log(infoBox.title);
        console.log(infoBox.text);
  
        selected.appendChild(title);
        selected.appendChild(text);
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
  
  