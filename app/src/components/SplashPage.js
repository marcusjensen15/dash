import React from 'react';
import Card from './Card';
import Report from './ReportDashboard';
import GridHeader from './GridHeading';
import SidebarNav from './SidebarNav';
// Images
import Twilio from '../media/AB-Tests.png';
import Agent from '../media/Agent.png';
import B2C from '../media/B2C.png';
import ABTest from '../media/AB-Tests.png';

function SplashPage({ activeView, setActiveView, pageViewArray, reportArray }) {
  let pageHeading;
  let cardJSX;
  let iframeJSX;

  const dataList = [
    {
      header: pageViewArray[0],
      imageURL: B2C,
      info: 'Business to Consumer Data'
    },
    {
      header: pageViewArray[1],
      imageURL: Twilio,
      info: 'Twilio Data'
    },
    {
      header: pageViewArray[2],
      imageURL: Agent,
      info: 'Agent Data'
    },
    {
      header: pageViewArray[3],
      imageURL: ABTest,
      info: 'Get a Quote Data'
    },
    {
      header: pageViewArray[4],
      imageURL: ABTest,
      info: 'Click to Call Sticky Footer'
    },
    {
      header: pageViewArray[5],
      imageURL: ABTest,
      info: 'One Step Form - Retest'
    },
    {
      header: pageViewArray[6],
      imageURL: ABTest,
      info: 'Submit to Request a Quote'
    },
    {
      header: pageViewArray[7],
      imageURL: ABTest,
      info: 'B2A One Step'
    }
  ];

  const reportList = [
    {
      screen: reportArray[0]
    }
  ];

  if (activeView=== 'Default'){
    pageHeading =
    <GridHeader
      setActiveView={setActiveView}
    />
    cardJSX =
    <div>
      <h1 id="businessReportHead">Business Reports</h1>
      <div className="reports">
        <Card
          data={dataList[0]}
          image={dataList[0].imageURL}
          setActiveView={setActiveView}
        />
      <Card
          data={dataList[1]}
          image={dataList[1].imageURL}
          setActiveView={setActiveView}
        />
      <Card
          data={dataList[2]}
          image={dataList[2].imageURL}
          setActiveView={setActiveView}
        />
      </div>
      
      <h1 id="aBTestHeader">A/B Test Reports</h1>

      <div className="reports">


            <Card
              data={dataList[3]}
              image={dataList[3].imageURL}
              setActiveView={setActiveView}
            />

            <Card
              data={dataList[4]}
              image={dataList[4].imageURL}
              setActiveView={setActiveView}
            />



              <Card
                data={dataList[5]}
                image={dataList[5].imageURL}
                setActiveView={setActiveView}
              />



              <Card
                data={dataList[6]}
                image={dataList[6].imageURL}
                setActiveView={setActiveView}
              />




          <Card
            data={dataList[7]}
            image={dataList[7].imageURL}
            setActiveView={setActiveView}
          />

          

      </div>

    </div>
  } else if (activeView !== 'Default'){
    iframeJSX = <div className='frame-holder'>
      <SidebarNav
        activeView={activeView}
        setActiveView={setActiveView}
        pageViewArray={pageViewArray}
      />
      <Report
        report={reportList[0]}
        activeView={activeView}
      />
      <style>
        {`
        #root {
          height: 100vh;
          width: 100vw;
        }
        `}
      </style>
      </div>
  }
  return (
  <React.Fragment>
    {pageHeading}
    {cardJSX}
    {iframeJSX}
  </React.Fragment>
  );
}
export default SplashPage;
