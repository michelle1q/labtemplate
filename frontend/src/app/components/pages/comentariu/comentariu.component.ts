import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../service/';
import { MenuItem } from 'primeng/components/common/menuitem';
import { DataTableModule } from 'primeng/primeng';


@Component({
  selector: 'app-comentariu',
  templateUrl: './comentariu.component.html',
  styleUrls: ['./comentariu.component.less']
})
export class ComentariuComponent implements OnInit {

  comentariu: Comentariu[];
  selectedComentariu: Comentariu;
  items: MenuItem[];
  constructor(private apiService: ApiService) { }
  
    ngOnInit() {
      this.apiService.get('api/comentariu/').subscribe(res => {
        this.comentariu = res;
      });
      this.items = [
        { label: 'View', icon: 'fa-search', command: (event) => this.viewComentariu(this.selectedComentariu) },
        { label: 'Delete', icon: 'fa-close', command: (event) => this.deleteComentariu(this.selectedComentariu) }
      ];
    }
    viewComentariu(select: Comentariu) {
      console.log(JSON.stringify(select));
  
    }
    deleteComentariu(select: Comentariu) {
      this.apiService.delete('api/comentariu/' + select.comentariu_tip).subscribe(res => {
        console.log(res);
      });
  }
}

interface Comentariu {
  comentariu_tip: string,
  comentariu_descriere: string,
  comentariu_pret: string,
  comentariu_gramaj: string
}
  

