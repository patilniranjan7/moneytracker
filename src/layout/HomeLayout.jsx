import React from 'react'
import Footer from '../component/footer/footer'
import Header from '../component/header/header'

export default function HomeLayout(props) {
    return (
        <>
            <Header />
            {props.children}
            {/* <Footer /> */}
        </>
    )
}
