
function doGet() {
    return HtmlService.createTemplateFromFile('updImage').evaluate();
  }

  //画像をドライブにアップロードしURLを返す(未使用。本来は本当にアップロードするつもりだったが、何かと連携させるならまだしもその行為自体そのものではあまり意味がない癖に容量などでリスクが高い行為だったので使わないようにしましたとさ。)
function processForm(formObject) {
  const file = DriveApp.getFolderById('フォルダID');
  const formBlob = formObject.myFile;
  const driveFile = file.createFile(formBlob);
  return driveFile.getUrl();
}

function returnBase64Data(){
  const ids = ["13ME91ExJS5nEBVes8NA6SQ0tJC_0lYGV","1mGrqRqqVOYBOCLtjEUhZdTRMkJbTYzFl","1epRcMfxg4LvBYvNrkSvqZ1tbogdgyNbt","1MpfLvkuMcdvKljeTuyPU2ZHBI_pLIx9x"];
  const texts =["おめでと♥いい子にはキスのご褒美♥","あーあー♥ほんとにやっちゃうんだ♥バーカ♥","くすっ♥性欲に屈してしまいしたね♥単純なお猿さん♥","言うこと聞けて偉いですね♥お姉さんからのマーキング♥べっとり♥つけてあげますね♥"]
  const num = Math.floor(Math.random()*Object.keys(ids).length);
  const id = ids[num] ;
  const text = texts[num]
  const file = DriveApp.getFileById(id);
  const blob = file.getBlob();
  const content_type = blob.getContentType();
  const base64 = Utilities.base64Encode(blob.getBytes());
  const data = "data:" + content_type + ";base64, " + base64;
  return [data,text];
}

//フォルダ内の画像削除（未使用）
function delFiles(){
  const folder = DriveApp.getFolderById("フォルダID");
  const files = folder.getFiles();
  while(files.hasNext()){
    let file = files.next();
    file.setTrashed(true);
  }
}
