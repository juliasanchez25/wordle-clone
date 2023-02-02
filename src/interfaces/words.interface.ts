export interface Words {
  wordSet: WordSet;
}

export interface WordSet {
  has: (currentWord: string) => boolean;
}
