import { EditPenSVG } from '@/components/shared/icons/Icons'
import React from 'react'

function TestPage() {
  return (
    <div className='w-full h-screen'>
        <h1 className="fs-5xl ">Preview Profile</h1>
    <div className="w-full p-5 md:p-6 lg:p-8 xl:py-9 xl:px-10 2xl:py-10 2xl:px-[50px] my-7 md:pmy-8 lg:my-9 2xl:my-10 bg-[#005AFF] text-white">
        <h6 className="fs-lg-lh-normal">
        Portfolio updates
        </h6>

        <h3 className="fs-4xl">
        Highlight your best work, easily and beautifully - portfolios now have more options and a new design.
        </h3>

        <div className="w-full bg-white p-10">
        <button className="btn-large fs-md text-black bg-yellow-200">See what’s new</button>
        <button className="btn-large fs-md btn-bg-blue my-10">See what’s new</button>
        <button className="btn-large fs-md btn-border-blue my-10">See what’s new</button>
        </div>
        {/* ==== seperator ====== */}
        <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33] bg-black"></span>

        <div className="w-full bg-white p-10">
        <button className="btn-medium fs-md text-black bg-yellow-200">See what’s new</button>
        <button className="btn-medium fs-md btn-bg-blue my-10">See what’s new</button>
        <button className="btn-medium fs-md btn-border-blue my-10">See what’s new</button>
        </div>

        <span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33] bg-black"></span>

        <div className="w-full bg-white p-10">
        <button className="skill-btn-large fs-md ">See what’s new</button>
        <button className="skill-btn-large fs-md  my-10">See what’s new</button>
        <button className="skill-btn-large fs-md my-10">See what’s new</button>
        </div>

        <div className="w-full bg-white p-10">
        <button className="btn-gradient-light-blue fs-md "><EditPenSVG /></button>
        <button className="btn-gradient-light-blue fs-md  my-10"><EditPenSVG /></button>
        <button className="btn-gradient-light-blue text-black fs-md my-10">See what’s new</button>
        </div>


</div>
    </div>
  )
}

export default TestPage