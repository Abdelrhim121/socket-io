const express = require ('express')
const http = require ('http')
const WebSocket = require ('ws') 
const server = http.createServer(express)
const wss = new WebSocket.Server( {server} )
const port = 6969

wss.on('connection', function(ws){
    ws.on('message', function incoming (data){
        wss.clients.forEach(function each (client){
            if(client != ws && client.readyState == WebSocket.OPEN){
                client.send(data)
            }
        }) 
    })
})

server.listen(port, function(){
    console.log(`Server is listening to ${port}!`)
})