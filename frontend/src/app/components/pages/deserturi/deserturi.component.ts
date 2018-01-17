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
      this.apiService.delete('api/deserturi/' + select.id).subscribe(res => {
        console.log(res);
      });
  }
}

interface Deserturi {
  id: string,
  d_tip: string,
  d_descriere: string,
  d_pret: string,
  d_gramaj: string
}
  
