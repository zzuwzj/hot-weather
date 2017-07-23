import React from 'react'

// import Head component from Next
import Head from 'next/head'
import axios from 'axios'

export default class extends React.Component {
  static async getInitialProps () {
    // res is assigned the response once the axios async get is completed
    const res = await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=hangzhou&units=metric&APPID=a52d7906697d7ff4a7d4fc66b56ba6b0')

    return {data: res.data}
  }

  render() {
    const { data = {} } = this.props
    const list = data.list || []
    return (
      <div>
        <Head>
          <title>Hot Weather</title>
        </Head>
        <h1>React SSR Demo with Next.js!</h1>
        <p>It is just a demo!</p>
        <p>Hangzhou's weather:</p>
        {list.map((el, idx) => (
          <ul key={idx}>
            <li>Time: <span>{el.dt_txt}</span></li>
            <li>Weather: <span>{el.weather[0].description}</span></li>
            <li>Tempreture: <span>{el.main.temp}</span></li>
            <li>Wind speed(meter/sec): <span>{el.wind.speed}</span></li>
          </ul>
        ))}
      </div>
    )
  }
}
