import React, { useState} from "react";

import { data } from "data";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";


const Desktop223Page=()=> {
 console.log(data)
 const { collapseSidebar, collapsed } = useProSidebar();
 const[search,setSearch]=useState('')
 console.log(search)

  return (
    <>
       
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-end mx-auto md:pr-10 sm:pr-5 pr-[43px] w-full">
        <div className="flex md:flex-col flex-row gap-8 items-start justify-between mx-auto w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[286px] bg-blue-900 flex h-screen md:hidden justify-start overflow-auto top-[0]"
          >
            <div className="flex flex-row items-center justify-between md:ml-[0] ml-[39px] mr-[35px] mt-[34px] w-3/4">
              <Img
                className="h-[84px] md:h-auto object-cover"
                src="images/img_strikelogowhite.png"
                alt="strikelogowhite"
              />
              <Img
                className="h-[23px]"
                src="images/img_threehorizontallinesicon.svg"
                alt="threehorizontal"
              />
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "22px",
                  paddingTop: "5px",
                  paddingBottom: "6px",
                  color: "#ffffff",
                  fontWeight: 500,
                  fontSize: "17px",
                  borderRadius: "10px",
                  paddingLeft: "6px",
                  paddingRight: "6px",
                  [`&:hover, &.ps-active`]: {
                    color: "#034db0",
                    backgroundColor: "#ffffffff !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mt-[49px] pl-[31px] pr-9 pt-3 sm:px-5 w-[77%]"
            >
              <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[35px] w-[35px]"
                      src="images/img_grid.svg"
                      alt="grid"
                    />
                  }
                >
                  <Text>Dashboard</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[39px]"
                      src="images/img_fasolidusers.svg"
                      alt="fasolidusers"
                    />
                  }
                >
                  <Text>Department</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col gap-14 items-center justify-start mt-[75px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-8 mb-0.5"
                      src="images/img_pinterest.svg"
                      alt="pinterest"
                    />
                  }
                >
                  <Text>Library</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[39px]"
                      src="images/img_fasolidusers.svg"
                      alt="fasolidusers_One"
                    />
                  }
                >
                  <Text>Add Teacher</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col gap-[54px] items-center justify-end mt-[63px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[37px]"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                >
                  <Text>Driver Journey</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-8 w-[31px]"
                      src="images/img_grid_white_a700.svg"
                      alt="grid_One"
                    />
                  }
                >
                  <Text>All Tables</Text>
                </MenuItem>
              </div>
            </Menu>
            {!collapsed && (
              <div className="bg-white-A700 h-[69px] mb-[1815px] md:ml-[0] ml-[268px] outline outline-[1px] outline-light_blue-A700 rounded-[9px] w-[7%]"></div>
            )}
          </Sidebar>
          <div className="flex flex-1 flex-col items-start justify-start md:mt-0 mt-10 w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-blue_gray-900 sm:text-xl"
                size="txtInterSemiBold24"
              >
                Welcome , Peter!!
              </Text>
              <div className="mt-0.5 mb-px mr-2 w-[15px] bg-gray-500 "/>
              
              <input type="text"  className="formcontrol"  onChange={(e)=> setSearch(e.target.value)} placeholder="search here"  />
              <Button className="bg-blue-900 flex h-[52px] items-center justify-center ml-6 md:ml-[0] md:mt-0 my-3 p-2.5 rounded-[18px] w-[52px]">
                <Img src="images/img_group346.svg" alt="group346" />
              </Button>
              <Img
                className="md:flex-1 h-[45px] sm:h-auto md:ml-[0] ml-[83px] object-cover w-[4%] md:w-full"
                src="images/img_notification2.png"
                alt="notificationTwo"
              />
              <div className="bg-blue-900 flex md:flex-1 flex-col items-center justify-start ml-8 md:ml-[0] p-[22px] sm:px-5 rounded-[38px] shadow-bs w-[75px] md:w-full">
                <Img
                  className="h-[30px]"
                  src="images/img_lock.svg"
                  alt="lock"
                />
              </div>
              <Img
                className="h-2.5 ml-4 md:ml-[0]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              
            </div>
            
            
            <div className="flex flex-col gap-[29px] items-center justify-start mt-[42px] w-full"> 
            
              <div className="bg-blue-900 flex sm:flex-col flex-row sm:gap-5 items-start justify-start p-[13px] rounded-[20px] w-full">
              
              
            
             
              <table className='table'>
                
                  <tr>
                    <th >Record Id</th>
                    <th>Teacher Name</th>
                    
                    <th>Teacher Id</th>
                    <th>Department</th>
                    <th >Student</th>
                    <t>Status</t>
                </tr>
               
                
                
                <tbody>
                  {data.filter((item) =>{
                     return search.toLowerCase() === '' ? item : item.teacher_name.toLowerCase().includes(search) ;
                  })
                  .map((item)=>(
                    <tr key={item.id}>
                      <td>{item.record_id}</td>
                      <td>{item.teacher_name}</td>
                      <td>{item.teacher_id}</td>
                      <td>{item.department}</td>
                      <td>{item.student}</td>
                      <td>{item.status}</td> 
                      
                    </tr>
                  
                  ))}
                </tbody>
               </table>
               
                
                
               
              
               
              </div>
             
              <Line className="bg-blue_gray-100_01 h-0.5 w-full" />
            </div>
            <div className="flex flex-row items-center justify-center md:ml-[0] ml-[416px] mt-[82px] w-[23%] md:w-full">
              <Button className="border border-gray-500_01 border-solid flex h-10 items-center justify-center p-3.5 rounded-[50%] w-10">
                <Img src="images/img_arrowleft.svg" alt="arrowleft" />
              </Button>
              <Text
                className="bg-blue-900 flex h-10 items-center justify-center ml-4 rounded-[50%] text-base text-center text-white-A700 w-10"
                size="txtInterSemiBold16"
              >
                1
              </Text>
              <Text
                className="border border-gray-500_01 border-solid flex h-10 items-center justify-center ml-2 rounded-[50%] text-base text-center text-gray-500_01 w-10"
                size="txtInterSemiBold16Gray50001"
              >
                2
              </Text>
              <Text
                className="border border-gray-500_01 border-solid flex h-10 items-center justify-center ml-2 rounded-[50%] text-base text-center text-gray-500_01 w-10"
                size="txtInterSemiBold16Gray50001"
              >
                3
              </Text>
              <Button className="border border-blue-900 border-solid flex h-10 items-center justify-center ml-4 p-3.5 rounded-[50%] w-10">
                <Img src="images/img_arrowright.svg" alt="arrowright" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Desktop223Page;
