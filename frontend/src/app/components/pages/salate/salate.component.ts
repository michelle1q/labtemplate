import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-salate',
  templateUrl: './salate.component.html',
  styleUrls: ['./salate.component.less']
})
export class SalateComponent implements OnInit {
  salate: Salate[];
  selectedSalate: Salate;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/salate/').subscribe(res => {
        this.salate = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewSalate(this.selectedSalate) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteSalate(this.selectedSalate) }
      ];
    }
    viewSalate(select: Salate) {
      console.log(JSON.stringify(select));
  
    }
    deleteSalate(select: Salate) {
      this.apiService.delete('api/salate/' + select.salate_tip).subscribe(res => {
        console.log(res);
      });
  }
}

  interface Salate {
    salate_tip: string,
    salate_descriere: string,
    salate_pret: string,
    salate_gramaj: string
  }

