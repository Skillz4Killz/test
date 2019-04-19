import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
// import FetchingExample from '../containers/FetchingExample'
import SignOut from '../containers/SignOut'

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import "react-tabs/style/react-tabs.css"

import Tracker from "../components/tracker"
import Overview from "../components/overview"
import ComingSoon from "../components/comingSoon"

import player from "../utils/mockdb/skillz"
import '../components/Navbar.css'

const IndexPage = () => (
  <Layout>
    <div>
      <div className='banner'></div>
      <h1 style={{ color: 'white', fontSize: '24px', position: 'relative', marginTop: '32px', textAlign: 'center' }}>Your Profile Page</h1>
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Inner</Tab>
          <Tab>Outer</Tab>
          <Tab>Army</Tab>
          <Tab>Guards</Tab>
        </TabList>
        <TabPanel>
          <Overview player={player} />
        </TabPanel>
        <TabPanel>
          <Tracker player={player} category="inner" />
        </TabPanel>
        <TabPanel>
          <Tracker player={player} category="outer" />
        </TabPanel>
        <TabPanel>
          <ComingSoon />
        </TabPanel>
        <TabPanel>
          <ComingSoon />
        </TabPanel>
      </Tabs>
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <SignOut />
  </Layout>
)

export default IndexPage
