import React from 'react'
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer'

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ap: null};
  }

  componentDidMount () {
    const ap = new APlayer({
      container: document.getElementById('player'),
      fixed: true,
      // TODO: 获取网易云 每日推荐歌曲
      audio: [{
          name: '沉默是金',
          artist: '张国荣',
          url: 'https://m10.music.126.net/20221110203900/e150006c3ff60f26319d14571486c82f/yyaac/obj/wonDkMOGw6XDiTHCmMOi/3058352428/28ac/5055/a810/16dd4fbad431d482ad28049b9e1b4f5f.m4a',
          cover: 'https://p2.music.126.net/cmvsHFnVKXO409hZdrbacA==/102254581395221.jpg?param=130y130',
      }]
    });
    this.setState({ ap })
  }

  render() {
    return (
      <div>
        <div id="player"></div>
      </div>
    );
  }
}

export default Player;
