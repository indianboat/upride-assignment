import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
      <aside className='sidebar sticky top-0 lg:flex py-5 px-8 md:flex flex-col sm:hidden hidden items-start lg:w-96 md:w-80 min-h-screen'>
        <div className="flex items-center ">
          <Image src={"images/logo.svg"} width={40} height={40} alt='logo' />
          <Image src={"images/com-name.svg"} width={90} height={90} alt='com-name' />
        </div>

        <div className="bg-white p-3 rounded-2xl mt-10 w-full">
          <div className="flex flex-row items-start gap-x-2 justify-start">
            <Image src={"images/location.svg"} width={20} height={20} alt='location' />
            <div className="w-full">
              <div className="flex gap-x-2">
                <div className="flex items-center justify-between gap-x-4 w-full">
                  <h1 className='text-sm font-semibold text-[#1E293DB0]'>Rajarajeshwari Nagar</h1>
                  <button><Image src={"images/caret-down.svg"} width={10} height={10} alt='caret-down' /></button>
                </div>
              </div>
              <div className="me-4 gap-x-2 mt-2 flex items-center justify-between w-full">
                <p className='text-[#00000059] text-sm'>Branch 2</p>
                <span className='b-2'></span>
              </div>
              <hr />
              <div className="me-4 gap-x-2 mt-2 flex items-center justify-between w-full">
                <p className='text-[#00000059] text-sm'>Branch 3</p>
                <span className='b-3'></span>
              </div>
            </div>
          </div>
        </div>


        <div className="mt-6 w-full">
          <ul className='flex flex-col gap-y-4 w-full'>
            <li className='flex items-center w-full py-2 px-2 hover:bg-[#D9D9D926]'>
              <div className="me-4 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_76)">
                    <path d="M27.3529 10.4388L27.3513 10.4372L17.5612 0.647484C17.1439 0.229922 16.589 0 15.9989 0C15.4088 0 14.854 0.229781 14.4365 0.647297L4.65148 10.432C4.6482 10.4353 4.64492 10.4388 4.64164 10.4421C3.78467 11.304 3.78617 12.7023 4.64586 13.562C5.03858 13.955 5.55734 14.1825 6.11197 14.2064C6.13447 14.2086 6.1572 14.2096 6.18008 14.2096H6.57026V21.4143C6.57026 22.84 7.73023 24 9.15626 24H12.9864C13.3746 24 13.6895 23.6852 13.6895 23.2969V17.6484C13.6895 16.9979 14.2188 16.4687 14.8693 16.4687H17.1285C17.7791 16.4687 18.3082 16.9979 18.3082 17.6484V23.2969C18.3082 23.6852 18.623 24 19.0114 24H22.8416C24.2676 24 25.4276 22.84 25.4276 21.4144V14.2097H25.7894C26.3794 14.2097 26.9342 13.9799 27.3518 13.5624C28.2125 12.7013 28.2128 11.3005 27.3529 10.4388Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_76" x="0" y="0" width="31.9976" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_76" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_76" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <Link href={"/"} className='w-full text-white font-medium'>
                Home
              </Link>
            </li>
            <li className='flex items-center w-full py-2 px-2 hover:bg-[#D9D9D926]'>
              <div className="me-4 flex items-center justify-center">
                <svg width="32" height="35" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_46)">
                    <path d="M15.9565 19.0804C13.7009 19.0804 12.2451 19.8221 12.2451 20.3158C12.2451 20.812 13.6756 21.5543 15.9565 21.5543C18.2374 21.5543 19.6653 20.812 19.6653 20.3158C19.6653 19.8221 18.2096 19.0804 15.9565 19.0804Z" fill="white" />
                    <path d="M12.2451 23.8079V24.8817C12.2451 25.3754 13.6756 26.1171 15.9565 26.1171C18.2374 26.1171 19.6653 25.3754 19.6653 24.8817V23.8079C18.7866 24.3577 17.3592 24.6589 15.9565 24.6589C14.5543 24.6589 13.1263 24.3855 12.2451 23.8079Z" fill="white" />
                    <path d="M12.2451 21.5543V22.6255C12.2451 23.1192 13.6756 23.8635 15.9565 23.8635C18.2374 23.8635 19.6653 23.1192 19.6653 22.6255V21.5543C18.7866 22.1036 17.3592 22.4072 15.9565 22.4072C14.5543 22.4072 13.1263 22.1036 12.2451 21.5543Z" fill="white" />
                    <path d="M4.02771 19.2727V20.3439C4.02771 20.8381 5.45819 21.5799 7.73909 21.5799C9.99219 21.5799 11.4479 20.8381 11.4479 20.3439V19.2727C10.5697 19.8225 9.13925 20.1236 7.73909 20.1236C6.3369 20.0959 4.90641 19.8225 4.02771 19.2727Z" fill="white" />
                    <path d="M4.02771 21.5543V22.6255C4.02771 23.1192 5.45819 23.8635 7.73909 23.8635C9.99219 23.8635 11.4479 23.1192 11.4479 22.6255V21.5543C10.5697 22.1036 9.13925 22.4072 7.73909 22.4072C6.3369 22.3774 4.90641 22.1036 4.02771 21.5543Z" fill="white" />
                    <path d="M4.02771 23.8079V24.8817C4.02771 25.3754 5.45819 26.1171 7.73909 26.1171C9.99219 26.1171 11.4479 25.3754 11.4479 24.8817V23.8079C10.5697 24.3577 9.13925 24.6589 7.73909 24.6589C6.3369 24.6589 4.90641 24.3855 4.02771 23.8079Z" fill="white" />
                    <path d="M4.02771 16.9887V18.062C4.02771 18.5581 5.45819 19.2999 7.73909 19.2999C9.99219 19.2999 11.4479 18.5581 11.4479 18.062V16.9887C10.5697 17.538 9.13925 17.8416 7.73909 17.8416C6.3369 17.8139 4.90641 17.538 4.02771 16.9887Z" fill="white" />
                    <path d="M7.71138 14.5169C5.45828 14.5169 4 15.2587 4 15.7529C4 16.2465 5.43048 16.9888 7.71138 16.9888C9.96448 16.9888 11.4202 16.2465 11.4202 15.7529C11.4202 15.2587 9.99227 14.5169 7.71138 14.5169Z" fill="white" />
                    <path d="M21.2049 8.96137C21.2049 9.07304 21.1241 9.15389 21.0129 9.15389H19.7769C19.9417 9.40199 20.0786 9.67788 20.1342 9.97954H21.0129C21.1241 9.97954 21.2049 10.0629 21.2049 10.1721V10.9138C21.2049 11.025 21.1241 11.1063 21.0129 11.1063H20.1342C19.8861 12.2331 18.871 13.0588 17.6886 13.0588H17.5238L19.9973 15.5605C20.0508 15.6161 20.0786 15.6974 20.025 15.753C19.9973 15.8339 19.9417 15.8617 19.8583 15.8617H18.7315C18.6784 15.8617 18.6229 15.8339 18.5951 15.8086L16.1494 13.3069C16.1217 13.2791 16.0939 13.223 16.0939 13.1674V12.0406C16.0939 11.932 16.1772 11.8481 16.2859 11.8481H17.7164C18.2378 11.8481 18.7037 11.547 18.924 11.0785H16.3142C16.205 11.0785 16.1217 10.9972 16.1217 10.886V10.1443C16.1217 10.0351 16.205 9.95175 16.3142 9.95175H18.924C18.7037 9.48536 18.2378 9.18168 17.7164 9.18168H16.2859C16.1772 9.18168 16.0939 9.10083 16.0939 8.98916V8.19181C16.0939 8.08267 16.1772 7.99929 16.2859 7.99929H21.0129C21.1241 7.99929 21.2049 8.08267 21.2049 8.19181V8.96137ZM27.225 13.9931C26.2629 10.2832 24.4757 5.6901 21.3444 3.95796L23.3772 1.98024C24.1189 1.26374 23.5975 0 22.5798 0H14.719C13.676 0 13.1521 1.26374 13.9216 1.98024L15.9291 3.95796C12.7953 5.6901 11.0081 10.2832 10.048 13.9653C11.284 14.2968 12.2178 14.8996 12.2178 15.753V19.1082C13.099 18.5584 14.527 18.2547 15.9291 18.2547C18.1267 18.2547 20.4631 18.9687 20.4631 20.3158V20.5917C21.3444 20.5639 22.1417 20.4831 22.8557 20.3997C25.9617 20.0424 27.9945 17.0168 27.225 13.9931Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_46" x="0" y="0" width="31.3882" height="34.1171" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_46" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_46" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <Link href={"/"} className='w-full text-white font-medium'>
                My Earnings
              </Link>
            </li>
            <li className='flex items-center w-full py-2 px-2 hover:bg-[#D9D9D926]'>
              <div className="me-4 flex items-center justify-center">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_59)">
                    <path d="M17.7632 0C16.0827 0 14.6653 1.41725 14.6653 3.09765C14.6653 4.77805 16.0827 6.1953 17.7632 6.1953C19.4438 6.1953 20.8104 4.77805 20.8104 3.09765C20.8104 1.41725 19.4438 0 17.7632 0ZM21.1452 6.1953C20.308 7.12352 19.1089 7.71873 17.7632 7.71873C16.4176 7.71873 15.1677 7.12352 14.3305 6.1953C13.5996 7.00571 13.1417 8.06739 13.1417 9.24216V10.0039C13.1417 10.4249 13.4824 10.7656 13.9035 10.7656H21.5722C21.9932 10.7656 22.334 10.4249 22.334 10.0039V9.24216C22.334 8.06739 21.8761 7.00571 21.1452 6.1953ZM11.36 23.3798L7.47785 15.5974C7.103 14.8459 6.19068 14.5394 5.43819 14.9122L4.42353 15.4148C4.04574 15.6021 3.89201 16.0612 4.08058 16.4383L8.65131 25.5789C8.83927 25.9559 9.2965 26.1059 9.67125 25.9211L10.6728 25.4249C11.4283 25.0507 11.7362 24.1342 11.36 23.3798ZM29.378 12.5785C28.7533 12.1215 27.8849 12.2129 27.3669 12.7765L23.2025 17.8953C22.913 18.2 22.3645 18.3828 22.075 18.3828H18.525C18.0984 18.3828 17.7632 18.0477 17.7632 17.621C17.7632 17.1944 18.0984 16.8593 18.525 16.8593H21.5722C22.4101 16.8593 23.0958 16.1738 23.0958 15.3359C23.0958 14.498 22.4101 13.8125 21.5722 13.8125H17.5804C17.2007 13.8125 17.0114 13.5717 16.712 13.3097C15.5333 12.2491 13.769 11.7382 11.9828 12.1521C10.9911 12.382 10.3223 12.7826 9.64397 13.3197L9.62137 13.3014L8.51952 14.271L12.8497 22.9531H21.5722C23.0043 22.9531 24.3756 22.2675 25.2288 21.1249L29.6979 14.7265C30.2007 14.0562 30.0636 13.0813 29.378 12.5785Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_59" x="0" y="0" width="34" height="34" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_59" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_59" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <Link href={"/"} className='w-full text-white font-medium'>
                My Services
              </Link>
            </li>
            <li className='flex items-center w-full py-2 px-2 hover:bg-[#D9D9D926]'>
              <div className="me-4 flex items-center justify-center">
                <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_d_1_45)">
                    <path d="M17.8795 3.43274C18.943 4.12172 19.6887 5.28762 19.8244 6.64096C20.2704 6.85772 20.757 6.97033 21.2499 6.97077C23.113 6.97077 24.6231 5.41041 24.6231 3.48553C24.6231 1.56036 23.113 0 21.2499 0C19.4045 0.000593181 17.9076 1.53308 17.8795 3.43274ZM15.6696 10.5693C17.5328 10.5693 19.0429 9.00865 19.0429 7.08377C19.0429 5.1589 17.5325 3.59854 15.6696 3.59854C13.8068 3.59854 12.2958 5.15919 12.2958 7.08407C12.2958 9.00894 13.8068 10.5693 15.6696 10.5693ZM17.1005 10.8069H14.2382C11.8567 10.8069 9.91921 12.8092 9.91921 15.27V18.8869L9.9281 18.9435L10.1692 19.0215C12.4419 19.7553 14.4164 20 16.0416 20C19.2159 20 21.0558 19.0648 21.1692 19.0052L21.3945 18.8875H21.4186V15.27C21.4195 12.8092 19.482 10.8069 17.1005 10.8069ZM22.6813 7.20864H19.8411C19.8122 8.34184 19.3511 9.41731 18.5581 10.2006C20.6749 10.8511 22.2238 12.8795 22.2238 15.2753V16.3899C25.0281 16.2837 26.6441 15.4625 26.7506 15.4073L26.9759 15.2892H27V11.6711C27 9.21062 25.0625 7.20864 22.6813 7.20864ZM9.75072 6.97136C10.4106 6.97136 11.0246 6.77235 11.5447 6.43335C11.7079 5.34263 12.2695 4.35803 13.1139 3.68217C13.1173 3.61692 13.1234 3.55227 13.1234 3.48642C13.1234 1.56125 11.613 0.000889708 9.75072 0.000889708C7.8873 0.000889708 6.3775 1.56125 6.3775 3.48642C6.3775 5.4107 7.8873 6.97136 9.75072 6.97136ZM12.7801 10.2006C11.9915 9.42105 11.531 8.35244 11.4979 7.22525C11.3925 7.21724 11.2884 7.20864 11.181 7.20864H8.31899C5.93748 7.20864 4 9.21062 4 11.6711V15.2887L4.0089 15.3444L4.25001 15.423C6.07324 16.0112 7.70044 16.2822 9.11379 16.3677V15.2753C9.11436 12.8795 10.6626 10.8517 12.7801 10.2006Z" fill="white" />
                  </g>
                  <defs>
                    <filter id="filter0_d_1_45" x="0" y="0" width="31" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_45" />
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_45" result="shape" />
                    </filter>
                  </defs>
                </svg>
              </div>
              <Link href={"/"} className='w-full text-white font-medium'>
                My Assets
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Sidebar