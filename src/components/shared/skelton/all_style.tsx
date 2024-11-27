/* =============

=============
        ================== FLEX BOX STYLES  ===========
                                                    ==================

          className="flex items-center gap-[]"
          className="flex items-center justify-between gap-[]"


=============
        ================== REDUCERS TO GET REDUX  ===========
                                                      ==================

 import { useDispatch, useSelector } from "react-redux";
 import { RootState } from "@/redux/store";

 const active = useSelector((state:RootState)=>state.inviteFreelancersActiveStages.activeTabBtn)

  const active = useSelector((state:RootState)=>state.modyfier.EXPAND)
  const key = "OPEN_FREELANCER_PROFILE_MODAL";


  const dispatch = useDispatch();


 =============
        ================== SEPARATOR  ===========
                                                      ==================

<span className="w-full h-[1px] block my-6 md:my-7 lg:my-[30px] bg-[#0059ff33]"></span>

  =============
        ================== PADDING ===========
                                          ==================

50PX
className='py-6 md:py-[35px] lg:py-[50px]'

30PX
className="p-5 md:p-6 lg:p-[30px]"


=============
          ================== Icon component ===========
                                                    ==================

export const      =({className}:{className?:string})=>{
    return
}

=============
        ================== COMPONENT PROPS TYPE  ===========
                                                       ==================
                                                                                                                     
            type PropsType = {
                className?: string;
              };                                            
                                                                  

===============
      ======================= COLORS ================
                                               ======================

background: #005aff0a ;   rgba(0, 90, 255, 0.04) 
background: #005aff1a; /* rgba(0, 90, 255, 0.10)


================
            ===========   New component ============
                                               =============
// ========== root component =========

type PropsType = {
    className?: string;
  };  
const  = () => {
  return <div className="flex">

  </div>;
};

//  ========   icon componennt ==============
export  const PayPalSVG = ({className}:{className?:string}) => {
className={className}
    return (
        <div>
            
        </div>
    );
};


=======  48PX
className="m-6 md:m-8 lg:m-10 xl:m-11 2xl:m-12"
=======  60PX
className="m-6 md:m-8 lg:m-10 xl:m-11 2xl:m-15"

 ============== Flex style =========

                  .w-full.flex.items-center.justify-between


// ============ GRADIENT BORDER =================
<div className="w-full p-[1px] rounded-[30px] bg-gradient-to-r from-[#01D18F] to-[#005AFF]">
   <div className="w-full flex flex-col items-center bg-[#FBFCFF] py-[30px] lg:py-10 rounded-[30px]"></div>
</div>


// ========= Image component =======
<Image height={} width={} src="" alt="" />

grid 
<div className="grid grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] gap-5 lg:gap-"> 

// ======== input ============
 <input
          onChange={(event) => {
            dispatch(setProfessionalRole(event.target.value));
          }}
          type="text"
          className="w-full bg-[#FBFCFF] py-2.5 px-[14px] rounded-[6px] border border-[#005aff1a] outline-none focus:border-[#005AFF]"
        />
*/
