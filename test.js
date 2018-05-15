//
// pdfの内容
//
var docDefinition = {
    content: [
        { text:'ディフォルトでゴシックを表示' },
        { text:'フォントを明朝に変えてみる', font:'IPAmincho' },
        { text:['ゴシックから', { text:'明朝体に変更', font:'IPAmincho', color:'red'}] },
    ]
};

//
// ブラウザの判定
//
var getBrowser = function()
{
    var name = 'unknown';

    // ユーザエージェントを取得
    var user_agent = window.navigator.userAgent.toLowerCase();

    // ieをチェック
    if( user_agent.indexOf('msie') != -1 ||
        user_agent.indexOf('edge') != -1 ||
        user_agent.indexOf('trident/7') != -1){
        name = 'ie';
    }
    // ie以外のチェック
    else if(user_agent.indexOf('chrome') != -1){
        name = 'chrome';
    }
    else if(user_agent.indexOf('safari') != -1){
        name = 'safari';
    }
    else if(user_agent.indexOf('opera') != -1){
        name = 'opera';
    }
    else if(user_agent.indexOf('firefox') != -1){
        name = 'firefox';
    }

    return name;
}

//
// ボタンクリックイベント
//
function pdfOpen()
{
    // フォント
    pdfMake.fonts = {
        IPAgothic: {
            normal:      'ipagp.ttf',
            bold:        'ipagp.ttf',
            italics:     'ipagp.ttf',
            bolditalics: 'ipagp.ttf'
        },
        IPAmincho: {
            normal:      'ipamp.ttf',
            bold:        'ipamp.ttf',
            italics:     'ipamp.ttf',
            bolditalics: 'ipamp.ttf'
        }
    }

    // ディフォルトフォントを指定
    if (!docDefinition['defaultStyle']) {
        docDefinition['defaultStyle'] = new Object();
    }
    docDefinition['defaultStyle']['font'] = 'IPAgothic';

    // ブラウザ名を取得
    var name=  getBrowser();

    // ブラウザごとに処理を分岐
    if(name == 'ie'){
        pdfMake.createPdf(docDefinition).download('optionalName.pdf');
        //pdfMake.createPdf(docDefinition).open();
    }
    else{
        //pdfMake.createPdf(docDefinition).download('optionalName.pdf');
        pdfMake.createPdf(docDefinition).open();
    }
}
