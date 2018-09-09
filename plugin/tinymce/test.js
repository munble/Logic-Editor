function coopy(){
    //var choose = document.getElementById("TruthTable").select();//获取form表单对象
    document.execCommand('copy');
    var a = document.tinyMCE.activeEditor.getContent({format : 'raw'});
    document.execCommand('copy');
}