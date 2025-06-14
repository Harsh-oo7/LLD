import { DVDPlayer } from "./dvd-player";
import { Projector } from "./projector";
import { SoundSystem } from "./sound-system";

export class HomeTheaterFacade {
    constructor(
      private dvd: DVDPlayer,
      private projector: Projector,
      private sound: SoundSystem
    ) {}
  
    watchMovie(movie: string): void {
      console.log("Get ready to watch a movie...");
      this.projector.on();
      this.projector.setMode("Cinema");
      this.sound.on();
      this.sound.setVolume(7);
      this.dvd.on();
      this.dvd.play(movie);
    }
  
    endMovie(): void {
      console.log("Shutting down movie theater...");
      this.dvd.off();
      this.sound.off();
      this.projector.off();
    }
}
  