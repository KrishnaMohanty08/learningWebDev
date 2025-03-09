const axios = require('axios');

const client_id = '8902b78f76b04dc08c13325d609d934b';
const client_secret = '3e0b2941e87d4248ab4586a0a57e44bd';
//getting access token
/*
async function getSpotifyToken() {
    const authString = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

    try {
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            new URLSearchParams({ grant_type: 'client_credentials' }),
            {
                headers: {
                    'Authorization': `Basic ${authString}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        console.log('Access Token:', response.data.access_token);
        return response.data.access_token;
    } catch (error) {
        console.error('Error fetching Spotify token:', error.response ? error.response.data : error.message);
    }
}

getSpotifyToken();
*/
// Album details

async function getAlbumDetails() {
    const accessToken = 'BQBXqA7fUYOYay6ibmcJJQ4-NjlHKUKrZfevdZVWtbjw_5xht1AmSH6bKdNcY7QkytVv4fYuAulBt4lpva10xrU8i8LSQRlyDUQ9qOo8Pw-34t2LyhvfPbhf9b9iDmofJT_O_iMeVM8'; 

    try {
        const response = await axios.get('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        console.log(response.data); 
    } catch (error) {
        console.error('Error fetching album:', error.response ? error.response.data : error.message);
    }
}

getAlbumDetails();

console.log('**********************************************************');
async function searchPlaylist(){
    const accessToken = 'BQBXqA7fUYOYay6ibmcJJQ4-NjlHKUKrZfevdZVWtbjw_5xht1AmSH6bKdNcY7QkytVv4fYuAulBt4lpva10xrU8i8LSQRlyDUQ9qOo8Pw-34t2LyhvfPbhf9b9iDmofJT_O_iMeVM8';

    try{
        const response =await axios.get('https://api.spotify.com/v1/playlists/3cEYpjA9oz9GiPac4AsH4n',{
            headers: {
                'Authorization':`Bearer ${accessToken}`
            }
        });
        console.log(response.data);
    }catch(error){
        console.error("Error :", error.response ? error.response.data : error.message);
    }
}
searchPlaylist()