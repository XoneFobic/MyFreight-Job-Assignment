/*
  https://www.codingame.com/ide/puzzle/ascii-art-glass-stacking

  You are given a number, N, of glasses. Your job is to determine the largest pyramid that can be built with the glasses provided, and then create that pyramid in the output.

  A glass is represented in ASCII as follows:

   ***
   * *
   * *
  *****
*/
class GlassStack {
  public maxLayers(availableGlasses: number): number {
    let possibleRows = 0;

    if (availableGlasses > 0) {
      let usedGlasses = availableGlasses;

      for (let glassesInRow = 1; usedGlasses >= glassesInRow; glassesInRow++) {
        if (usedGlasses >= glassesInRow) {
          usedGlasses -= glassesInRow;
          possibleRows++;
        }
      }
    }

    return possibleRows;
  }

  public consoleOutputAsciiGlasses(layerCount: number): void {
    const asciiGlass: string[] = [ ' *** ', ' * * ', ' * * ', '*****' ];

    for (let layer = 1; layer <= layerCount; layer++) {
      for (const asciiGlassKey in asciiGlass) {
        let line: string = '';

        for (let item = 0; item < layer; item++) {
          if (item > 0) {
            line += ' ';
          }

          line += asciiGlass[asciiGlassKey];
        }

        console.log(this.asciiAddPadding(layerCount, layer, line));
      }
    }
  }

  private asciiAddPadding(layerCount: number, layer: number, line: string): string {
    const padNumber: number = (layerCount - layer) * 6 / 2;

    // For some reason String.padStart and String.padEnd seems to not function.
    // Assuming due to terminal (or windows...), hence forcing the issue.
    for (let padding = 0; padding < padNumber; padding++) {
      line = ' ' + line + ' ';
    }

    return line;
  }
}

// -------------------

const glassStack = new GlassStack();

for (const availableGlasses of [ 4, 10, 25, 1 ]) {
  console.log(`Results for: ${availableGlasses}`);
  glassStack.consoleOutputAsciiGlasses(glassStack.maxLayers(availableGlasses));
  console.log(``);
}
