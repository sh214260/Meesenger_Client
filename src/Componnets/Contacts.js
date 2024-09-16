import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, CircularProgress, Box, Button, Dialog, DialogTitle, TextField, DialogActions, DialogContent } from '@mui/material';
import { addContact, getUserContacts } from '../api/userApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Messages from './Messages';
const AddContactDialog = ({ open, onClose, userId }) => {
    const [email, setEmail] = useState('');
    const token = useSelector(state => state.userSlice.token)

    const handleAddContact = async () => {
        try {
            // שליחה לשרת כדי להוסיף איש קשר
            const response = await addContact(token, userId, email);
            console.log(response);
            
            if (response.success) {
                // סגירת הדיאלוג לאחר הצלחה
                onClose();
            } else {
                alert(response.message); // הצגת הודעה במקרה של שגיאה
            }
        } catch (error) {
            console.error('Error adding contact:', error);
            alert('Failed to add contact'); // הצגת הודעה במקרה של שגיאה בשרת
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Contact</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Contact Email"
                    type="email"
                    fullWidth
                    variant="standard"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleAddContact}>Add</Button>
            </DialogActions>
        </Dialog>
    );
};

const Contacts = () => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector(state => state.userSlice.user)
    const token = useSelector(state => state.userSlice.token)

    const navigate = useNavigate()
    const [selectedContact, setSelectedContact] = useState(null); // כדי לשמור את איש הקשר שנבחר
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };
    console.log(user);
    const getContacts = async () => {
        if (user) {
            try {
                const fetchedContacts = await getUserContacts(token, user._id)
                setContacts(fetchedContacts);
                setLoading(false);
            } catch (err) {
                alert(err)
            }
        }
    };
    useEffect(() => {
        getContacts()
    }, [dialogOpen]);

    if (loading) {
        if (user != null) {
            return (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            );
        }
        else {
            return (
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <Typography>non</Typography>
                </Box>
            );
        }
    }
    if (selectedContact) {
        console.log(selectedContact);

        return <Messages friend={selectedContact} />;
    }
    return (
        <Box p={3}>
            <Typography variant="h6" gutterBottom>
                Contacts
            </Typography>
            <div>
                <Button onClick={handleOpenDialog} variant="contained">
                    Add Contact
                </Button>
                <AddContactDialog open={dialogOpen} onClose={handleCloseDialog} userId={user._id} />
            </div>
            <List>
                {contacts ? contacts.map((contact) => (
                    <Button onMouseEnter={() => console.log(contact)} key={contact._id} onClick={() =>
                        setSelectedContact(contact)} >
                        <ListItem >
                            <ListItemAvatar>
                                <Avatar>{contact.name&&contact.name[0]}</Avatar>
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
