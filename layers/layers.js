var wms_layers = [];


var vectorTileUrl_Limites_MAR_0 = 'layers/Limites_MAR_0-pbf/{z}/{x}/{y}.pbf';
var vectorTileSource_Limites_MAR_0 = new ol.source.VectorTile({
    format: new ol.format.MVT({
            featureClass: ol.Feature,
            layerName: '_mvtLayer_'
        }),
    tileSize: 256,
    cacheSize: 512,
    minZoom: 3,
    maxZoom: 4,
    url: vectorTileUrl_Limites_MAR_0,
    attributions: ' '
});
var lyr_Limites_MAR_0 = new ol.layer.VectorTile({
    declutter: false,
    source: vectorTileSource_Limites_MAR_0,
    sourceType: 'pbf',
    popuplayertitle: 'Limites_MAR',
    extent: ol.proj.transformExtent([-1903968.8765580629, 2364581.2076239986, -111141.0493230692, 4289954.807330219], 'EPSG:3857', 'EPSG:3857'),
    interactive: true,
    style: style_Limites_MAR_0,
    title: '<img src="styles/legend/Limites_MAR_0.png" /> Limites_MAR'
});

var format_Regions_MAR_1 = new ol.format.GeoJSON();
var features_Regions_MAR_1 = format_Regions_MAR_1.readFeatures(json_Regions_MAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regions_MAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regions_MAR_1.addFeatures(features_Regions_MAR_1);
var lyr_Regions_MAR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regions_MAR_1, 
                style: style_Regions_MAR_1,
                popuplayertitle: 'Regions_MAR',
                interactive: true,
                title: '<img src="styles/legend/Regions_MAR_1.png" /> Regions_MAR'
            });
var format_Aearoports_MAR_2 = new ol.format.GeoJSON();
var features_Aearoports_MAR_2 = format_Aearoports_MAR_2.readFeatures(json_Aearoports_MAR_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aearoports_MAR_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aearoports_MAR_2.addFeatures(features_Aearoports_MAR_2);
var lyr_Aearoports_MAR_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aearoports_MAR_2, 
                style: style_Aearoports_MAR_2,
                popuplayertitle: 'Aearoports_MAR',
                interactive: true,
                title: '<img src="styles/legend/Aearoports_MAR_2.png" /> Aearoports_MAR'
            });

lyr_Limites_MAR_0.setVisible(true);lyr_Regions_MAR_1.setVisible(true);lyr_Aearoports_MAR_2.setVisible(true);
var layersList = [lyr_Limites_MAR_0,lyr_Regions_MAR_1,lyr_Aearoports_MAR_2];
lyr_Limites_MAR_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', });
lyr_Regions_MAR_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'CODE_REGIO': 'CODE_REGIO', 'Nom_Region': 'Nom_Region', 'Population': 'Population', 'Menages': 'Menages', 'Etrangers': 'Etrangers', 'Marocains': 'Marocains', 'Non_ar': 'Non_ar', });
lyr_Aearoports_MAR_2.set('fieldAliases', {'Nom_fr': 'Nom_fr', 'Nom_ar': 'Nom_ar', 'iata': 'iata', 'capacite': 'capacite', });
lyr_Limites_MAR_0.set('fieldImages', {'OBJECTID': '', });
lyr_Regions_MAR_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'Nom_Region': 'TextEdit', 'Population': 'TextEdit', 'Menages': 'TextEdit', 'Etrangers': 'TextEdit', 'Marocains': 'TextEdit', 'Non_ar': 'TextEdit', });
lyr_Aearoports_MAR_2.set('fieldImages', {'Nom_fr': '', 'Nom_ar': '', 'iata': '', 'capacite': '', });
lyr_Limites_MAR_0.set('fieldLabels', {'OBJECTID': 'inline label - always visible', });
lyr_Regions_MAR_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'CODE_REGIO': 'inline label - always visible', 'Nom_Region': 'inline label - always visible', 'Population': 'inline label - always visible', 'Menages': 'inline label - always visible', 'Etrangers': 'inline label - always visible', 'Marocains': 'inline label - always visible', 'Non_ar': 'no label', });
lyr_Aearoports_MAR_2.set('fieldLabels', {'Nom_fr': 'inline label - always visible', 'Nom_ar': 'no label', 'iata': 'inline label - always visible', 'capacite': 'inline label - always visible', });
lyr_Aearoports_MAR_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});