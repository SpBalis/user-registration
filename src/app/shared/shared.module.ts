import {NgModule} from '@angular/core';
import {MaterialModule} from './material/material.module';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';


@NgModule({
  declarations: [DeleteModalComponent],
  imports: [
    MaterialModule
  ]
})
export class SharedModule {
}
