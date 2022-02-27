interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}
interface VideoPlayerProtocol {
  playToggle(): void;
  stopToggle(): void;
  initEvent(): void;
}
export class VideoPlayer implements VideoPlayerProtocol {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  initEvent(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.stopButton.addEventListener('click', () => {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    });
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = 'Play';
    }
  }
  stopToggle(): void {
    //
  }
}
const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.play') as HTMLButtonElement,
  stopButton: document.querySelector('.stop') as HTMLButtonElement,
});
videoPlayer.initEvent();
