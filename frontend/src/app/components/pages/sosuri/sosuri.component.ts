import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-sosuri',
  templateUrl: './sosuri.component.html',
  styleUrls: ['./sosuri.component.less']
})
export class SosuriComponent implements OnInit {

  sosuri: Sosuri[];
  selectedSosuri: Sosuri;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/sosuri/').subscribe(res => {
        this.sosuri = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewSosuri(this.selectedSosuri) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteSosuri(this.selectedSosuri) }
      ];
    }
    viewSosuri(select: Sosuri) {
      console.log(JSON.stringify(select));
  
    }
    deleteSosuri(select: Sosuri) {
      this.apiService.delete('api/sosuri/' + select.so_tip).subscribe(res => {
        console.log(res);
      });
  }
}

  interface Sosuri {
    so_tip: string,
    so_descriere: string,
    so_pret: string,
    so_gramaj: string
  }

