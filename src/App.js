import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar.jsx";
import RabbitPlayer from "./RabbitPlayer.jsx";

const initialMusic = "http://mp3.dwjgrw.cn/down/11423.mp3";
const initiallyrics = `
[00:16.78]Loving can hurt
[00:21.06]Loving can hurt sometimes
[00:25.70]But it's the only thing that I know
[00:30.63]
[00:34.34]When it gets hard
[00:38.52]You know it can get hard sometimes
[00:43.44]It is the only thing that makes us feel alive
[00:50.41]
[00:54.03]We keep this love in a photograph
[00:58.39]We made these memories for ourselves
[01:01.83]Where our eyes are never closing
[01:04.15]Hearts are never broken
[01:06.57]And time's forever frozen, still
[01:09.64]
[01:10.28]So you can keep me
[01:13.44]Inside the pocket of your ripped jeans
[01:17.89]Holding me closer till our eyes meet
[01:22.27]You won't ever be alone
[01:26.69]Wait for me to come home
[01:29.85]
[01:32.35]Loving can heal
[01:36.71]Loving can mend your soul
[01:40.89]And it's the only thing that I know (know)
[01:47.58]
[01:49.48]I swear it will get easier
[01:53.20]Remember that with every piece of you
[01:58.92]And it's the only thing we take with us when we die
[02:06.08]
[02:08.79]We keep this love in a photograph
[02:13.72]We made these memories for ourselves
[02:17.15]Where our eyes are never closing
[02:19.66]Our hearts were never broken
[02:22.17]And time's forever frozen, still
[02:25.33]
[02:26.07]So you can keep me
[02:28.86]Inside the pocket of your ripped jeans
[02:33.60]Holding me closer till our eyes meet
[02:37.96]You won't ever be alone
[02:42.79]
[02:44.08]And if you hurt me
[02:46.78]That's okay baby, only words bleed
[02:51.15]Inside these pages you just hold me
[02:55.69]And I won’t ever let you go
[03:00.25]Wait for me to come home
[03:04.71]Wait for me to come home
[03:08.70]Wait for me to come home
[03:13.07]Wait for me to come home
[03:18.36]
[03:19.27]Oh you can fit me
[03:21.84]Inside the necklace you bought when you were 16
[03:26.58]Next to your heartbeat where I should be
[03:31.22]Keep it deep within your soul
[03:36.64]
[03:37.38]And if you hurt me
[03:39.89]Well that's okay baby, only words bleed
[03:44.44]Inside these pages you just hold me
[03:49.00]And I won’t ever let you go
[03:54.69]
[03:54.97]When I'm away
[03:57.85]I will remember how you kissed me
[04:02.12]Under the lamppost back on sixth street
[04:06.76]Hearing you whisper through the phone
[04:11.23]"Wait for me to come home"
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
