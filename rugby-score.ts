/*
 * https://www.codingame.com/training/easy/rugby-score
 *
 * Given a rugby score, your program must compute the different scoring combinations that lead to that particular score.
 * As a reminder:
 * - a try is worth 5 points
 * - after a try, a transformation kick is played and is worth 2 extra points if successful
 * - penalty kicks and drops are worth 3 points
 */
class RugbyScore {
  // Figured it would be good to add this as a constant. In case the `requirements` change later in development
  private tryScore: number = 5;
  private transformationScoreExtra: number = 2;
  private penaltyScore: number = 3;

  public findAllPossiblePlays(finalScore: number): number[][] {
    let foundResults: number[][] = [];

    for (let tryAttempt: number = 0; tryAttempt <= Math.ceil(finalScore / this.tryScore); tryAttempt++) {
      for (let transformationAttempt: number = 0; transformationAttempt <= tryAttempt; transformationAttempt++) {
        for (let penaltyAttempt: number = 0; penaltyAttempt <= Math.ceil(finalScore / this.penaltyScore); penaltyAttempt++) {
          // This can be compacted into a single line, but for readability it is split.
          const tryScore: number = tryAttempt * this.tryScore;
          const transformationScore: number = transformationAttempt * this.transformationScoreExtra;
          const penaltyScore: number = penaltyAttempt * this.penaltyScore;

          const currentScore: number = tryScore + transformationScore + penaltyScore;

          if (currentScore <= finalScore && currentScore === finalScore) {
            foundResults.push([tryAttempt, transformationAttempt, penaltyAttempt]);
          }
        }
      }
    }

    return foundResults;
  }
}

// -------------------

const rugbyScore = new RugbyScore();

for (const item of [12, 15, 21, 88]) {
  const results = rugbyScore.findAllPossiblePlays(item);

  console.log(`Results for: ${ item }`);
  for (const result of results) {
    console.log(result.join(' '));
  }
  console.log(``);
}
