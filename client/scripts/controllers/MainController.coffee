MainController = (chat) ->
  this.chats = []
  this.send = ->
    console.log 'hello'
    chat this.username, this.msg
  socket.on 'chats', (chats) ->
    this.chats = chats
    
MainController.$inject = ['chat']

angular.module('chat')
  .controller('MainController', MainController);