
document.addEventListener('DOMContentLoaded', function() {
           var messages = document.querySelectorAll('.message');
           messages.forEach(function(message) {
               // 5秒後にメッセージをフェードアウトして消す
               setTimeout(function() {
                   message.classList.add('fade-out');
                   // フェードアウトが完了した後(0.5秒後)にメッセージを削除
                   setTimeout(function() {
                       message.remove();
                   }, 500);
               }, 5000);

               // メッセージにある閉じるボタン(クラス名が"close-btn")のクリックイベントを設定
               message.querySelector('.close-btn').addEventListener('click', function() {
                   message.classList.add('fade-out');
                   setTimeout(function() {
                       message.remove();
                   }, 500);
               });
           });
        });