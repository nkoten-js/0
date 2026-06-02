



let player = videojs("my-video");
const SeekBar = videojs.getComponent("SeekBar");

SeekBar.prototype.getPercent = function getPercent() {
    const time = this.player_.currentTime();
    const percent = time / this.player_.duration();
    return percent >= 1 ? 1 : percent;
};

SeekBar.prototype.handleMouseMove = function handleMouseMove(event) {
    let newTime = this.calculateDistance(event) * this.player_.duration();
    if (newTime === this.player_.duration()) {
        newTime = newTime - 0.1;
    }

    this.player_.currentTime(newTime);
    this.update();
    let currentTime = player.currentTime();
    let minutes = Math.floor(currentTime / 60);
    let seconds = Math.floor(currentTime - minutes * 60);
    let x = minutes < 10 ? "0" + minutes : minutes;
    let y = seconds < 10 ? "0" + seconds : seconds;
    let format = x + ":" + y;
    player.controlBar.currentTimeDisplay.el_.innerHTML = format;
};