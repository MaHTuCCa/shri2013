/**
 * Created with JetBrains WebStorm.
 * User: ЛешкаМанька
 * Date: 25.08.13
 * Time: 23:23
 * To change this template use File | Settings | File Templates.
 */
$.getJSON('data/question.json', function(data) {
    var template = $('#question_template').html();
    var html = Mustache.to_html(template, data);
    html = html.split("&lt;").join("<").split("&gt;").join(">").split("&#x2F;").join("/");
    $('#accordion').html(html);
});