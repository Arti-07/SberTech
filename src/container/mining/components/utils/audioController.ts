class AudioController {
    private audio: HTMLAudioElement;
    private isPlaying: boolean;
    private resetTimeout: NodeJS.Timeout | null;

    constructor(audioSrc: string) {
        this.audio = new Audio(audioSrc);
        this.audio.loop = true;
        this.isPlaying = false;
        this.resetTimeout = null;
    }

    play() {
        if (!this.isPlaying) {
            this.audio.play().catch((err) => console.error('Error playing audio:', err));
            this.isPlaying = true;
        }
    }

    pause() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        }
    }

    reset() {
        this.pause();
        this.audio.currentTime = 0;
    }

    scheduleReset(delay = 1000) {
        if (this.resetTimeout) {
            clearTimeout(this.resetTimeout);
        }
        this.resetTimeout = setTimeout(() => {
            this.reset();
        }, delay);
    }

    cancelReset() {
        if (this.resetTimeout) {
            clearTimeout(this.resetTimeout);
            this.resetTimeout = null;
        }
    }
}

export default AudioController;
