import React, { useCallback } from "react"
import { useSpring, animated as a, interpolate } from "react-spring"

function Eagle(props) {
  const [{ st, xy }, set] = useSpring(() => ({ st: 0, xy: [0, 0] }))

  const interpPupil = interpolate(
    [st, xy],
    (o, xy) => `translate(${xy[0] / 35},${xy[1] / 25 + -1 + o / 2})`
  )

  const onMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      set({ xy: [x - window.innerWidth / 2, y - window.innerHeight / 2] }),
    []
  )
  const onScroll = useCallback(e => set({ st: e.target.scrollTop / 30 }), [])
  return (
    <div class="container" onMouseMove={onMove} onScroll={onScroll}>
      <svg
        id="prefix__Layer_1"
        x={0}
        y={0}
        width={500}
        height={500}
        viewBox="0 0 800 800"
        xmlSpace="preserve"
        {...props}
      >
        <style>
          {
            ".prefix__st0{fill:#7e91c1}.prefix__st1{fill:#e2e1c9}.prefix__st2{fill:#4a6da0}.prefix__st3{fill:#4b6387}.prefix__st4{fill:#e8e8da}.prefix__st5{display:inline;fill:#895f58}.prefix__st6{fill:#858936}.prefix__st7{fill:#b5ac6d}.prefix__st8{fill:#eaddce}.prefix__st9{fill:#efefed}.prefix__st10{fill:#526386}.prefix__st11{fill:#baa393}.prefix__st12{fill:#bbbcac}.prefix__st13{fill:#bcb48b}.prefix__st14{fill:#234582}.prefix__st15{display:inline;fill-rule:evenodd;clip-rule:evenodd;fill:#895f58}.prefix__st16{fill:#f9c900}.prefix__st17{fill:#927e48}.prefix__st18{fill:#978139}.prefix__st19{fill:#c6b6ac}.prefix__st20{fill:#2d52a0}.prefix__st21{fill:#99aac6}.prefix__st22{fill:#fcfbe0}.prefix__st23{fill:#fef8cb}.prefix__st24{fill:#fefff3}.prefix__st25{fill:#ffa748}.prefix__st26{fill:#ffd385}.prefix__st27{fill:#ffd629}.prefix__st28{fill:#ffd748}.prefix__st29{fill:#ffdea9}.prefix__st30{fill:#ffe473}.prefix__st31{fill:#ffeea6}.prefix__st32{fill:#68768e}.prefix__st33{fill:#cccdc6}.prefix__st35{fill:#cec089}.prefix__st36{fill:#cec27a}.prefix__st37{fill:#d3c8c2}.prefix__st39{fill:#d6d7d8}.prefix__st40{fill:#717bc6}.prefix__st41{display:none}.prefix__st42{fill:#a49a4e}.prefix__st43{fill:#777fa0}.prefix__st44{fill:#a89282}.prefix__st45{fill:#deb501}"
          }
        </style>

        <g className="prefix__st41">
          <image
            width={2057}
            height={2571}
            xlinkHref="FADD11A5.png"
            transform="matrix(.24 0 0 .24 155.191 111.67)"
            overflow="visible"
            opacity={0.95}
          />
          <path
            className="prefix__st21"
            d="M614.3 529.8v-63L599.4 385l-11.2-122.4-25.2-61.8-22.5-31.7-22.5-13.9-39.2-21.7-48-7.7h-61.5l-48 7.7-39.2 21.7-22.5 13.9-22.5 31.7-25.2 61.8L200.7 385l-14.9 81.8v63l-11.5 50.5 17.9 27.4 24.9-6.5 24.4 36.1 12.4-26.9 11.4 46.9 25.4-31.1 17.8 46 28.2-77-16.7 45.2 48.2 60.3 31.7-20.6 31.7 20.6 48.2-60.3-16.6-45.2 28.2 77 17.8-46 25.4 31.1 11.4-46.9 12.4 26.9 24.4-36.1 24.9 6.5 17.9-27.4-11.3-50.5zM503.8 287.1l.5 11.6-.5-11.6zm14.7-60.7s0-.1 0 0zM484 281.7l-11.1 4.2-30.1 11.4 41.2-15.6-17-4.7 17 4.7zm-126.8 15.6L327 285.9l-11.1-4.2 17-4.7-17 4.7 41.3 15.6zm-75.7-71zm14.6 60.9l-.4 11.5.4-11.5zm83.3 13.3l-4-28.6 7.8 55.8-3.8-27.2zm45.2-28.6l-4 28.6-3.8 27.2 7.8-55.8zm124.8-15.8l-8.9 31 18.2-63.2-9.3 32.2zm-30.7 8l10.5-27.6 5.4-14.3-15.9 41.9zm-16.9-59h-.4.4zm-4.1 1.1l-25.9 7.1 25.9-7.1zm-201-1.1h-.2l.1-.1.1.1zm-25.9 31.4l10.5 27.6-15.9-41.9 5.4 14.3zm-20.2 19.6l-9.3-32.2 18.2 63.2-8.9-31z"
          />
        </g>

        <path
          className="prefix__st30"
          d="M523.5 171.5c-.9-1-2.1-.4-2.5.6-7.5-5.1-13.6 2.8-14.8 10.4-.9 5.8 1 15.2 7.9 16.5 5.5 1 10.4-3.8 12.6-8.4 3.2-6.5 1.5-13.7-3.2-19.1zm.9 16.5c-1.2 3.6-4.2 7.1-8.1 7.9-5 1-6.6-5.7-7.1-9.2-.7-5.5 3.7-17.4 10.6-11.5.8.7 1.8.4 2.4-.2 2.8 3.8 3.8 8.4 2.2 13z"
        />
        <path className="prefix__st45" d="M400.8 310.5l20.7-1.7-20.7 65.3z" />
        <path className="prefix__st28" d="M421.5 308.8L400.8 240v70.5z" />
        <path className="prefix__st16" d="M421.5 308.8l9.7-68.8h-30.4z" />
        <path className="prefix__st4" d="M526.1 157.6L546.2 96l-56.9 71.7z" />
        <path className="prefix__st7" d="M431.2 240l22.4 31.3-27.4 4z" />
        <path className="prefix__st13" d="M453.6 271.3l-12.3-62.2-10.1 30.9z" />
        <path className="prefix__st26" d="M412.9 187l18.3 53-30.4-39.3z" />
        <path className="prefix__st29" d="M412.9 187l-12.1-3.2v16.9z" />
        <path
          className="prefix__st25"
          d="M441.3 209.1L431.2 240l-18.3-53 21.4-.2"
        />
        <path
          className="prefix__st25"
          d="M434.3 186.8l17.4-16.3 1.9 38.6h-12.3z"
        />
        <path
          className="prefix__st3"
          d="M434.3 186.8s-3.6 18.2 7 22.4c0-.1 8.4-8.6-7-22.4z"
        />
        <path className="prefix__st27" d="M431.2 240l-30.4-39.3V240z" />
        <path className="prefix__st16" d="M441.3 209.1l12.3 62.2v-62.2z" />
        <path className="prefix__st28" d="M412.9 187l-12.1-25.2 33.5 25z" />
        <path className="prefix__st30" d="M400.8 161.8v-19.2h23.3z" />
        <path className="prefix__st16" d="M400.8 161.8l50.9 8.7-17.4 16.3z" />
        <path className="prefix__st27" d="M424.1 142.6l27.6 27.9-50.9-8.7z" />
        <path
          className="prefix__st30"
          d="M400.8 161.8l12.1 25.2-12.1-3.2zM529.4 273l-14-10.1-31.9 8.4z"
        />
        <path
          className="prefix__st27"
          d="M529.4 273l-.6-14.5-13.4 4.4zM515.4 262.9l-24.6-5.7-7.3 14.1z"
        />
        <path className="prefix__st16" d="M515.4 262.9l-11-10.8-13.6 5.1z" />
        <path className="prefix__st25" d="M453.6 271.3l29.9-25-29.9-6.3z" />
        <path className="prefix__st42" d="M453.6 271.3l-32.1 37.5 4.7-33.5z" />
        <path className="prefix__st17" d="M453.6 271.3l-1.9 25.2-30.2 12.3z" />
        <path className="prefix__st6" d="M453.6 271.3l29.9 30.8-31.8-5.6z" />
        <path className="prefix__st42" d="M453.6 271.3h29.9v30.8z" />
        <path className="prefix__st36" d="M483.5 271.3l7.3-14.1-37.2 14.1z" />
        <path
          className="prefix__st45"
          d="M453.6 271.3l50.8-19.2-20.9-5.8zM515.4 262.9l-11-10.8 24.4 6.4z"
        />
        <path className="prefix__st35" d="M483.5 246.3l-31.8-75.8 1.9 69.5z" />
        <path
          className="prefix__st24"
          d="M400.8 142.6l37.8-82.9h-37.8zM438.6 59.7l53.6 51.5-68.1 31.4z"
        />
        <path className="prefix__st22" d="M492.2 111.2l-40.5 59.3-27.6-27.9z" />
        <path
          className="prefix__st22"
          d="M438.6 59.7l-14.5 82.9h-23.3zM492.2 111.2l5.6-42L546.2 96z"
        />
        <path
          className="prefix__st9"
          d="M546.2 96l-94.5 74.5 40.5-59.3zM492.2 111.2l-53.6-51.5 59.2 9.5z"
        />
        <path className="prefix__st4" d="M546.2 96l55.5 56.2-27.8-39z" />
        <path className="prefix__st1" d="M489.3 167.7l-37.6 2.8L546.2 96z" />
        <path className="prefix__st39" d="M546.2 96l-20.1 61.6 75.6-5.4z" />
        <path
          className="prefix__st1"
          d="M601.7 152.2l-5.3 28.6 36.4 47.6zM632.8 228.4l-47.8-7.9-11.1 38.3z"
        />
        <path className="prefix__st31" d="M573.9 258.8l-26.8-28.4-18.8 12.1z" />
        <path className="prefix__st37" d="M585 220.5l11.4-39.7 36.4 47.6z" />
        <path
          className="prefix__st8"
          d="M528.3 242.5l1.1 30.5 44.5-14.2zM547.1 230.4l49.3-49.6-22.5 78z"
        />
        <path
          className="prefix__st37"
          d="M547.1 230.4l19.7-51.7 29.6 2.1zM566.8 178.7l-40.7-21.1 75.6-5.4zM528.3 242.5L501.5 216l-18 30.3z"
        />
        <path
          className="prefix__st19"
          d="M528.3 242.5l.6 16.3-45.4-12.5zM501.5 216l45.6 14.4-.2-46.6zM451.7 170.5l34.4 18.3-2.6 57.5z"
        />
        <path
          className="prefix__st12"
          d="M486.1 188.8l15.4 27.2-18 30.3zM547.1 230.4L501.5 216l26.8 26.5zM546.9 183.8l13.1 12.6-12.9 34zM566.8 178.7l34.9-26.5-5.3 28.6z"
        />
        <path className="prefix__st7" d="M560 196.4l-13.1-12.6 19.9-5.1z" />
        <path
          style={{ fill: "black" }}
          className="prefix__st44"
          d="M489.3 167.7l-3.2 21.1-34.4-18.3zM546.9 183.8L531 158.4l35.8 20.3z"
        />
        <path
          className="prefix__st28"
          d="M486.1 189.7s4.5 22.8 22.9 31c18.3 8.2 41.7-4.5 37.7-38.3l-60.6 7.3z"
        />
        <path
          style={{ fill: "black" }}
          className="prefix__st14"
          d="M525.7 157.7l-36.4 10s-16.9 28.3 18.1 42.9c11.5 4.8 40.1 4.9 39.4-26-.6-30.1-21.1-26.9-21.1-26.9z"
        />
        <path
          className="prefix__st18"
          d="M519.8 175.1c11.5-1.5 22.2 4.8 26.8 14.8.4-2.4.5-5 .1-7.5-1.3-9.7-7.8-21.1-16.4-24.3-3.8-1.5-8.4.5-12.5 2.3-13.1 5.8-24.5 12.4-22.1 28.8.4 2.6 1.1 5 2.1 7.2 1.8-10.9 10.5-19.8 22-21.3z"
        />
        <path
          className="prefix__st30"
          d="M524.6 211.1c11.5-1.5 20.2-10.4 22-21.3-4.6-10-15.3-16.3-26.8-14.8s-20.2 10.4-21.9 21.3c4.5 10.1 15.2 16.4 26.7 14.8z"
        />
        <a.g transform={interpPupil} fill="#FFFFFF">
          <ellipse
            style={{ fill: "black" }}
            transform="rotate(172.393 519.908 184.031)"
            className="prefix__st14"
            cx={519.9}
            cy={184}
            rx={9.5}
            ry={12.7}
          />
        </a.g>
        <path
          className="prefix__st24"
          d="M532.3 437.9l52 144-56-66.8zM528.3 515.1L470.5 480l32.6 106.7zM591.5 479.8l-7.2 102.1 42.1 64z"
        />
        <path className="prefix__st22" d="M532.3 437.9l59.2 41.9-7.2 102.1z" />
        <path className="prefix__st4" d="M528.3 515.1l-43.7-85.8-14.1 50.7z" />
        <path
          className="prefix__st4"
          d="M470.5 480l-33.2-29.6-3.6 123zM591.5 479.8l-62.3-79.5 30-37.6zM591.5 479.8l17.6-138.5 37.5 38z"
        />
        <path
          className="prefix__st23"
          d="M532.3 437.9l-47.7-8.6 43.7 85.8zM529.2 400.3l3.1 37.6 59.2 41.9zM437.3 450.4l-36.5 44.5 32.9 78.5z"
        />
        <path className="prefix__st1" d="M591.5 479.8l73.5.4-18.4-100.9z" />
        <path
          className="prefix__st1"
          d="M609.1 341.3l-24.6 19.6 7 118.9zM528.3 515.1l52.8 142.3 3.2-75.5z"
        />
        <path
          className="prefix__st39"
          d="M584.5 360.9l-25.3 1.8 32.3 117.1zM528.3 515.1l7.4 161.8 27.1-68.8zM591.5 479.8l73.5 78.1v-77.7zM451.7 296.5l77.5 103.8-45.7-98.2zM483.5 271.3l75.7 91.4-29.8-89.7zM503.1 586.7L479 638.6 470.5 480zM400.8 494.9l32.9 78.5-32.9 37.4z"
        />
        <path
          className="prefix__st33"
          d="M470.5 480l-36.8 93.4 45.3 65.2zM528.3 515.1l7.4 161.8-32.6-90.2zM591.5 479.8l58.3 111.1 15.2-33zM609.1 341.3L529.4 273l44.5-14.2z"
        />
        <path
          className="prefix__st37"
          d="M483.5 271.3l75.7 91.4-75.7-60.6zM529.4 273l55.1 87.9-25.3 1.8zM632.8 228.4l-23.7 112.9 37.5 38zM649.8 590.9l-23.4 55-34.9-166.1z"
        />
        <path
          className="prefix__st19"
          d="M559.2 362.7l-75.7-60.6 45.7 98.2zM573.9 258.8l58.9-30.4-23.7 112.9z"
        />
        <path
          className="prefix__st19"
          d="M609.1 341.3L529.4 273l55.1 87.9zM532.3 437.9l-80.6-141.4 77.5 103.8zM437.3 450.4l-36.5-76.3v120.8z"
        />
        <path className="prefix__st33" d="M532.3 437.9l-47.7-8.6-32.9-132.8z" />
        <path
          className="prefix__st12"
          d="M484.6 429.3l-63.1-120.5 30.2-12.3zM421.5 308.8l49 171.2-33.2-29.6z"
        />
        <path className="prefix__st11" d="M421.5 308.8l-20.7 65.3 36.5 76.3z" />
        <path
          className="prefix__st19"
          d="M421.5 308.8l63.1 120.5-14.1 50.7zM665 557.9l14.2 62.3-29.4-29.3z"
        />

        <path className="prefix__st45" d="M400.8 310.5l-20.8-1.7 20.8 65.3z" />
        <path className="prefix__st28" d="M380 308.8l20.8-68.8v70.5z" />
        <path className="prefix__st16" d="M380 308.8l-9.6-68.8h30.4z" />
        <path className="prefix__st4" d="M273.2 157.6L255.4 96l56.8 71.7z" />
        <path className="prefix__st7" d="M370.4 240L348 271.3l27.4 4z" />
        <path className="prefix__st13" d="M348 271.3l12.2-62.2 10.2 30.9z" />
        <path className="prefix__st26" d="M388.7 187l-18.3 53 30.4-39.3z" />
        <path className="prefix__st29" d="M388.7 187l12.1-3.2v16.9z" />
        <path
          className="prefix__st25"
          d="M360.2 209.1l10.2 30.9 18.3-53-21.4-.2"
        />
        <path
          className="prefix__st25"
          d="M367.3 186.8l-17.4-16.3-1.9 38.6h12.2z"
        />
        <path
          className="prefix__st3"
          d="M367.3 186.8s3.6 18.2-7 22.4c-.1-.1-8.4-8.6 7-22.4z"
        />
        <path className="prefix__st27" d="M370.4 240l30.4-39.3V240z" />
        <path className="prefix__st16" d="M360.2 209.1L348 271.3v-62.2z" />
        <path className="prefix__st28" d="M388.7 187l12.1-25.2-33.5 25z" />
        <path className="prefix__st30" d="M400.8 161.8v-19.2h-23.4z" />
        <path className="prefix__st16" d="M400.8 161.8l-50.9 8.7 17.4 16.3z" />
        <path className="prefix__st27" d="M377.4 142.6l-27.5 27.9 50.9-8.7z" />
        <path
          className="prefix__st30"
          d="M400.8 161.8L388.7 187l12.1-3.2zM272.1 273l14.1-10.1 31.9 8.4z"
        />
        <path
          className="prefix__st27"
          d="M272.1 273l.7-14.5 13.4 4.4zM286.2 262.9l24.6-5.7 7.3 14.1z"
        />
        <path className="prefix__st16" d="M286.2 262.9l11-10.8 13.6 5.1z" />
        <path className="prefix__st25" d="M348 271.3l-29.9-25L348 240z" />
        <path className="prefix__st42" d="M348 271.3l32 37.5-4.6-33.5z" />
        <path className="prefix__st17" d="M348 271.3l1.9 25.2 30.1 12.3z" />
        <path className="prefix__st6" d="M348 271.3l-29.9 30.8 31.8-5.6z" />
        <path className="prefix__st42" d="M348 271.3h-29.9v30.8z" />
        <path className="prefix__st36" d="M318.1 271.3l-7.3-14.1 37.2 14.1z" />
        <path
          className="prefix__st45"
          d="M348 271.3l-50.8-19.2 20.9-5.8zM286.2 262.9l11-10.8-24.4 6.4z"
        />
        <path className="prefix__st35" d="M318.1 246.3l31.8-75.8L348 240z" />
        <path
          className="prefix__st24"
          d="M400.8 142.6l-37.9-82.9h37.9zM362.9 59.7l-53.5 51.5 68 31.4z"
        />
        <path className="prefix__st22" d="M309.4 111.2l40.5 59.3 27.5-27.9z" />
        <path
          className="prefix__st22"
          d="M362.9 59.7l14.5 82.9h23.4zM309.4 111.2l-5.7-42L255.4 96z"
        />
        <path
          className="prefix__st9"
          d="M255.4 96l94.5 74.5-40.5-59.3zM309.4 111.2l53.5-51.5-59.2 9.5z"
        />
        <path className="prefix__st4" d="M255.4 96l-55.5 56.2 27.7-39z" />
        <path className="prefix__st1" d="M312.2 167.7l37.7 2.8L255.4 96z" />
        <path className="prefix__st39" d="M255.4 96l17.8 61.6-73.3-5.4z" />
        <path
          className="prefix__st1"
          d="M199.9 152.2l5.3 28.6-36.4 47.6zM168.8 228.4l47.8-7.9 11 38.3z"
        />
        <path className="prefix__st31" d="M227.6 258.8l26.9-28.4 18.7 12.1z" />
        <path className="prefix__st37" d="M216.6 220.5l-11.4-39.7-36.4 47.6z" />
        <path className="prefix__st8" d="M273.2 242.5l-1.1 30.5-44.5-14.2z" />
        <path className="prefix__st8" d="M254.5 230.4l-49.3-49.6 22.4 78z" />
        <path
          className="prefix__st37"
          d="M254.5 230.4l-19.7-51.7-29.6 2.1zM234.8 178.7l38.4-21.1-73.3-5.4zM273.2 242.5l26.9-26.5 18 30.3z"
        />
        <path
          className="prefix__st19"
          d="M273.2 242.5l-.6 16.3 45.5-12.5zM300.1 216l-45.6 14.4.2-46.6zM349.9 170.5l-34.4 18.3 2.6 57.5z"
        />
        <path
          className="prefix__st12"
          d="M315.5 188.8L300.1 216l18 30.3zM254.5 230.4l45.6-14.4-26.9 26.5zM254.7 183.8l-13.2 12.6 13 34zM234.8 178.7l-34.9-26.5 5.3 28.6z"
        />
        <path className="prefix__st7" d="M241.5 196.4l13.2-12.6-19.9-5.1z" />
        <path
          style={{ fill: "black" }}
          className="prefix__st44"
          d="M312.2 167.7l3.3 21.1 34.4-18.3zM254.7 183.8l10.4-21.7-30.3 16.6z"
        />
        <path
          className="prefix__st28"
          d="M315.5 189.7s-4.5 22.8-22.9 31c-18.3 8.2-41.7-4.5-37.7-38.3l60.6 7.3z"
        />
        <path
          style={{ fill: "black" }}
          className="prefix__st14"
          d="M275.7 157.7l36.5 10s16.9 28.3-18.1 42.9c-11.5 4.8-40.1 4.9-39.4-26 .7-29 21-26.9 21-26.9z"
        />
        <path
          className="prefix__st18"
          d="M281.8 175.1c-11.5-1.5-22.2 4.8-26.8 14.8-.4-2.4-.5-5-.1-7.5 1.3-9.7 7.8-21.1 16.4-24.3 3.8-1.4 9.1.7 12.5 2.3 12.8 6 24.6 12.4 22.1 28.8-.4 2.6-1.1 5-2.1 7.2-1.8-10.9-10.5-19.8-22-21.3z"
        />
        <path
          className="prefix__st30"
          d="M277 211.1c-11.5-1.5-20.2-10.4-22-21.3 4.6-10 15.3-16.3 26.8-14.8s20.2 10.4 21.9 21.3c-4.5 10.1-15.2 16.4-26.7 14.8z"
        />
        <a.g transform={interpPupil} fill="#FFFFFF">
          <ellipse
            style={{ fill: "black" }}
            transform="rotate(7.607 281.703 184.125)"
            className="prefix__st14"
            cx={281.7}
            cy={184}
            rx={9.5}
            ry={12.7}
          />
        </a.g>
        <path
          className="prefix__st24"
          d="M269.3 437.9l-52 144 55.9-66.8zM273.2 515.1l57.9-35.1-32.6 106.7zM210.1 479.8l7.2 102.1-42.2 64z"
        />
        <path className="prefix__st22" d="M269.3 437.9l-59.2 41.9 7.2 102.1z" />
        <path
          className="prefix__st4"
          d="M273.2 515.1l43.8-85.8 14.1 50.7zM331.1 480l33.2-29.6 3.6 123zM210.1 479.8l62.3-79.5-30-37.6zM210.1 479.8l-17.6-138.5-37.5 38z"
        />
        <path
          className="prefix__st23"
          d="M269.3 437.9l47.7-8.6-43.8 85.8zM272.4 400.3l-3.1 37.6-59.2 41.9zM364.3 450.4l36.5 44.5-32.9 78.5z"
        />
        <path className="prefix__st1" d="M210.1 479.8l-73.6.4L155 379.3z" />
        <path
          className="prefix__st1"
          d="M192.5 341.3l24.6 19.6-7 118.9zM273.2 515.1l-52.8 142.3-3.1-75.5z"
        />
        <path
          className="prefix__st39"
          d="M217.1 360.9l25.3 1.8-32.3 117.1zM273.2 515.1l-7.3 161.8-27.2-68.8zM210.1 479.8l-73.6 78.1v-77.7zM349.9 296.5l-77.5 103.8 45.7-98.2zM318.1 271.3l-75.7 91.4 29.7-89.7zM298.5 586.7l24.1 51.9 8.5-158.6zM400.8 494.9l-32.9 78.5 32.9 37.4z"
        />
        <path
          className="prefix__st33"
          d="M331.1 480l36.8 93.4-45.3 65.2zM273.2 515.1l-7.3 161.8 32.6-90.2zM210.1 479.8l-58.3 111.1-15.3-33zM192.5 341.3l79.6-68.3-44.5-14.2z"
        />
        <path
          className="prefix__st37"
          d="M318.1 271.3l-75.7 91.4 75.7-60.6zM272.1 273l-55 87.9 25.3 1.8zM168.8 228.4l23.7 112.9-37.5 38zM151.8 590.9l23.3 55 35-166.1z"
        />
        <path
          className="prefix__st19"
          d="M242.4 362.7l75.7-60.6-45.7 98.2zM227.6 258.8l-58.8-30.4 23.7 112.9zM192.5 341.3l79.6-68.3-55 87.9z"
        />
        <path
          className="prefix__st19"
          d="M269.3 437.9l80.6-141.4-77.5 103.8zM364.3 450.4l36.5-76.3v120.8z"
        />
        <path className="prefix__st33" d="M269.3 437.9l47.7-8.6 32.9-132.8z" />
        <path
          className="prefix__st12"
          d="M317 429.3l63-120.5-30.1-12.3zM380 308.8L331.1 480l33.2-29.6z"
        />
        <path className="prefix__st11" d="M380 308.8l20.8 65.3-36.5 76.3z" />
        <path
          className="prefix__st19"
          d="M380 308.8l-63 120.5 14.1 50.7zM136.5 557.9l-14.1 62.3 29.4-29.3z"
        />
      </svg>
    </div>
  )
}

export default Eagle
