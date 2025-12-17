import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<L.Map | null>(null);
  useEffect(() => {
    if (mapRef.current && !leafletMap.current) {
      // Initialize the map
      leafletMap.current = L.map(mapRef.current).setView([20, 0], 2);
      // Add the tile layer (using OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19
      }).addTo(leafletMap.current);
      // Define custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-div-icon',
        html: `<div style="background-color: rgba(59, 130, 246, 0.8); width: 12px; height: 12px; border-radius: 50%; border: 2px solid white;"></div>`,
        iconSize: [12, 12],
        iconAnchor: [6, 6]
      });
      // Add sample markers for popular destinations
      const destinations = [{
        name: 'Paris',
        coords: [48.8566, 2.3522],
        type: 'Cultural'
      }, {
        name: 'Tokyo',
        coords: [35.6762, 139.6503],
        type: 'Urban'
      }, {
        name: 'Bali',
        coords: [-8.4095, 115.1889],
        type: 'Beach'
      }, {
        name: 'New York',
        coords: [40.7128, -74.006],
        type: 'Urban'
      }, {
        name: 'Cape Town',
        coords: [-33.9249, 18.4241],
        type: 'Adventure'
      }, {
        name: 'Sydney',
        coords: [-33.8688, 151.2093],
        type: 'Urban'
      }, {
        name: 'Rio de Janeiro',
        coords: [-22.9068, -43.1729],
        type: 'Beach'
      }, {
        name: 'Cairo',
        coords: [30.0444, 31.2357],
        type: 'Cultural'
      }, {
        name: 'Kyoto',
        coords: [35.0116, 135.7681],
        type: 'Cultural'
      }, {
        name: 'Machu Picchu',
        coords: [-13.1631, -72.545],
        type: 'Adventure'
      }];
      destinations.forEach(dest => {
        const marker = L.marker(dest.coords as L.LatLngExpression, {
          icon: customIcon
        }).addTo(leafletMap.current!);
        marker.bindPopup(`
          <div style="font-family: 'Inter', sans-serif;">
            <strong>${dest.name}</strong><br>
            <span style="color: #6B7280; font-size: 0.875rem;">${dest.type}</span>
            <div style="margin-top: 8px;">
              <button style="background-color: #3B82F6; color: white; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; border: none; cursor: pointer;">
                Explore
              </button>
            </div>
          </div>
        `);
      });
    }
    // Cleanup function
    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);
  return <div ref={mapRef} className="h-full w-full" />;
};
export default Map;