import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCountry',
  standalone: true,
})
export class FilterCountryPipe implements PipeTransform {
  transform(countries: any[], searchQuery: string): any[] {
    if (!countries || !searchQuery) {
      return countries;
    }
    return countries.filter(
      (country) =>
        country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        country.region.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
}
