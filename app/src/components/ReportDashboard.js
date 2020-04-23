import React from 'react';

// Data constants
import { reportVariables } from '../constants/reportVariables.js'
import { testVariables } from '../constants/abTestVariables'

// Business reports under /reports
import B2CReport from './reports/B2CReport'
import TwilioReport from './reports/TwilioReport'
import AgentReport from './reports/AgentReport'

// A/B Tests under /ab-tests
import GetAQuote from './ab-tests/get-a-quote'
import ClickToCall from './ab-tests/click-to-call'
import OneStepForm from './ab-tests/one-step-form-retest'
import RequestAQuote from './ab-tests/submit-to-request-quote'
import B2AOneStep from './ab-tests/b2a-one-step'

function Reporting({ activeView }) {
  // configure the reportIds and report name in constants/reportVariables.js
  let reportData;

  switch(activeView){
    case 'B2C Performance':
      reportData = <React.Fragment>
        <B2CReport
          reportID = {reportVariables.reportIds.b2c}
        />
      </React.Fragment>
      break
    case 'Twilio':
    reportData = <React.Fragment>
      <TwilioReport
        reportID = {reportVariables.reportIds.twilio}
      />
    </React.Fragment>
      break
    case 'Coordinated Auction Insights':
      reportData = <React.Fragment>
        <AgentReport
          reportID = {reportVariables.reportIds.agent}
        />
      </React.Fragment>
      break
    case 'Get a Quote':
      reportData = <React.Fragment>
        <GetAQuote
          title = {testVariables.report1.title}
          description = {testVariables.report1.description}
          startDate = {testVariables.report1.startDate}
          endDate = {testVariables.report1.endDate}
          cvr = {testVariables.report1.cvr}
          statSig = {testVariables.report1.statSig}
          dateOfStatSig = {testVariables.report1.dateOfStatSig}
        />
      </React.Fragment>
      break
    case 'Click to Call Sticky Footer':
      reportData = <React.Fragment>
        <ClickToCall
          title = {testVariables.report2.title}
          description = {testVariables.report2.description}
          startDate = {testVariables.report2.startDate}
          endDate = {testVariables.report2.endDate}
          cvr = {testVariables.report2.cvr}
          statSig = {testVariables.report2.statSig}
          dateOfStatSig = {testVariables.report2.dateOfStatSig}
        />
      </React.Fragment>
      break
    case 'One Step Form - Retest':
      reportData = <React.Fragment>
        <OneStepForm
          title = {testVariables.report3.title}
          description = {testVariables.report3.description}
          startDate = {testVariables.report3.startDate}
          endDate = {testVariables.report3.endDate}
          cvr = {testVariables.report3.cvr}
          statSig = {testVariables.report3.statSig}
          dateOfStatSig = {testVariables.report3.dateOfStatSig}
        />
      </React.Fragment>
      break
    case 'Submit to Request a Quote':
      reportData = <React.Fragment>
        <RequestAQuote
          title = {testVariables.report4.title}
          description = {testVariables.report4.description}
          startDate = {testVariables.report4.startDate}
          endDate = {testVariables.report4.endDate}
          cvr = {testVariables.report4.cvr}
          statSig = {testVariables.report4.statSig}
          dateOfStatSig = {testVariables.report4.dateOfStatSig}
        />
      </React.Fragment>
      break
    case 'B2A One Step':
      reportData = <React.Fragment>
        <B2AOneStep
          title = {testVariables.report5.title}
          description = {testVariables.report5.description}
          startDate = {testVariables.report5.startDate}
          endDate = {testVariables.report5.endDate}
          cvr = {testVariables.report5.cvr}
          statSig = {testVariables.report5.statSig}
          dateOfStatSig = {testVariables.report5.dateOfStatSig}
        />
      </React.Fragment>
      break
    default:
      break;
  }

  return(
    <div className='frameDiv'>
      <style>{`

        #moblie-nav{
          visibility: hidden;
        }

        .frameDiv{
          justify-content: center;
          align-items: center;
          width: 85vw;
          background: #ccc;
          overflow: scroll;
          font-family: sans-serif;
        }
        @media (min-width: 850px) and (orientation : portrait) {
        .frameDiv > div {
          width: inherit;
          overflow: scroll;
        }
      }

        .powerbi-frame {
          height: 93.5vh;
          position: fixed;
          bottom: 0;
        }
        .report-details {
          background: #fff;
          margin: 15px 7.5px 15px 15px;
          padding: 15px;
          width: 45%;
          float: left;
        }
        .pie-chart {
          width: calc(100vw - 65vw);
          background: #fff;
          margin :15px 7.5px;
          padding: 15px;
          float: left;
        }

        .report-details h1 {
          margin: 0px;
        }

        .report-details div h3, .report-details div p {
          margin: 0px;
        }

        .line-chart {
          margin: 0px 15px;
          background: #fff;
        }

        .VWO {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          width: 98.5%;
          margin-left: 15px;
        }


        .VWO .line-chart {
          margin: 0px 15px 0px 0px;
          width: 100%;
          float: left;
        }



        .VWO .line-chart h3 {
          margin: 0px;
          background: #7c7c7c;
          color: #fff;
          padding: 6px 0px;
          text-align: center;
        }

        .GA {
          margin: 15px 15px;
          overflow: hidden;
          width: auto;
        }

        .GA .line-chart {
          margin: 0px;
        }

        .GA .line-chart h3 {
          margin: 0px;
          background: #7c7c7c;
          color: #fff;
          padding: 6px 0px;
          text-align: center;
        }

        .thumbnails div img {
          height: 100px;
          width: 150px;
        }

        .thumbnails > div {
          float: left;
          margin: 66px 15px 0px;
        }

        .thumbnails div p {
          margin: 0px 0px 5px;
        }

        @media (max-width: 1100px){

          .GA{
            overflow: visible;
            margin: 0px;
            display: block;
            float: left;
            width: 100%;

          }

          .GA .chartjs-size-monitor .chartjs-render-monitor .line-chart{
            height: 70%;
          }

//see VWO -> styles -> width:inherit. uncheck box. eleminates right margin.



          .VWO .line-chart{
            margin-top: 10px;
            margin-bottom: 10px;
            float: left;
          }

          .frame-holder{
            margin: 0%;
            padding: 0%;
          }
          .frameDiv{
            width: 100%;
            margin: 0%;
            padding: 0%;
            background: #fff;
          }

          .VWO{
            width: 100%;
            display: block;
            margin: 0%;
          }

          .chartjs-size-monitor{
            height: 40%;
          }

          .chartjs-render-monitor{
            width:100%;
            font-size: 12px;
            margin-bottom: 5px;
          }

          .chartjs-size-monitor{
            width: 100%;
            height: 70%;
            padding: 0%;
            margin: 0%;
          }

          .line-chart{
            width: 100%;
            align: center;
            height: 70%;
            margin-top: 30px;
            margin-bottom: 30px;
          }

          .sidenav, .report-details, .thumbnails{
            display: none;
          }

          #moblie-nav{
            color: #fff;
            visibility: visible;
            font-size: 20px;
            padding-top: 12px;
            padding-bottom: 12px;
            background-color: #39A5E6;
            width: 100%;
            height: 10%;
            text-align: center;

            overflow: hidden;
          }





        `}
      </style>
        {reportData}
    </div>
  );
}
export default Reporting
