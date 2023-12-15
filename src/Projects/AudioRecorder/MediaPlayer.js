import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNewMedia } from "../../ReduxStore/MediaSlice";

function MediaPlayer(props) {
  const canvasRef = useRef();
  const mediaList = useSelector((state) => state.media.mediaList);
  const selectedMedia = useSelector((state) => state.media.selectedMedia);
  const selectedMediaIndex = useSelector(
    (state) => state.media.selectedMediaIndex
  );
  const [duration, setDuration] = useState(0);
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const audioSourceRef = useRef(null);
  const audioCtx = useRef(null);
  const dispatch = useDispatch();

  function startCanvasAnimation(audio) {
    console.log("Animation started");
    if (!audioSourceRef.current) {
      audioCtx.current = new AudioContext();
      audioSourceRef.current = audioCtx.current.createMediaElementSource(audio);
    }
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const analyser = audioCtx.current.createAnalyser();
    audioSourceRef.current.connect(analyser);
    analyser.fftSize = 64;
    analyser.connect(audioCtx.current.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const dataArray2 = new Uint8Array(bufferLength);
    const barWidth = (canvas.width - 60) / bufferLength;
    const draw = () => {
      representFrequencyData(
        analyser,
        dataArray,
        ctx,
        canvas,
        bufferLength,
        barWidth
      );
      representTimeDomainData(
        analyser,
        dataArray2,
        bufferLength,
        ctx,
        barWidth
      );
      if (!audio.paused && !audio.ended) {
        requestAnimationFrame(draw);
      } else {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
    };
    draw();
  }
  function representFrequencyData(
    analyser,
    dataArray,
    ctx,
    canvas,
    bufferLength,
    barWidth
  ) {
    let x = 15;
    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < bufferLength; i++) {
      let barHeight = dataArray[i] / 5;
      ctx.fillStyle = `#FE8900`;
      ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
      x += barWidth + 1;
    }
  }

  function representTimeDomainData(
    analyser,
    dataArray2,
    bufferLength,
    ctx,
    barWidth
  ) {
    let y = 15;
    analyser.getByteTimeDomainData(dataArray2);
    for (let i = 0; i < bufferLength; i++) {
      let barHeight = dataArray2[i] / 5;
      ctx.fillStyle = `#FE8900`;
      ctx.fillRect(y, 0, barWidth, barHeight);
      y += barWidth + 1;
    }
  }
  function formatTime(seconds) {
    let h = Math.round(seconds / 3600);
    let m = Math.round((seconds % 3600) / 60);
    let s = Math.round(seconds % 60);
    let mFormatted = m.toString().padStart(2, "0");
    let sFormatted = s.toString().padStart(2, "0");

    if (h === 0) {
      return mFormatted + ":" + sFormatted;
    } else {
      let hFormatted = h.toString().padStart(2, "0");
      return hFormatted + ":" + mFormatted + ":" + sFormatted;
    }
  }
  function generateAudioElement(audioURL) {
    const aud = new Audio(audioURL);
    setAudio(aud);
    setAudioDuration(aud);
    aud.onplay = () => {
      startCanvasAnimation(aud);
    };
  }
  function setAudioDuration(audio) {
    if (isNaN(audio.duration) || audio.duration === Infinity) {
      setTimeout(() => setAudioDuration(audio), 500);
    } else {
      setDuration(audio.duration);
    }
  }
  function playTheAudio() {
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      console.log("Audio already playing");
    }
  }
  function pauseTheAudio() {
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
    } else {
      console.log("Audio already playing");
    }
  }
  function stopTheAudio() {
    audio.pause();
    audio.currentTime = 0;
    setPlaying(false);
  }
  function toggleMuste() {
    if (muted) {
      audio.volume = 1;
      setMuted(false);
    } else {
      audio.volume = 0;
      setMuted(true);
    }
  }
  function setSelectedMedia(index) {
    if (playing) {
      pauseTheAudio();
    }
    dispatch(selectNewMedia({ index }));
    audioSourceRef.current = null;
  }
  function downloadTheAudio() {
    const link = document.createElement("a");
    link.href = selectedMedia.elementURL;
    link.download = selectedMedia.title + ".mp3";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    if (selectedMedia) {
      generateAudioElement(selectedMedia.elementURL);
    }
  }, [selectedMedia]);
  return (
    <div className="audio_player_container">
      <div className="audio_player_controller">
        {selectedMedia ? (
          <div className="audio_player">
            <div className="audio_player_info">
              <p>{selectedMedia.title}</p>
              <p>{duration !== 0 && formatTime(duration)}</p>
            </div>
            {audio && (
              <div className="audio_player_btns">
                {playing ? (
                  <p>
                    <button className="btn" onClick={() => pauseTheAudio()}>
                      Pause
                    </button>
                  </p>
                ) : (
                  <p>
                    <button className="btn" onClick={() => playTheAudio()}>
                      Play
                    </button>
                  </p>
                )}
                {muted ? (
                  <p>
                    <button className="btn" onClick={() => toggleMuste()}>
                      Unmute
                    </button>
                  </p>
                ) : (
                  <p>
                    <button className="btn" onClick={() => toggleMuste()}>
                      mute
                    </button>
                  </p>
                )}
                <p>
                  <button className="btn" onClick={() => stopTheAudio()}>
                    Stop
                  </button>
                </p>
                {props.download && (
                  <p>
                    <button className="btn" onClick={() => downloadTheAudio()}>
                      Download
                    </button>
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <p>No media has been selected</p>
        )}
      </div>
      <div className="media_dashboard">
        <div className="audios_list">
          {mediaList &&
            mediaList.map((media, index) =>
              index === selectedMediaIndex ? (
                <div key={index} className="selected_audio">
                  {media.title}
                </div>
              ) : (
                <div key={index} onClick={() => setSelectedMedia(index)}>
                  {media.title}
                </div>
              )
            )}
        </div>
        <div className="canvas_container">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </div>
  );
}

export default MediaPlayer;
