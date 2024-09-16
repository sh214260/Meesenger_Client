import React, { useEffect, useState } from 'react';
import { Box, TextField, Button, Card, CardContent, Typography, Avatar } from '@mui/material';
import MessageCard from './MessageCard';
import { getMessagesBetweenUsers, sendMessage } from '../api/messageApi';
import { useSelector } from 'react-redux';


const Messages = ({friend}) => {
  const token = useSelector((state) => state.userSlice.token)
  const [messageText, setMessageText] = useState(''); // ניהול ה-state של ההודעה החדשה
  const [messages, setMessages] = useState([{}]); // רשימת ההודעות
  const user = useSelector((state) => state.userSlice.user)
  
  const handleSendMessage = async () => {
    // פונקציה לשליחת הודעה
    if (messageText.trim()) {
      const newMessage = {
        content: messageText,
        sender:user._id ,//shira // אתה יכול להתאים את זה למה שנדרש
        receiver: friend._id
      };
      const res = await sendMessage(token, newMessage);
      console.log(res);
      setMessages([...messages, newMessage]); // עדכון רשימת ההודעות
      setMessageText(''); // ריקון השדה לאחר השליחה
    }
  };
  useEffect(() => {
    console.log(friend);
    
    const fetchMessages = async () => {
      try {
        const data = await getMessagesBetweenUsers(token, user._id, friend._id);
        console.log(data.messages);
        setMessages(data.messages)
        messages.map(m => console.log(m.sender))


      } catch (error) {
        console.error("Failed to fetch messages:", error);
      }
    };

    fetchMessages();
  }, [token]);

  return (
    <Box sx={{ p: 3 }}>
      {messages.length > 1 ? messages.map((message) => (
        <MessageCard key={message._id}
          name={message.sender.name}
          content={message.content} />
      )) : <Typography>no</Typography>}
      <Box sx={{ display: 'flex', mt: 2 }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)} // עדכון state של ההודעה
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default Messages;
