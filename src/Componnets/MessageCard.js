import { Avatar, Card, CardContent, Typography } from "@mui/material";
import React from "react";

const MessageCard = ({name, content}) => {
    return (
      <Card sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Avatar  sx={{ ml: 2, mr: 2 }} />
        <CardContent>
          <Typography variant="subtitle2" color="text.secondary">
            {name}
          </Typography>
          <Typography variant="body1">
            {content}
          </Typography>
          {/* <Typography variant="caption" color="text.secondary">
            {message.timestamp}
          </Typography> */}
        </CardContent>
      </Card>
    );
  };

  export default MessageCard;