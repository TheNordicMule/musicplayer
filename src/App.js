import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.jsx";
import RabbitPlayer from "./RabbitPlayer.jsx";

const initialMusic = "http://mp3.dwjgrw.cn/down/11423.mp3";
const initiallyrics = `
[00:18.01]Loving can hurt loving can hurt sometimes
[00:26.01]
[00:26.81]But It is the only thing that I know
[00:34.81]
[00:35.80]When it gets hard you know it can get hard sometimes
[00:43.80]
[00:44.72]It is the only thing that makes us feel alive
[00:52.72]
[00:55.21]We keep this love in a photograph
[00:58.61]
[00:58.81]We made these memories for ourselves
[01:02.71]
[01:02.90]Where our eyes are never closing
[01:04.99]
[01:05.20]Hearts are never broken
[01:07.10]
[01:07.31]And time′s forever frozen still
[01:11.31]
[01:11.51]So you can keep me
[01:14.41]
[01:14.61]Inside the pocket of your ripped jeans
[01:18.81]
[01:19.00]Holding me closer ′til our eyes met
[01:22.90]
[01:23.11]You won′t ever be alone wait for me to come home
[01:31.11]
[01:33.61]Loving can heal loving can mend your soul
[01:41.61]
[01:42.41]And It is the only thing that I know know
[01:50.41]
[01:50.71]I swear it will get easier
[01:54.41]
[01:54.60]Remember that with every piece of you
[01:59.30]
[01:59.50]Hm and It is the only thing we take with us when we die
[02:07.50]
[02:07.91]Hm we keep this love in this photograph
[02:14.51]
[02:14.72]We made these memories for ourselves
[02:18.52]
[02:18.72]Where our eyes are never closing
[02:20.42]
[02:20.61]Hearts were never broken
[02:22.61]
[02:22.80]And time′s forever frozen still
[02:26.80]
[02:27.02]So you can keep me
[02:29.82]
[02:30.01]Inside the pocket of your ripped jeans
[02:34.11]
[02:34.30]Holding me closer ′til our eyes met
[02:38.50]
[02:38.70]You won′t ever be alone
[02:44.90]
[02:45.11]And if you hurt me
[02:47.41]
[02:47.61]That′s okay baby only words bleed
[02:51.81]
[02:52.00]Inside these pages you just hold me
[02:56.30]
[02:56.52]And I won′t ever let you go
[03:01.22]
[03:01.41]Wait for me to come home
[03:05.61]
[03:05.81]Wait for me to come home
[03:09.81]
[03:10.02]Wait for me to come home
[03:14.31]
[03:14.52]Wait for me to come home
[03:20.52]
[03:20.70]You can fit me
[03:22.80]
[03:23.01]Inside the necklace you got when you were sixteen
[03:27.71]
[03:27.92]Next to your heartbeat where I should be
[03:31.82]
[03:32.02]Keep it deep within your soul
[03:38.52]
[03:38.71]And if you hurt me
[03:40.81]
[03:41.00]Well that′s okay baby only words bleed
[03:45.10]
[03:45.31]Inside these pages you just hold me
[03:49.61]
[03:49.82]And I won′t ever let you go
[03:56.12]
[03:56.30]When I am away I will remember how you kissed me
[04:03.20]
[04:03.41]Under the lamppost back on Sixth street
[04:07.41]
[04:07.61]Hearing you whisper through the phone
[04:12.21]
[04:12.42]Wait for me to come home.
[04:17.42]
[04:18.42]www.RentAnAdviser.com
[04:27.42]
`;


class MusicPlayer extends React.Component {
  constructor() {
    super();
    this.state = { music: initialMusic, lyrics: initiallyrics };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInitial = this.resetInitial.bind(this);
    this.handleLyricsSubmit = this.handleLyricsSubmit.bind(this);
  }

  resetInitial() {
    this.setState({ music: initialMusic, lyrics: initiallyrics });
  }

  // WIP
  handleLyricsSubmit(e) {
    e.preventDefault();
    const newLyrics = document.forms.editIssue.modifiedLyrics.value;
    this.setState({ lyrics: newLyrics });
    this.render();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      music: event.target.music.value,
      lyrics: String(event.target.lyrics.value),
    });
  }

  render() {
    return (
      <>
        <NavBar
          handleSubmit={this.handleSubmit}
          resetInitial={this.resetInitial}
          handleLyricsSubmit={this.handleLyricsSubmit}
          lyrics={this.state.lyrics}
        />
        <RabbitPlayer lyrics={this.state.lyrics} music={this.state.music} />
      </>
    );
  }
}

export default MusicPlayer;
