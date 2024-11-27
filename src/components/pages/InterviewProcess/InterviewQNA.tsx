"use client";
import PowerdByRecruit from "@/components/shared/copyRight/PowerdByRecruit";
import {
  resetSkillTestStates,
  setCurrentQuestionIndx,
  setInterviewStatus,
  setScreenSharePermission,
  setStartTimer,
} from "@/redux/features/GptVettilngSlice/SkillTest";
import { RootState } from "@/redux/store";
import { formatTime } from "@/utils/UtilityFN";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TotalQuestions,
  UploadingAndLoadingQuestion,
} from "./ClientComponents";
import {
  MicrophoneBlueSVG,
  MicrophoneWhiteSVG,
  TimerClockSVG,
  VideoStopColorGraySVG,
  VideoStopColorWhiteSVG,
} from "./Icons";

// ======== timer ========
const InterviewStartTimer = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const startTimer = useSelector(
  //   (state: RootState) => state.interviewProcess.startTimer
  // );
  const interviewStatus = useSelector(
    (state: RootState) => state.interviewProcess.interviewStatus
  );
  const totalQuestions = 10; // for each question the time is 2 minutes
  const totalSeconds = totalQuestions * 120; //
  const [seconds, setSeconds] = useState(totalSeconds);
  const [time, setTime] = useState<string | null>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (interviewStatus === "RUNNING") {
      const id = setInterval(() => {
        setSeconds((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(id);

            //  ======== set the interview to over
            dispatch(setInterviewStatus("END"));
            router.push("/gpt-vetting");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);

      setIntervalId(id);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [interviewStatus, dispatch]);

  return (
    <div className="w-full flex justify-end">
      <div className="p-2.5 rounded-[100px] bg-[#EDF4FF] flex items-center gap-2.5">
        <TimerClockSVG />{" "}
        <span className=" fs-md leading_normal tracking-[0.4px] text-[#005AFF]">
          {formatTime(seconds)}
        </span>
      </div>
    </div>
  );
};

// ============ updating QNA =========
const UpdatingQNA = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const totalQuestions = useSelector(
    (state: RootState) => state.interviewProcess.interviewQuestions
  );
  const currentQuestion = useSelector(
    (state: RootState) => state.interviewProcess.currentQuestionIndx
  );

  const [currentState, setCurrentState] = useState<"UPLOAD" | "NEXT">("UPLOAD");

  useEffect(() => {
    const timoutId = setTimeout(() => {
      if (currentState === "UPLOAD") {
        setCurrentState("NEXT");
      }
    }, 2500);
    return () => {
      clearTimeout(timoutId);
      //   clearInterval(intervalId);
      //   setCurrentState("UPLOAD");
    };
  }, []);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (currentState === "NEXT") {
      // ====== change the next question and add other business logic =====
      if (totalQuestions.length === currentQuestion) {
        dispatch(resetSkillTestStates());
        router.push("/gpt-vetting");
      } else {
        timeoutId = setTimeout(() => {
          dispatch(setCurrentQuestionIndx(currentQuestion + 1));
          dispatch(setInterviewStatus("PAUSED"));
        }, 2000);
      }
    }

    return () => timeoutId && clearTimeout(timeoutId);
  }, [currentState]);

  return (
    <div className="w-full flex flex-col items-center justify-center mt-[95px]">
      <UploadingAndLoadingQuestion />
      <div className=" flex items-center justify-center  mb-6">
        <h5 className="text-[20px] lg:text-[22px] leading_nromal">
          {currentState === "UPLOAD" ? (
            <span>Uploading your answer...</span>
          ) : (
            <span>Hold on! Moving to the next question...</span>
          )}
        </h5>
      </div>
    </div>
  );
};

// ==========  visualization ========
const RecordingVisualization = () => {
  const dispatch = useDispatch();
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const screenStreamRef = useRef<MediaStream | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const [audioFrequency, setAudioFrequency] = useState(0);
  const lastUpdateTimeRef = useRef<number>(0);

  const interviewStatus = useSelector(
    (state: RootState) => state.interviewProcess.interviewStatus
  );
  const screenSharePermission = useSelector(
    (state: RootState) => state.interviewProcess.screenSharePermissions
  );
  const timerRunning = useSelector(
    (state: RootState) => state.interviewProcess.startTimer
  );

  // Cleanup function to stop recording and release resources when unmounting
  useEffect(() => {
    return () => {
      if (mediaRecorderRef.current?.state === "recording") {
        mediaRecorderRef.current.stop();
      }
      screenStreamRef.current?.getTracks().forEach((track) => track.stop());
      audioContextRef.current?.close();
    };
  }, []);

  const handleStartRecording = async () => {
    if (!screenSharePermission) {
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false,
        });
        const screenStream = await navigator.mediaDevices.getDisplayMedia({
          video: true,
        });

        // Combine audio and screen streams
        const combinedStream = new MediaStream([
          ...audioStream.getTracks(),
          ...screenStream.getTracks(),
        ]);

        // Create AudioContext and AnalyserNode for frequency analysis
        const audioContext = new AudioContext();
        const microphone = audioContext.createMediaStreamSource(audioStream);
        microphoneRef.current = microphone;

        const analyser = audioContext.createAnalyser();
        microphone.connect(analyser);

        analyser.fftSize = 512;
        const dataArray = new Uint8Array(analyser.frequencyBinCount);

        // Throttling logic for 500ms refresh rate
        const processAudio = (timestamp: number) => {
          const timeSinceLastUpdate = timestamp - lastUpdateTimeRef.current;

          if (timeSinceLastUpdate >= 100) {
            analyser.getByteFrequencyData(dataArray);

            const dataInRange = dataArray[0];
            const rangeInPX = Math.round(dataInRange / 3.5);
            const frequency = Math.min(rangeInPX, 60);

            setAudioFrequency(frequency);
            lastUpdateTimeRef.current = timestamp;
          }

          requestAnimationFrame(processAudio);
        };

        processAudio(performance.now());

        const mediaRecorder = new MediaRecorder(combinedStream);
        mediaRecorder.ondataavailable = (e) => {
          chunksRef.current.push(e.data);
        };

        mediaRecorderRef.current = mediaRecorder;
        screenStreamRef.current = screenStream;
        dispatch(setScreenSharePermission(true));
      } catch (err) {
        console.error("Error accessing media devices:", err);
      }
    }

    if (screenSharePermission && interviewStatus !== "RUNNING") {
      mediaRecorderRef.current?.start();
      dispatch(setInterviewStatus("RUNNING"));
      dispatch(setStartTimer(true));
    }
  };

  const handleSubmitAndContinue = () => {
    dispatch(setInterviewStatus("UPDATING"));
    mediaRecorderRef.current?.stop();
  };

  // Calculate dimensions based on audioFrequency
  const calculateDimensions = (frequency: number) => {
    const baseSize = 120; // Base size for the layers
    const increaseSize = frequency; // Size increment based on frequency

    if (interviewStatus !== "RUNNING")
      return { firstLayer: 120, secondLayer: 120 };

    if (frequency > 30) {
      return {
        firstLayer: baseSize + increaseSize,
        secondLayer: baseSize + 30,
      };
    } else {
      return {
        firstLayer: baseSize,
        secondLayer: baseSize + increaseSize,
      };
    }
  };

  const { firstLayer, secondLayer } = calculateDimensions(audioFrequency);
  console.log(interviewStatus);
  return (
    <>
      <div className="flex flex-col items-center w-full my-[50px] lg:my-[60px] pt-[40px] pb-[50px] rounded-[20px] bg-[#EDF4FF]">
        {interviewStatus !== "UPDATING" && (
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="h-[180px] relative flex items-center justify-center w-[180px] mb-6">
              {/* ======== button for start recording ========= */}
              <button
                onClick={handleStartRecording}
                className={`z-30 py-[33px] px-[43px] rounded-full ${
                  interviewStatus === "RUNNING" ? "bg-[#005AFF]" : "bg-white"
                }`}
              >
                {interviewStatus === "RUNNING" ? (
                  <MicrophoneWhiteSVG />
                ) : (
                  <MicrophoneBlueSVG />
                )}
              </button>

              {/* ======== visualizations ========== */}

              {/* ======= first layer ======== */}
              <div
                className={`z-10 w-[120px] h-[120px] rounded-full translate-x-[-50%] duration-[0.05s]  translate-y-[-50%] absolute top-[50%] left-[50%] bg-[#97bcff80]`}
                style={{
                  width: `${firstLayer}px`,
                  height: `${firstLayer}px`,
                }}
              ></div>

              {/* ======= second layer ===== */}
              <div
                className={`z-20 w-[120px] h-[120px] rounded-full translate-x-[-50%] duration-[0.05s]  translate-y-[-50%] absolute top-[50%] left-[50%] bg-[#97BCFF]`}
                style={{
                  width: `${secondLayer}px`,
                  height: `${secondLayer}px`,
                }}
              ></div>
            </div>

            <p className="text-center text-[20px] md:text-[22px] leading_normal">
              {interviewStatus === "RUNNING" ? (
                <span>Recording...</span>
              ) : (
                <span>Click to start recording</span>
              )}
            </p>
          </div>
        )}

        {/* ======= shod updating state ====== */}
        {interviewStatus === "UPDATING" && <UpdatingQNA />}
      </div>

      <button
        disabled={interviewStatus !== "RUNNING"}
        onClick={handleSubmitAndContinue}
        className={`fs-md leading_normal tracking-[0.4px] py-2.5 md:py-3 px-5  lg:py-[16px] rounded-[100px] flex items-center gap-2.5 ${
          interviewStatus === "RUNNING"
            ? "bg-[#005AFF] text-white"
            : " text-[#525966cc] bg-[#dde3e766]"
        }`}
      >
        <span>Submit & continue</span>
        {interviewStatus === "RUNNING" ? (
          <VideoStopColorWhiteSVG />
        ) : (
          <VideoStopColorGraySVG />
        )}
      </button>
    </>
  );
};

// ========== root component =================
const InterviewQNA = () => {
  const questionsArray = useSelector(
    (state: RootState) => state.interviewProcess.interviewQuestions
  );

  const index = useSelector(
    (state: RootState) => state.interviewProcess.currentQuestionIndx
  );

  return (
    <div className="w-full">
      <InterviewStartTimer />
      <div className="flex flex-col items-center justify-center max-w-[1200px] w-full mx-auto">
        <div className="w-full mb-6">
          <TotalQuestions />
        </div>
        <h2 className="w-full text-center max-w-[780px] fs-3xl ">
          {questionsArray.length && questionsArray[index - 1]
            ? questionsArray[index - 1]
            : "No question found"}
        </h2>
        <RecordingVisualization />
        <p className="text-center fs-md leading_normal tracking-[0.4px] my-5">
          Note: please do not refresh the page or you’ll lose the data.
        </p>
        <PowerdByRecruit />
      </div>
    </div>
  );
};

export default InterviewQNA;
