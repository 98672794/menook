//  202310100105
//  MyBook js



function 指定故事(){  
    // 主頁入book網 網址尾有 ?故事號 
    // 取現網址 用?分割 取尾
    let 故事號 = location.href.split('?');
    $('#asd').html(故事號[1])

}   