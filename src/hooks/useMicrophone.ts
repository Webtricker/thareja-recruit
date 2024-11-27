import { useEffect, useRef, useState } from "react";

const useMirophone = () => {
  const [analyser, setAnalyser] = useState<AnalyserNode | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const audioContext = new AudioContext();

  useEffect(() => {
    const initializeMicrophone = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const microphone = audioContext.createMediaStreamSource(stream);
      const analyser = audioContext.createAnalyser();
      microphone.connect(analyser);
      analyser.fftSize = 64; // Adjust as needed

      microphoneRef.current = microphone;
      setAnalyser(analyser);
    };

    initializeMicrophone();

    return () => {
      // Cleanup: disconnect audio nodes and close audio context
      microphoneRef.current?.disconnect();
      audioContext?.close();
    };
  }, []);

  return { analyser, microphone: microphoneRef.current };
};

export default useMirophone;
