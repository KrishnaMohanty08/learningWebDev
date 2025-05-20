<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

# WebSockets \& Socket.IO: Quick Revision


---

## WebSocket (Protocol)

- **What:**
A protocol for fast, two-way, persistent communication between browser and server over a single connection[^3][^5][^6][^8].
- **How:**
Starts as HTTP, then "upgrades" to WebSocket. Both client and server can send messages anytime, no need to poll[^6][^8].
- **Why:**
Enables real-time features (chat, games, live dashboards) with low latency and less overhead than HTTP[^3][^5][^8].

**Basic Syntax:**

```js
// Client-side
const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => ws.send('Hello!');
ws.onmessage = (e) => console.log(e.data);
ws.onclose = () => console.log('Closed');
```


---

## Socket.IO (Library)

- **What:**
A JS library for real-time, event-based communication, built on top of WebSocket with extra features[^4][^5][^7].
- **How:**
Uses WebSocket when possible, but falls back to other methods (like long-polling) if needed for reliability[^4][^5][^7].
- **Why:**
Adds auto-reconnect, rooms, event system, and works everywhere—ideal for chat, collaboration, notifications[^4][^5][^7].

**Core Concepts:**


| Concept | Description | Syntax Example |
| :-- | :-- | :-- |
| **emit** | Send an event + data | `socket.emit("event", data)` |
| **on** | Listen for an event | `socket.on("event", cb)` |
| **room** | Logical group for message broadcasting | `socket.join("room")` (server-side) |
| **to(room)** | Emit to all in a room except sender | `socket.to(room).emit("event", data)` |


---

## Minimal Socket.IO Usage

**Server (Node.js):**

```js
import { Server } from 'socket.io';
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("message", ({room, message}) => {
    socket.to(room).emit("receive-message", message);
  });
  socket.on("join-room", (room) => socket.join(room));
});
```

**Client (React):**

```js
const socket = io("http://localhost:3000");

socket.emit("join-room", room); // Join a room
socket.emit("message", { room, message }); // Send message

socket.on("receive-message", (msg) => {
  // Handle incoming message
});
```


---

## Key Differences

| WebSocket (Protocol) | Socket.IO (Library) |
| :-- | :-- |
| Low-level, bare connection | High-level, event-based API |
| No rooms, no fallback | Rooms, auto-reconnect, fallbacks |
| Manual reconnection | Built-in reconnection |
| Use when you need control | Use for fast, reliable real-time apps |


---

**Summary:**

- Use **WebSocket** for raw, efficient, persistent connections.
- Use **Socket.IO** for easy, reliable, event-driven real-time apps with minimal setup and more features.

---

*This sheet is your quick reference for interviews, exams, and practical coding!*

<div style="text-align: center">⁂</div>

[^1]: app.js

[^2]: App.jsx

[^3]: https://www.wallarm.com/what/a-simple-explanation-of-what-a-websocket-is

[^4]: https://ably.com/topic/socketio

[^5]: https://www.videosdk.live/developer-hub/websocket/socketio-vs-websocket

[^6]: https://portswigger.net/web-security/websockets/what-are-websockets

[^7]: https://www.videosdk.live/developer-hub/socketio/how-socket-io-works

[^8]: https://ably.com/topic/websockets

[^9]: https://www.youtube.com/watch?v=ub7RVLSn3mc

[^10]: https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_servers

[^11]: https://socket.io/how-to/build-a-basic-client

[^12]: https://dev.to/jaypmedia/websockets-explained-under-10-minutes-with-visuals-3ocl

