import { DVDPlayer } from "./dvd-player";
import { HomeTheaterFacade } from "./home-theater";
import { Projector } from "./projector";
import { SoundSystem } from "./sound-system";

export class FacadeExample {
    demonstrate() {
        const dvd = new DVDPlayer();
        const projector = new Projector();
        const sound = new SoundSystem();

        const homeTheater = new HomeTheaterFacade(dvd, projector, sound);

        homeTheater.watchMovie("Inception");
        /*
        Get ready to watch a movie...
        Projector ON
        Projector mode set to Cinema
        Sound System ON
        Volume set to 7
        DVD Player ON
        Playing movie: Inception
        */

        homeTheater.endMovie();
        /*
        Shutting down movie theater...
        DVD Player OFF
        Sound System OFF
        Projector OFF
        */

    }
}