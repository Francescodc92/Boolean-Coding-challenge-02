const scooters = [
  {
    owner: "Gino22",
    position: "Via Guadalametri-a 220 metri da te",
    cargeStatus: 57,
  },

  {
    owner: "Mike24",
    position: "Via Ricciardoni - a 420 metri da te",
    cargeStatus: 80,
  },
  {
    owner: "Mike24",
    position: "Via Ricciardoni - a 420 metri da te",
    cargeStatus: 80,
  },
  {
    owner: "Mike24",
    position: "Via Ricciardoni - a 420 metri da te",
    cargeStatus: 80,
  },
  {
    owner: "Mike24",
    position: "Via Ricciardoni - a 420 metri da te",
    cargeStatus: 80,
  },
  {
    owner: "Fede154",
    position: "Via Mentorini-a 490 metri da te",
    cargeStatus: 29,
  },
  {
    owner: "Fede154",
    position: "Via Mentorini-a 490 metri da te",
    cargeStatus: 29,
  },
  {
    owner: "Fede154",
    position: "Via Mentorini-a 490 metri da te",
    cargeStatus: 29,
  },
  {
    owner: "Mike24",
    position: "Via Ricciardoni - a 420 metri da te",
    cargeStatus: 80,
  },
]

const scootersContainer = document.querySelector(".scooter-container")
const mobileButton = document.querySelector(".mobile-menu")

let index = 0
const innerHTMLScooters = (scooter) => {
  const CSSclass =
    scooter.cargeStatus < 30
      ? "carge-low"
      : scooter.cargeStatus < 60
      ? "carge-mediocre"
      : "carge"

  const html = `
        <div class="scooter">
          <div class="info">
            <div class="input-wrapper">
              <input type="radio" name="scooter" id="scooter-${index}" />
              <label for="scooter-${index}">
                monopattino
                <span class="name">${scooter.owner}</span>
              </label>
            </div>
            <img
              src="./assets/img0${Math.floor(Math.random() * 3) + 1}.jpg"
              alt="foto monopattino"
            />
          </div>
          <!--info-->
          <div class="location">
            <p>
              <i class="ph ph-map-pin-line"></i>
              ${scooter.position}
            </p>
          </div>
          <!--location-->

          <div class="battery">
            <progress
              class="status-bar ${CSSclass}"
              value="${scooter.cargeStatus}"
              max="100"
            ></progress>
            <span> ${scooter.cargeStatus}% </span>
          </div>

          <!--battery-->
        </div>
 `

  return html
}

scooters.forEach((scooter) => {
  index = index + 1
  scootersContainer.innerHTML += innerHTMLScooters(scooter)
})

mobileButton.addEventListener("click", () => {
  const navbar = document.querySelector(" header nav")
  navbar.classList.toggle("active")
})
