import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FolderViewRoutingModule } from './folder-view-routing.module';
import { FolderViewComponent } from './folder-view.component';
import { FolderTreeModule } from 'src/app/components/folder-tree/folder-tree.module';

@NgModule({
  declarations: [FolderViewComponent],
  imports: [CommonModule, FolderViewRoutingModule, FolderTreeModule],
})
export class FolderViewModule {}
