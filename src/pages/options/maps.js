import mapsHelper from "../../assets/javascripts/helpers/maps.js";

let disableMapsElement = document.getElementById("disable-osm");

mapsHelper.init().then(() => {
    disableMapsElement.checked = !mapsHelper.getDisableMaps();
})

disableMapsElement.addEventListener("change",
    (event) => mapsHelper.setDisableMaps(!event.target.checked)
);