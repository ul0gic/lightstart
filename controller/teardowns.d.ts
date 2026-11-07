/**
 * @bootstrapp/light/controller/teardowns: what a controller lets go of when
 * it is disposed. `own` keeps an unsubscribe function, `drain` runs every one
 * kept, in the order they came, and forgets them; one that throws is logged
 * under the controller's name and the rest still run. Both forms of a
 * controller, the definition and the class, keep theirs here.
 */
export declare class Teardowns {
    private list;
    own(teardown: () => void): void;
    drain(name: string): void;
}
