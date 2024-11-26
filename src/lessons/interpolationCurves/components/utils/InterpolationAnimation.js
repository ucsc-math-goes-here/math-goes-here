class InterpolationAnimation {
  constructor(stepCallback) {
    this.stepCallback = stepCallback;
    this.isPlaying = false;
    this.globalTime = 0;
    this.direction = 1;
    this.animationFrameRef = null;
    this.lastTimestamp = null;

    this.stepSizeMultiplier = 1;
    this.maxTime = 1;
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.lastTimestamp = null;
    this._startAnimationLoop();
  }

  pause() {
    this.isPlaying = false;
    if (this.animationFrameRef) {
      cancelAnimationFrame(this.animationFrameRef);
      this.animationFrameRef = null;
    }
  }

  replay() {
    this.globalTime = 0;
    this.play();
  }

  _startAnimationLoop() {
    const step = (timestamp) => {
      if (!this.lastTimestamp) {
        this.lastTimestamp = timestamp;
      }

      const deltaTime = (timestamp - this.lastTimestamp) / 1000;
      this.lastTimestamp = timestamp;

      this.globalTime += deltaTime * this.stepSizeMultiplier * this.direction;

      if (this.globalTime >= this.maxTime) {
        this.globalTime = 0;
      }

      if (this.stepCallback) {
        this.stepCallback(this.globalTime);
      }

      if (this.isPlaying) {
        this.animationFrameRef = requestAnimationFrame(step);
      }
    };

    this.animationFrameRef = requestAnimationFrame(step);
  }

  dispose() {
    this.pause();
    this.stepCallback = null;
  }
}

export default InterpolationAnimation;