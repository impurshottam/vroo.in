import { TOUR_TYPES } from "../constants/TourTypes";
import { TOUR_STATUS } from "../constants/TourStatus";
export const TOURS_TEST_DATA =  [
    {
      title: "Virutal tour",
      path: "demotour-corfu/tour.xml",
      type: TOUR_TYPES.SIMPLE_VIRTUAL_TOUR,
      status:TOUR_STATUS.PUBLISHED,
      cover:
        "/krpano/examples/demotour-corfu/panos/achilleion-hof-unten.tiles/mobile_f.jpg"
    },
    {
      title: "Interactive virtual tour",
      path: "demotour-apartment/tour.xml",
      type: TOUR_TYPES.INTERACTIVE_VIRTUAL_TOUR,
      status:TOUR_STATUS.DRAFT,
      cover:
        "/krpano/examples/demotour-apartment/panos/IMG_1191-HDR_Panorama.tiles/pano_f.jpg"
    },
    {
      title: "Interactive virtual tour with hotspot",
      path: "demotour-winecellar/tour.xml",
      type: TOUR_TYPES.INTERACTIVE_VIRTUAL_TOUR_WITH_HOT_SPOTS,
      status:TOUR_STATUS.PUBLISHED,
      cover: "/krpano/examples/demotour-winecellar/panos/mitte.tiles/pano_r.jpg"
    }
  ];

  
  //
  //
  // gravina-apartment-tour/main.xml
  // depthmap_helpertool_example.xml
  // googlemaps/googlemaps.xml
  // interactive-area/interactive-area.xml
  // demotour-corfu/tour.xml&skin_settings.littleplanetintro=true
  // paris/
  // tokyo45gp/
  // petersplatzkuppel.xml
  // vorne/kolosseum_vorne.xml
  // http://127.0.0.1:5500/viewer/krpano.html?xml=examples/snow/snow.xml
  // http://127.0.0.1:5500/viewer/krpano.html?xml=examples/videopano/videopano.xml
  