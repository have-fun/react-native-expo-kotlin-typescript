import * as PlanetRoot from "./Planet";

export = Kotlin;
export as namespace Kotlin;

// Currently the Kotlin transpiler (v1.3.21) doesn't support creating TypeScript definition file from Kotlin code.
// A bit of pain that we have to declare ambient module manually for generated JavaScript code from Kotlin.
declare namespace Kotlin {
  export import Planet = PlanetRoot.Planet;
}
