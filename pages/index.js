import React from 'react'
import Head from 'next/head';
import Layout from '../components/layout/';
import Card from '../components/Card';

import styles from '../styles/Home.module.css';





export default function HomePage() {
  return (
    <Layout 
      title="ebro lyon - Developer, Friend, and Foe"
      description="two in the pink, one in the stink"
    >
      <Card />
    </Layout>
  );
}
