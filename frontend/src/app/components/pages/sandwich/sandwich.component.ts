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
      this.apiService.post('api/sandwich/').subscribe(res => {
        this.sandwich = res;
      });
      this.items = [
         // { label: 'Create', icon: 'fa-close', command: (event) => this.createSandwich(this.selectedSandwich) }
          //  { label: 'Update', icon: 'fa-close', command: (event) => this.updateSandwich(this.selectedSandwich) },
        { label: 'View', icon: 'fa-search', command: (event) => this.viewSandwich(this.selectedSandwich) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteSandwich(this.selectedSandwich) }
       
      ];
    }
    viewSandwich(select: Sandwich) {
      console.log(JSON.stringify(select));
  
    }
    updateSandwich(select: Sandwich) {
      this.apiService.post('api/sandwich/').subscribe(res=>{
        console.log(res);
      })
  
    }
    deleteSandwich(select: Sandwich) {
      this.apiService.delete('api/sandwich/' + select.id).subscribe(res => {
        console.log(res);
      });
  }
}

interface Sandwich {
  id: string,
  san_tip: string,
  san_descriere: string,
  san_pret: DoubleRange,
  san_gramaj: string
}
  


