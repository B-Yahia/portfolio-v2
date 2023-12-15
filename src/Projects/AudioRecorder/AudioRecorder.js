import React, { useRef, useState } from "react";
import "../../App.css";
import "./AudioRecorder.css";
import { useDispatch, useSelector } from "react-redux";
import { addMediaToList } from "../../ReduxStore/MediaSlice";
import MediaPlayer from "./MediaPlayer";

function AudioRecorder() {
  const mediaRecorder = useRef(null);
  const mediaList = useSelector((state) => state.media.mediaList);
  const dispatch = useDispatch();
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      setRecording(true);
      mediaRecorder.current = new MediaRecorder(stream);
      mediaRecorder.current.start(100);
      mediaRecorder.current.ondataavailable = (event) => {
        setAudioChunks((prevChunks) => [...prevChunks, event.data]);
      };
    });
  };
  const stopRecording = () => {
    mediaRecorder.current.stop();
    mediaRecorder.current.onstop = () => {
      setRecording(false);
      const audioBlob = new Blob(audioChunks, { type: "audio/mpeg-3" });
      const audioUrl = URL.createObjectURL(audioBlob);
      const media = {
        elementURL: audioUrl,
        title: "Audio recording " + (mediaList.length + 1),
      };
      dispatch(addMediaToList({ media }));
      setAudioChunks([]);
    };
    const tracks = mediaRecorder.current.stream.getTracks();
    tracks.forEach((track) => track.stop());
  };
  return (
    <div className="body_container">
      <div className="project_title">
        <p>Audio Recorder MP3</p>
      </div>
      <div className="audio_recorder_container">
        {recording ? (
          <div className="audio_recorder_start_recording_container">
            <p>Click on this button to stop recording</p>
            <button onClick={stopRecording}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M6 18V6h12v12H6Z" />
              </svg>
            </button>
          </div>
        ) : (
          <div className="audio_recorder_start_recording_container">
            <p>Click on this button to start recording </p>
            <button onClick={startRecording}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="5 4 15 15">
                <path
                  fill="currentColor"
                  d="M12.5 5A7.5 7.5 0 0 0 5 12.5a7.5 7.5 0 0 0 7.5 7.5a7.5 7.5 0 0 0 7.5-7.5A7.5 7.5 0 0 0 12.5 5M7 10h2a1 1 0 0 1 1 1v1c0 .5-.38.9-.86.97L10.31 15H9.15L8 13v2H7m5-5h2v1h-2v1h2v1h-2v1h2v1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m4 0h2v1h-2v3h2v1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1m-8 1v1h1v-1"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <MediaPlayer download={true} />
    </div>
  );
}

export default AudioRecorder;
