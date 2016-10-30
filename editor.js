$(function() {
    marked.setOptions({
        breaks: true,
        langPrefix: ''
    });

    $('#editor').keyup(function() {
        var src = $(this).val();

        var html = marked(src);

        // チェックボックスへの変換機能を追加
        //html = html.replace(/\[x\]/g, '<input type="checkbox" checked="checked" />  ');
        //html = html.replace(/\[ \]/g, '<input type="checkbox" />  ');
        html = html.replace(/\[x\]/g, '<img class="image_checkbox" src="bower_components/image/on.png" />  ');
        html = html.replace(/\[ \]/g, '<img class="image_checkbox" src="bower_components/image/off.png" />  ');

        $('#result').html(html);

        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    });
});
