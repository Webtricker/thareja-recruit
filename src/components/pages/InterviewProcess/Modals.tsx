"use client";
import {
  setActiveModal,
  setActiveSkillTestComponent,
  setMiceStatus,
  setOpenInterviewProcessModal,
} from "@/redux/features/GptVettilngSlice/SkillTest";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ModalCloseSVG } from "./Icons";

// =========== Screen sharing permissions =================
const ScreenSharePermission = () => {
  return <></>;
};

// =========== Camera & microphone permission message =================
const CameraAndMicrophoneAccess = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        //   dispatch(setOpenInviteCandidateModal(true));
      }}
      className="h-auto relative p-5 md:p-6 lg:p-8 xl:p-9 2xl:p-10 w-full max-w-[95vw] md:max-w-[652px] overflow-y-auto bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]"
    >
      <div className="flex justify-between items-center mb-[28px] rounded-lg bg-[rgba(0,90,255,0.03)] py-2.5 px-[18px]">
        <h2 className="fs-xl-lh-lg">Camera & microphone access</h2>
      </div>
      <p className="fs-md tracking-[0.4px]">
        You&apos;re about to share your screen, give camera and microphone
        access. We only use this information to generate a trust score and
        prevent cheating.
      </p>

      <p className="fs-md tracking-[0.4px] my-6">
        Once you&apos;ve shared your screen and your camera is on, you can click
        on &apos;
        <span className="text-[#005AFF]">Record</span>&apos; and start answering
        your first question.
      </p>
      <h5 className="text-[#005AFF]  fs-lg-lh-normal">Best of luck!</h5>
      <div className="mt-[50px] lg:mt-[60px] flex justify-end">
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(setActiveModal(null));
            dispatch(setActiveSkillTestComponent("INTERVIEW_QNA"));
          }}
          className="fs-md text-white  btn-large bg-[#005AFF] "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

// ======== microphone modal =================

const MicInput = () => {
  const dispatch = useDispatch();
  const [audioFrequency, setAudioFrequency] = useState(0);
  const miceStatus = useSelector(
    (state: RootState) => state.interviewProcess.miceStatus
  );

  const lastUpdateTimeRef = useRef<number>(0);
  const microphoneRef = useRef<MediaStreamAudioSourceNode | null>(null);
  useEffect(() => {
    const initializeNavigatorAPI = async () => {
      // initialize microphone
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const microphone = audioContext.createMediaStreamSource(stream);
      microphoneRef.current = microphone;
      const analyser = audioContext.createAnalyser();
      microphone.connect(analyser);

      analyser.fftSize = 512;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      //   get the frequency buffer after each broser refresh
      const processAudio = (timestamp: number) => {
        const timeSinceLastUpdate = timestamp - lastUpdateTimeRef.current;

        // get the frequency
        if (timeSinceLastUpdate >= 80) {
          analyser.getByteFrequencyData(dataArray);
          const dataInRange = dataArray[0];
          const totalVisualization = Math.round((dataInRange - 50) / 9);
          if (
            totalVisualization >= 0 &&
            totalVisualization !== audioFrequency
          ) {
            const val = totalVisualization > 20 ? 20 : totalVisualization;
            setAudioFrequency(val);
          } else {
            setAudioFrequency(0);
          }
          lastUpdateTimeRef.current = timestamp;
        }
        requestAnimationFrame(processAudio);
      };

      processAudio(performance.now());
    };

    initializeNavigatorAPI();
  });

  //   =========== handlers =========
  const toggleStatus = (action: "TOGGLE" | "DISCONNECT") => {
    if (action === "DISCONNECT") {
      microphoneRef?.current?.disconnect();
      dispatch(setMiceStatus("OFF"));
      dispatch(setActiveModal("CAMERA_AND_MIRCOPHONE_PERMISSION"));
    } else {
      dispatch(setMiceStatus(miceStatus === "OFF" ? "ON" : "OFF"));
    }
  };
  return (
    <>
      <div className="w-full min-w-[370px] max-w-[370px] mx-auto bg-gradient-to-r from-[#01D18F] to-[#005AFF] p-[1px] rounded-[6px]">
        <div className=" relative py-[5px] px-[6px] w-full bg-white rounded-[5.5px]">
          <div className="flex items-center gap-1 ">
            {new Array(20).fill(null).map((_, indx) => (
              <div
                key={indx}
                className="inline-block w-[14px] h-[30px] rounded-[10px] bg-[#EDF4FF]"
              ></div>
            ))}
          </div>
          <div className="flex items-center gap-1 absolute top-[5px] left-[6px]">
            {miceStatus === "ON" &&
              new Array(audioFrequency)
                .fill(null)
                .map((_, indx) => (
                  <div
                    key={indx}
                    className="inline-block w-[14px] h-[30px] rounded-[10px] bg-[#005AFF]"
                  ></div>
                ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-[50px] lg:mt-[60px]">
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleStatus("TOGGLE");
          }}
          className="fs-md btn-large  text-[#005AFF]"
        >
          {miceStatus === "ON" ? "Pause" : "Speak"}
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            toggleStatus("DISCONNECT");
          }}
          className="fs-md btn-large btn-bg-blue "
        >
          Yes
        </button>
      </div>
    </>
  );
};

const MiceTestModal = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        console.log("card body event triggered");
        //   dispatch(setOpenInviteCandidateModal(true));
      }}
      className="h-auto relative px-4 py-5 md:p-6 lg:p-8 xl:p-9 2xl:p-10 w-full max-w-[95vw] md:max-w-[450px] overflow-y-auto bg-white rounded-[20px] lg:rounded-[30px]  z-[999999999999999999]"
    >
      <div className="flex justify-between items-center mb-[28px] rounded-lg bg-[rgba(0,90,255,0.03)] py-2.5 px-[18px]">
        <h2 className="fs-xl-lh-lg">Invite a candidate</h2>
        <button
          onClick={(event) => {
            event.stopPropagation();
            // dispatch(setOpenInviteCandidateModal(false));
          }}
          className="text-gray-500 hover:text-gray-700 text-[27px]"
        >
          <ModalCloseSVG />
        </button>
      </div>
      <p className="fs-base mb-3">Input level</p>
      <MicInput />
    </div>
  );
};

// ===== render active modal based on current state =====
const RenderModals = () => {
  const activeModal = useSelector(
    (state: RootState) => state.interviewProcess.activeModal
  );

  switch (activeModal) {
    case "MIC_TEST":
      return <MiceTestModal />;
    case "CAMERA_AND_MIRCOPHONE_PERMISSION":
      return <CameraAndMicrophoneAccess />;
    case "SCREEN_SHARE_PERMISSION":
      return <ScreenSharePermission />;
    default:
      return <></>;
  }
};

//  ======== root component =============
export default function SkillTestModal() {
  const dispatch = useDispatch();
  const activeModal = useSelector(
    (state: RootState) => state.interviewProcess.activeModal
  );
  if (activeModal === null) return <></>;
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        dispatch(setOpenInterviewProcessModal(false));
        document.body.style.overflowY = "auto";
      }}
      className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-[#00000099] overflow-x-hidden z-[999999999]"
    >
      <RenderModals />
    </div>
  );
}
