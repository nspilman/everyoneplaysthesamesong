import round1 from "../assets/images/round1.jpg";
import round2 from "../assets/images/round2.jpg";
import round3 from "../assets/images/round3.jpg";
import round4 from "../assets/images/round4.jpg";
import unknown from "../assets/images/unknown.jpg";

export default 
    {
        one :{
            image: round1,
            song:'Bags by Clairo',
            soundcloudPlayer:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1049388463&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nate-spilman" title="Nate Spilman" target="_blank" style="color: #cccccc; text-decoration: none;">Nate Spilman</a> · <a href="https://soundcloud.com/nate-spilman/sets/everyone-plays-the-same-song" title="Everyone Plays the Same Song - Bags" target="_blank" style="color: #cccccc; text-decoration: none;">Everyone Plays the Same Song - Bags</a></div>`
        },
        two :{
            image: round2,
            song:'I Believe (When I Fall In Love It Will Be Forever) by Stevie Wonder',
            soundcloudPlayer:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1082682211&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nate-spilman" title="Nate Spilman" target="_blank" style="color: #cccccc; text-decoration: none;">Nate Spilman</a> · <a href="https://soundcloud.com/nate-spilman/sets/everyone-plays-the-same-song-i" title="Everyone Plays the Same Song - I Believe (When I Fall in Love It Will Be Forever)" target="_blank" style="color: #cccccc; text-decoration: none;">Everyone Plays the Same Song - I Believe (When I Fall in Love It Will Be Forever)</a></div>`
        },
        three :{
            image: round3,
            song: 'This Year by The Mountain Goats',
            soundcloudPlayer:`<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1112520610&color=%23ff0000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nate-spilman" title="Nate Spilman" target="_blank" style="color: #cccccc; text-decoration: none;">Nate Spilman</a> · <a href="https://soundcloud.com/nate-spilman/sets/everyone-plays-the-same-song-3" title="Everyone Plays the Same Song - This Year" target="_blank" style="color: #cccccc; text-decoration: none;">Everyone Plays the Same Song - This Year</a></div>`
        },
        four :{
            image: round4,
            song: 'Each Coming Night by Iron and Wine',
            soundcloudPlayer: null,
        },
        default :{
            image: unknown,
            song: 'no song found',
            soundcloudPlayer: '<div/>'
        }
    }
