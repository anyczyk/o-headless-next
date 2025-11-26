document.addEventListener('DOMContentLoaded', () => {
  console.log(".m-007-maps-v1 loaded");

  setTimeout(() => {
    const modules = document.querySelectorAll(".ho-module-m-007-maps-v1");
    if (!modules.length) return;
    window.gm_authFailure = function() {
      console.warn("gm_authFailure – Google Maps key is invalid or blocked!");
      modules.forEach(item => {
        const mapDiv = item.querySelector(".ho-module-m-007-maps-v1__map-init");
        const imgDiv = item.querySelector(".ho-module-m-007-maps-v1__image-init");
        mapDiv?.classList.add("d-none");
        imgDiv?.classList.remove("d-none");

      });
    };
    window.initAllMaps = function() {
      modules.forEach(item => {
        const mapInit = item.querySelector(".ho-module-m-007-maps-v1__map-init");
        const centerCoordinate = mapInit.dataset.centerCoordinate
            ? mapInit.dataset.centerCoordinate.split(",")
            : [];
        const zoom = parseInt(mapInit.dataset.zoom) || 10;

        const pinCoordinates = mapInit.dataset.pinCoordinates
            ? mapInit.dataset.pinCoordinates.split("|")
            : [];
        const pinTitles = mapInit.dataset.pinTitles
            ? mapInit.dataset.pinTitles.split("|")
            : [];
        const pinDescriptions = mapInit.dataset.pinDescriptions
            ? mapInit.dataset.pinDescriptions.split("|")
            : [];
        const pinLinks = mapInit.dataset.pinLinks
            ? mapInit.dataset.pinLinks.split("|")
            : [];
        const pinLinksBoolean = mapInit.dataset.pinLinksBoolean
            ? mapInit.dataset.pinLinksBoolean.split("|")
            : [];

        const centerCoords = {
          lat: Number(centerCoordinate[0]) || 0,
          lng: Number(centerCoordinate[1]) || 0
        };

        const map = new google.maps.Map(mapInit, {
          center: centerCoords,
          zoom: zoom
        });

        let currentInfoWindow = null;

        pinCoordinates.forEach((pin, index) => {
          const coords = pin.split(",");
          const title = (pinTitles[index] || "").trim();
          const description = (pinDescriptions[index] || "").trim();
          const link = (pinLinks[index] || "").trim();
          const linkBoolean = (pinLinksBoolean[index] || "").trim();

          const marker = new google.maps.Marker({
            position: { lat: Number(coords[0]), lng: Number(coords[1]) },
            map: map,
            title: title ? title : `${coords[0]}:${coords[1]}`
          });

          let infoWindowContent = '<div class="ho-module-m-007-maps-v1__map-cloud">';
          if (title) {
            infoWindowContent += `<h3 class="h6">${title}</h3>`;
          }
          if (description) {
            infoWindowContent += `<p>${description}</p>`;
          }
          if (link) {
            infoWindowContent += `<a href="${link}" target="_blank"><i class="icon-link"></i> More...</a>`;
          } else {
            infoWindowContent += `<a href="https://www.google.com/maps/place/${coords[0]},${coords[1]}/@${coords[0]},${coords[1]},${zoom}z?hl=en" target="_blank"><i class="icon-link"></i> Check on the Google Maps page...</a>`;
          }
          infoWindowContent += '</div>';

          const infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
          });

          marker.addListener("click", () => {
            if (currentInfoWindow) {
              currentInfoWindow.close();
            }
            if (title) {
              infoWindow.open(map, marker);
            } else {
              if (linkBoolean === "true") {
                if (link) {
                  window.open(link, "_blank");
                } else {
                  window.open(
                      `https://www.google.com/maps/place/${coords[0]},${coords[1]}/@${coords[0]},${coords[1]},${zoom}z?hl=en`,
                      "_blank"
                  );
                }
              }
            }
            currentInfoWindow = infoWindow;
          });
        });
      });
    };

    const googleScript = document.createElement("script");
    googleScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD3w8OGWy7QNGq8Eb60GrKw3giU7uKrWbA&callback&callback=initAllMaps";
    googleScript.async = true;
    googleScript.defer = true;

    googleScript.onerror = function() {
      console.error("Google Maps Error");
      window.gm_authFailure();
    };

    document.body.appendChild(googleScript);

  }, 300);
});