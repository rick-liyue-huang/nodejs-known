

#### This app is brought out in five steps from the initial to the completed. After opening the server in terminal, the users can communicate one other in terminals through this server.


## the app functions:

1. when type 'nodemon server.js', it will open a server terminal;
2. when type 'nodemon client.js', it will open a client terminal;
3. it also can open more than one client terminals by step 2;
4. in client terminal, firstly input the username, 
5. after input the new username, it means signup in the server terminal, and can communicate with other clients;
6. normally, clients communicate with each other by 'broadcast' type, which means that any one can receive the message;
7. if input in 'username:message', it will only send the identified username, and no others receive it.

notice, this is just a basic 'chatroom' app based on terminals by the node.js 'net' module. In this app, we define some data protocol, and by these protocols, client and server communicate.
Next, we will learn the 'http' module, and realize a 'music' browser based app.
