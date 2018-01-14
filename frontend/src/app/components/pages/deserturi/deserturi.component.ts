import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-deserturi',
  templateUrl: './deserturi.component.html',
  styleUrls: ['./deserturi.component.less']
})
export class DeserturiComponent implements OnInit {

  deserturi: Deserturi[];
  selectedDeserturi: Deserturi;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/deserturi/').subscribe(res => {
        this.deserturi = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewDeserturi(this.selectedDeserturi) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteDeserturi(this.selectedDeserturi) }
      ];
    }
    viewDeserturi(select: Deserturi) {
      console.log(JSON.stringify(select));
  
    }
    deleteDeserturi(select: Deserturi) {
      this.apiService.delete('api/deserturi/' + select.deserturi_tip).subscribe(res => {
        console.log(res);
      });
  }
}

interface Deserturi {
  deserturi_tip: string,
  deserturi_descriere: string,
  deserturi_pret: string,
  deserturi_gramaj: string
}
  
