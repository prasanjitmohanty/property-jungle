/* _app.js */
import React from "react";
import App from "next/app";
import Head from "next/head";
import Layout from "../components/Layout";
// import withData from "../lib/apollo";
import WithGraphQL from "../lib/with-graphql";
import 'bootstrap/dist/css/bootstrap.min.css';
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <WithGraphQL>
      <>
        <Head>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
      </WithGraphQL>
    );
  }
}
export default MyApp;