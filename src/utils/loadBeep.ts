import alarmClock from "../assets/audios/alarm_clock.mp3";

export function loadBeep() {
  const audio = new Audio(alarmClock);
  audio.load();
  return () => {
    audio.currentTime = 0;
    audio.play();
  };
}
