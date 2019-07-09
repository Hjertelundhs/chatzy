import React, { useState } from 'react';
import io from 'socket.io-client';
const socketUrl = 'http://localhost:3231';

export default function Layout() {
  const [socket, setSocket] = useState('');
  const [user, setUser] = useState({});

  const socket = io(socketUrl);
  socket.on('connect', () => console.log('connected'));
  return (
    <div>
      <h1>Hello from Layout</h1>
    </div>
  );
}
