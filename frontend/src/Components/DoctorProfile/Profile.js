import { Divider, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';

function Profile() {
    const userInfo = useSelector(state => state.userLogin.userInfo);

    return (
        <div>
            <div className='mt-3 ml-3'><h4>Profile Details</h4></div>
            <Divider className='mt-3' />
            <div>
                <List>
                    <ListItem>
                        <ListItemAvatar>
                            <h5>Name:&nbsp; </h5>
                        </ListItemAvatar>
                        <ListItemText primary={userInfo.name} > </ListItemText>
                    </ListItem>
                    <Divider variant='middle' />
                    <ListItem>
                        <ListItemAvatar>
                            <h5>Email id:&nbsp; </h5>
                        </ListItemAvatar>
                        <ListItemText primary={userInfo.email} > </ListItemText>
                    </ListItem>
                    <Divider variant='middle' />
                    <ListItem>
                        <ListItemAvatar>
                            <h5>Phone number:&nbsp; </h5>
                        </ListItemAvatar>
                        <ListItemText primary={userInfo.phoneNo} > </ListItemText>
                    </ListItem>
                    <Divider variant='middle' />
                    <ListItem>
                        <ListItemAvatar>
                            <h5>Gender:&nbsp; </h5>
                        </ListItemAvatar>
                        <ListItemText primary={userInfo.gender} > </ListItemText>
                    </ListItem>
                </List>
                <Divider />
            </div>
        </div>
    )
}

export default Profile
