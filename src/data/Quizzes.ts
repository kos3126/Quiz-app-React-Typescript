export type Quiz = {
  question: string;
  correct_answer: string;
};

export const QuizData: Quiz[] = [
  { question: 'ホットティー', correct_answer: 'テカルド' },
  { question: 'ハーブティー', correct_answer: 'カモミッラ' },
  { question: 'ピーチティー', correct_answer: 'ペスカ' },
  {
    question: 'ホットブラッドオレンジジュース',
    correct_answer: 'アランチャ カルダ',
  },
  { question: 'ホットチョコレート', correct_answer: 'チョコラータ カルダ' },
  { question: 'アイスティー', correct_answer: 'テ フレッド' },
  {
    question: 'レモンアイスティー',
    correct_answer: 'テ フレッド コン リモーネ',
  },
  { question: 'ミルクアイスティー', correct_answer: 'テ フレッド コン ラテ' },
  { question: 'ピーチアイスティー', correct_answer: 'ペスカ フレッド' },
  { question: 'ブラッドオレンジジュース', correct_answer: 'アランチャロッサ' },
  { question: 'グレープフルーツジュース', correct_answer: 'ポンペルモ' },
  { question: 'ブラッドオレンジ＆トニック', correct_answer: 'アランチャータ' },
  { question: 'シチリアレモン＆トニック', correct_answer: 'リモナータ' },
  { question: 'アイスチョコレート', correct_answer: 'チョコラータ フレッド' },
  { question: 'スパークリングウォーター', correct_answer: 'ガッサータ' },
];
