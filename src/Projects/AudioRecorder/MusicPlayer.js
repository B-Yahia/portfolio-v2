import React from "react";
import MediaPlayer from "./MediaPlayer";
import { useDispatch } from "react-redux";
import { addMediaToList } from "../../ReduxStore/MediaSlice";

function MusicPlayer() {
  const dispatch = useDispatch();
  const handleAudio = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const audioUrl = URL.createObjectURL(file);
    const media = { elementURL: audioUrl, title: file.name };

    dispatch(addMediaToList({ media }));
  };

  return (
    <div className="body_container">
      <div className="project_title">
        <p>Audio Player</p>
      </div>
      <div className="upload_audio_container">
        <label> Upload an audio to play </label>
        <input
          type="file"
          id="audio2play"
          accept="audio/*"
          onChange={handleAudio}
        />
      </div>
      <div className="audio_recorder_container">
        <MediaPlayer />
      </div>
    </div>
  );
}

export default MusicPlayer;
