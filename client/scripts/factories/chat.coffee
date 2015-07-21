chat = ->
  (username, message) ->
    console.log 'Hello, World!'
    socket.emit 'chat',
      username: username,
      message: message
      
chat.$inject = []

angular.module 'chat'
  .factory 'chat', chat