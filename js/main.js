$(document).ready(function () {
  $('#addTask').click(function () {
    var task = $('#taskInput').val();
    if (task) {
      $('#taskList').append('<li>' + task + ' <button class="delete">削除</button></li>');
      $('#taskInput').val(''); // 入力フィールドをクリア
    }
  });

  // タスク削除機能
  $('#taskList').on('click', '.delete', function () {
    $(this).parent().remove();
  });
});
