import { Moments } from './../../../moments';
import { Component, Input, OnInit } from '@angular/core';
import { MomentService } from 'src/app/services/moment.service';

@Component({
  selector: 'app-new-moments',
  templateUrl: './new-moments.component.html',
  styleUrls: ['./new-moments.component.css']
})
export class NewMomentsComponent implements OnInit {
 btnText ='Compartilhar';


  constructor(private momentService: MomentService) { }

  ngOnInit(): void {
  }

   async createHandler(moment: Moments){
    const formData = new FormData();
    formData.append("tilte",moment.title);
    formData.append("description", moment.description);

    if(moment.image){
      formData.append('image', moment.image);
    }
    // todo

    //enviar para o service
    await this.momentService.createMoment(formData).subscribe()

    //exibir msg

    //redirect
  }
}
