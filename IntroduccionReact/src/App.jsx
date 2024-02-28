
import  AplicacionArcGIS  from "./componentes/AplicacionArcGIS/AplicacionArcGIS"
import Header from "./componentes/Header/Header";

import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <section className="SectionAplicaciones">
        <AplicacionArcGIS 
          logoLink={"https://www.esri.com/content/dam/esrisites/en-us/common/icons/product-logos/ArcGIS_Experience_Builder_220.png"}
          logoAlt={"Logo de Experience Builder"}
          nombreApp={"Experience Builder"}
          descripcionApp={"ArcGIS Experience Builder es una solución altamente configurable para crear aplicaciones web atractivas sin escribir código."}
          productoLink={"https://www.esri.com/es-es/arcgis/products/arcgis-experience-builder/overview"}
        
        ></AplicacionArcGIS>

        <AplicacionArcGIS 
          logoLink={"https://www.esri.es/content/dam/esrisites/en-us/common/icons/product-logos/StoryMaps.png"}
          logoAlt={"Logo de ArcGIS Story Maps"}
          nombreApp={"ArcGIS Story Maps"}
          descripcionApp={"Cuenta historias Memorables a través de tus datos, transformando tus relatos digitales con mapas personalizados"}
          productoLink={"https://www.esri.es/es-es/arcgis/productos/arcgis-storymaps/introduccion"}
        
        ></AplicacionArcGIS>

        <AplicacionArcGIS 
          logoLink={"https://www.esri.es/content/dam/distributor-share/esri-cis-ru/home/common/icons/product-logos/arcgis-dashboards.png"}
          logoAlt={"Logo de ArcGIS Dashboards"}
          nombreApp={"ArcGIS Dashboards"}
          descripcionApp={"Proporciona visualización de datos geolocalizados y análisis para una visión operacional en tiempo real de personas, servicios, activos y eventos."}
          productoLink={"https://www.esri.es/es-es/arcgis/productos/operations-dashboard-for-arcgis/introduccion"}
        
        ></AplicacionArcGIS>

      </section>
      
    </>
  );
}

export default App;
