import { Component } from '@angular/core';

@Component({
    selector: 'rapp-media-modal',
    template: `
        <rapp-modal-view mode="full">
            <rapp-view>
                <rapp-toolbar>
                    <rapp-toolbar-left icon="back" title="Back"></rapp-toolbar-left>
                </rapp-toolbar>

                <rapp-content>
                    <div class="media-wrapper">
                        <img src="assets/icons/icon-72x72.png" class="media" />
                    </div>
                </rapp-content>
            </rapp-view>
        </rapp-modal-view>
    `,
    styles: [
        `
            .media-wrapper {
                height: 100%;
            }
            .media {
                display: block;
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
            rapp-toolbar,
            rapp-content {
                background-color: #222;
            }
        `,
    ],
})
export class MediaPreviewComponent {
    constructor() {
        console.log('MediaPreviewComponent - constructor');
    }
}
