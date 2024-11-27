import { Dispatch, SetStateAction } from "react";

type PropsType = {
  setShow: Dispatch<SetStateAction<boolean>>;
};
const OpenEyeSVG = ({ setShow }: PropsType) => {
  return (
    <svg
      onClick={() => setShow(false)}
      className="absolute top-[50%] right-5 translate-y-[-50%]"
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 204 178"
      width="20"
      height="17"
    >
      <title>Eys</title>
      <defs>
        <image
          width="204"
          height="115"
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAABzCAMAAADjYB1gAAAAAXNSR0IB2cksfwAAAIdQTFRF////+vr69vb28/Pz8PDw5ubm2tra1tbWzMzMv7+/tra2paWlmZmZjo6Ow8PD7e3t4uLieHh4Xl5eQUFBAAAAS0tLbGxshoaGra2tNjY2Ly8vISEhUFBQY2NjGRkZERERKioqf39/5ubm8PDw9vb2////7e3t+vr68/Pz4uLi7e3t4uLi5ubma5E9rAAAAC10Uk5TAAAAAABR////////////BKn/////////////////////////////////INCQt5daCQAACglJREFUeJzFXAlz2kgWVrfuC7DxbWeSmdRM7dr5/79knJ3K1k4qYJzYxoYAEmerRwJsc3RL7zVy7VepCgappa+P9773+iDaW4CQxb85NJJ+wTWNa9wYc+5FnKcf3+SxJRdHwtiPdWplJOQXkQFnbuT1k5KfXl5RVKekFrn6FHg91+Mk4Qkrj1FJZKjheJFrTNA3miwO4hFjpbxFGWRMQ/en7lj5fptMIzaDNmgOdiZj7XOrhBex9Mlgim/YdexGxrL2RpZ6k6zDGzqdyU58diBDPM+wol0evgV/ondidautTMY+IrHyU/Pg8XvVtlYjU50dlNsk67BZe6ZynwIZ3fB0lUfhHtJRMNdoMqZeKdlvS8CG9k/kLUgyplsdIp+gDjQdFBnTDJCtEkTEjxfDy08Vpj/A3c7GJoYOgoxxYKJahQT3qUw+f5acqVZu2TNyNMCYXn84GMHrD07GqycIk5mMWfKOin5oUn1vBC8oiPvgKoSSsYIKvIuY/ckHIq9QOr2xKnBXb80mXdiVQDK/TuCtQvofeFHXoLMHG97d7J+wigSR8fbgVPjgF+CVzT24Pg1+QHomgEyNivq+GGb3AnytprWqcDosKbZrhWSoUwN3bzOpQC9dYjYC07G64yJNUETGPutDn6YlEbSHvaLhh2CVx+KC3p5PhhxPwbbbHJyrBL96KwA3Djfvcq1G7rvWmA19jsaH79Q0G20EcLumj/OsdB6ZCkKHOQ/4LvaMxiHciSbDnHfKIRMgHFtS2yUqYF24vbR6cp8jJVPdT+DxF6nulkvQH+E9zadPMiMtewmMc9EsH36tBANEgidJJANHQsY5xoTFe4hrZeggrvXvxINMSIa4HqJo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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img1" x="0" y="31" />
    </svg>
  );
};

export default OpenEyeSVG;
