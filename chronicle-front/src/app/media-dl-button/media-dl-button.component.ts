import { Component, OnInit } from '@angular/core';
import { MediaTransferService } from '../services/media-transfer.service';

@Component({
  selector: 'app-media-dl-button',
  templateUrl: './media-dl-button.component.html',
  styleUrls: ['./media-dl-button.component.css']
})
export class MediaDlButtonComponent implements OnInit {

  constructor(private mediaTransfer: MediaTransferService) { }

  ngOnInit(): void {
  }

  /**
   * Download the resource associated with this button.
   *
   * TODO: data flow: how do we get information about the media to download into here?
   */
  download(): void {
    this.mediaTransfer.download('dummy string; do not use');
  }
}
