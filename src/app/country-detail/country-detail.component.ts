import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class CountryDetailComponent implements OnInit {
  country: any;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    const countryName = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountries().subscribe((data) => {
      this.country = data.find((c: any) => c.name === countryName);
    });
  }
}
