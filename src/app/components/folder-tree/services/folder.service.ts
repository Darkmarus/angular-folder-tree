import { Injectable } from '@angular/core';
import { Folder } from './../models/folder.interface';

@Injectable({
  providedIn: 'any',
})
export class FolderService {
  private _folderSelected?: Folder;

  constructor() {}

  getFolderSelected(): Folder | undefined {
    return this._folderSelected;
  }

  saveFolderSelected(folder: Folder) {
    this._folderSelected = folder;
  }
}
