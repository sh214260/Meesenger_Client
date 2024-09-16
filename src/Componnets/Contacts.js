import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, CircularProgress, Box, Button } from '@mui/material';
import { getUserContacts } from '../api/userApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-dom'

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    const user = useSelector(state => state.userSlice.user)
    const token = useSelector(state => state.userSlice.token)
    console.log(user);
    const getContacts = async () => {
        if (user) {
            const fetchedContacts = await getUserContacts(token, user._id)
            setContacts(fetchedContacts);
            setLoading(false);
        }
    };
    useEffect(() => {



    }, []);

    // if (loading) {
    //     if (user!=null) {
    //         return (
    //             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //                 <CircularProgress />
    //             </Box>
    //         );
    //     }
    //     else{
    //         return (
    //             <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    //                 <Typography>non</Typography>
    //             </Box>
    //         );
    //     }
    // }

    return (
        <Box p={3}>
            <Typography variant="h6" gutterBottom>
                Contacts
            </Typography>
            <Button onClick={() => getContacts()}>תבא</Button>
            <List>
                {contacts ? contacts.map((contact) => (
                    <Button onClick={()=>navigate('./messages')}>
                        <ListItem key={contact._id}>
                            <ListItemAvatar>
                                <Avatar>{contact.name[0]}</Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={contact.name} secondary={contact.email} />
                        </ListItem>
                    </Button>
                )) : <Typography>לא נמצאו אנשי קשר</Typography>}
            </List>
        </Box>
    );
};

export default Contacts;
