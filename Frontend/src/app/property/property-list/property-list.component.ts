import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule
import { PropertyCardComponent } from '../property-card/property-card.component';  // Correct import

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
  standalone: true,  // Mark as standalone
  imports: [CommonModule, PropertyCardComponent],  // Import PropertyCardComponent and CommonModule
})
export class PropertyListComponent {
  properties = [
    { Id: 1, Name: 'Sunny Villa', Type: 'House', Price: 12000 },
    { Id: 2, Name: 'Ocean Breeze', Type: 'Villa', Price: 15000 },
    { Id: 3, Name: "Ocean View", Type: "Condo", Price: 20000 },
    { Id: 4, Name: "Mountain Retreat", Type: "Cabin", Price: 18000 },
    { Id: 5, Name: "Lakeside Cottage", Type: "Cottage", Price: 10000 },
    { Id: 6, Name: "City Loft", Type: "Apartment", Price: 25000 },
    { Id: 7, Name: "Modern Mansion", Type: "Mansion", Price: 50000 },
    { Id: 8, Name: "Cozy Studio", Type: "Apartment", Price: 8000 },
    { Id: 9, Name: "Luxury Penthouse", Type: "Penthouse", Price: 35000 },
    { Id: 10, Name: "Urban Bungalow", Type: "House", Price: 22000 },
    { Id: 11, Name: "Green Acres", Type: "Farm", Price: 27000 },
    { Id: 12, Name: "Elegant Estate", Type: "Villa", Price: 40000 },
    { Id: 13, Name: "Beachfront Paradise", Type: "Condo", Price: 30000 },
    { Id: 14, Name: "Quiet Suburban Home", Type: "House", Price: 15000 },
    { Id: 15, Name: "Rustic Hideaway", Type: "Cabin", Price: 12000 },
    { Id: 16, Name: "City Center Apartment", Type: "Apartment", Price: 22000 },
    { Id: 17, Name: "Charming Cottage", Type: "Cottage", Price: 10000 },
    { Id: 18, Name: "Spacious Villa", Type: "Villa", Price: 32000 },
    { Id: 19, Name: "Coastal Retreat", Type: "Condo", Price: 28000 },
    { Id: 20, Name: "Designer Loft", Type: "Apartment", Price: 27000 },
    { Id: 21, Name: "Modern Farmhouse", Type: "Farm", Price: 23000 },
    { Id: 22, Name: "Luxury Beach House", Type: "House", Price: 40000 },
    { Id: 23, Name: "Mountain Lodge", Type: "Cabin", Price: 20000 },
    { Id: 24, Name: "Stylish Condo", Type: "Condo", Price: 22000 },
    { Id: 25, Name: "Spacious Ranch", Type: "Farm", Price: 25000 },
    { Id: 26, Name: "City Penthouse", Type: "Penthouse", Price: 45000 },
    { Id: 27, Name: "Elegant Villa", Type: "Villa", Price: 35000 },
    { Id: 28, Name: "Country Cottage", Type: "Cottage", Price: 18000 },
    { Id: 29, Name: "Loft Apartment", Type: "Apartment", Price: 21000 },
    { Id: 30, Name: "Luxury Villa", Type: "Villa", Price: 50000 },
    { Id: 31, Name: "Charming Farmhouse", Type: "Farm", Price: 23000 },
    { Id: 32, Name: "Contemporary House", Type: "House", Price: 27000 },
    { Id: 33, Name: "Beachside Retreat", Type: "Condo", Price: 32000 },
    { Id: 34, Name: "Stylish House", Type: "House", Price: 20000 },
    { Id: 35, Name: "Countryside Bungalow", Type: "Bungalow", Price: 24000 },
    { Id: 36, Name: "Grand Mansion", Type: "Mansion", Price: 60000 },
    { Id: 37, Name: "Cozy Bungalow", Type: "Bungalow", Price: 15000 },
    { Id: 38, Name: "Country Retreat", Type: "House", Price: 23000 },
    { Id: 39, Name: "Exclusive Penthouse", Type: "Penthouse", Price: 55000 },
    { Id: 40, Name: "Luxury Apartment", Type: "Apartment", Price: 30000 },
    { Id: 41, Name: "Elegant Beach House", Type: "House", Price: 40000 },
    { Id: 42, Name: "Luxury Mansion", Type: "Mansion", Price: 70000 },
    { Id: 43, Name: "Mountain Chalet", Type: "Cabin", Price: 35000 },
    { Id: 44, Name: "Urban Loft", Type: "Apartment", Price: 25000 },
    { Id: 45, Name: "Luxury Condo", Type: "Condo", Price: 27000 },
    { Id: 46, Name: "Lakeview Villa", Type: "Villa", Price: 32000 },
    { Id: 47, Name: "City View Penthouse", Type: "Penthouse", Price: 45000 },
    { Id: 48, Name: "Modern House", Type: "House", Price: 28000 },
    { Id: 49, Name: "Charming Mansion", Type: "Mansion", Price: 60000 },
    { Id: 50, Name: "Seaside Retreat", Type: "Villa", Price: 35000 }
  ];
}
 