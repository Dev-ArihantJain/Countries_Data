import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { CountryService } from '../country.service';
import { FilterCountryPipe } from '../filter-country.pipe';

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, FilterCountryPipe],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css',
})
export class CountryListComponent implements OnInit {
  countries: any[] = [];
  searchQuery: string = '';
  filteredCountries: any[] = [];
  selectedRegion: string = 'All';

  filterByRegion() {
    if (this.selectedRegion === 'All') {
      this.filteredCountries = this.countries;
    } else {
      this.filteredCountries = this.countries.filter(
        (country) => country.region === this.selectedRegion
      );
    }
  }

  constructor(private countryService: CountryService, private router: Router) {}

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((data) => {
      this.countries = data;
      this.filterByRegion();
    });
  }
  // getting countries from json file

  goToDetail(country: any) {
    this.router.navigate(['/country', country.name]);
  }
}
// go to detail page
