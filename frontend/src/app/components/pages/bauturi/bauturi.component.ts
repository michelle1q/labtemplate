import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';

@Component({
  selector: 'app-bauturi',
  templateUrl: './bauturi.component.html',
  styleUrls: ['./bauturi.component.less']
})
export class BauturiComponent implements OnInit {

  bauturi: Bauturi[];
  selectedBauturi: Bauturi;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/bauturi/').subscribe(res => {
        this.bauturi = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewBauturi(this.selectedBauturi) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteBauturi(this.selectedBauturi) }
      ];
    }
    viewBauturi(select: Bauturi) {
      console.log(JSON.stringify(select));
  
    }
    deleteBauturi(select: Bauturi) {
      this.apiService.delete('api/bauturi/' + select.id).subscribe(res => {
        console.log(res);
      });
  }
}

interface Bauturi {
  id: string,
  b_tip:string,
  b_descriere: string,
  b_pret: string,
  b_gramaj: string
}
  

