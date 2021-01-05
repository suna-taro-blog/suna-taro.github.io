const quiz = [
  {
    question: '【簿記3級４択クイズ】問1　資産の勘定科目を1つ選べ',
    answers: [
      '支払手形',　
      '繰越利益剰余金',　
      '前払手数料',　
      '固定資産売却益'
  ],
  correct: '前払手数料'
  },{
    question: '【簿記3級４択クイズ】問2　負債の勘定科目を1つ選べ',
    answers: [
      '法定福利費',　
      '固定資産売却損',　
      '利益準備金',　
      '未払配当金'
  ],
  correct: '未払配当金'
  },{
    question: '【簿記3級４択クイズ】問3　収益の勘定科目を1つ選べ',
    answers: [
      '貯蔵品',　
      '仮払消費税',　
      '貸倒引当金戻入',　
      '租税公課'
  ],
  correct: '貸倒引当金戻入'
  },{
    question: '【簿記3級４択クイズ】問4　費用の勘定科目を1つ選べ',
    answers: [
      '貸倒損失',　
      '未払法人税等',　
      '差入保証金',　
      '電子記録債務'
  ],
  correct: '貸倒損失'
  },{
    question: '【簿記3級４択クイズ】問5　資本の勘定科目を1つ選べ',
    answers: [
      '利益準備金',　
      '前払保険料',　
      '繰越商品',　
      '減価償却費'
  ],
  correct: '利益準備金'
  },{
    question: '【簿記3級４択クイズ】問6　損益計算書に記入される勘定科目を1つ選べ',
    answers: [
      '当座預金',　
      '給料',　
      '繰越利益剰余金',　
      '未払金'
  ],
  correct: '給料'
  },{
    question: '【簿記3級４択クイズ】問7　貸借対照表に記入される勘定科目を1つ選べ',
    answers: [
      '未払家賃',　
      '貸倒引当金繰入',　
      '固定資産売却益',　
      '売上'
  ],
  correct: '未払家賃'
  }
]
//↑配列の中にオブジェクトを入れてさらに配列を入れる
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

//HTMLのオブジェクトをとってくる場合は＄を使う
const $button = document.getElementsByTagName('button')
const buttonLength = $button.length;

//同じようなコードはなるべく、変数やif文や配列を使ってまとめる＝リファクタリング
//定数の文字列をHTMLに反映させる＋ボタンの指定をまとめる関数の中に入れる
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while( buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz　();
//クリックされた要素に対して何かしたい時は、「e.target」を記述する
const clickHandler = (e) =>{
  if(quiz[quizIndex].correct　=== e.target.textContent){
    window.alert('正解！');
    score++;
  }else{
    window.alert('不正解');
  }
  //以下次の問題に進むコード
   quizIndex++;
   if(quizIndex < quizLength) { 
      //問題がまだあればこちらを実行
      setupQuiz();
   }else{
     //問題がもうなければこちらを実行
     window.alert('終了！！！あなたの正解数は'+ score　+　'/' + quizLength + 'です！');
   }
}
//HTMLのオブジェクトが入っている
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex <  buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

