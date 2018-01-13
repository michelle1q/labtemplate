import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-sandwich',
  templateUrl: './sandwich.component.html',
  styleUrls: ['./sandwich.component.less']
})
export class SandwichComponent implements OnInit {

  sandwich: Sandwich[];
  selectedSandwich: Sandwich;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/sandwich/').subscribe(res => {
        this.sandwich = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewSandwich(this.selectedSandwich) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteSandwich(this.selectedSandwich) }
      ];
    }
    viewSandwich(select: Sandwich) {
      console.log(JSON.stringify(select));
  
    }
    deleteSandwich(select: Sandwich) {
      this.apiService.delete('api/sandwich/' + select.sa_tip).subscribe(res => {
        console.log(res);
      });
  }
}

interface Sandwich {
  sa_tip: string,
  sa_descriere: string,
  sa_pret: string,
  sa_gramaj: string
}
  


