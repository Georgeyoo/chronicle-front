import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from '../models/Note';
import { Video } from '../models/Video';

@Injectable({
  providedIn: 'root'
})
export class MediaTransferService {


  public video? : Video = undefined;
  public note?: Note

  constructor(private http: HttpClient) { }

  // TODO: method signature
  /**
   * Download a resource from S3.
   *
   * @param uri the resource to be downloaded
   */
  download(uri: string): void {

  }
}
