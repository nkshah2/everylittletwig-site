'use client'

import React from 'react'

export const RudderLoader = () => {
    if (typeof window !== 'undefined' && !window.location.href.includes('localhost')) {
        let rudder = require('rudder-sdk-js');
        rudder.load("2ZhojfDzvsa9y4P3j7c1Liq7kxb", "https://technobuxajkls.dataplane.rudderstack.com");
        rudder.page();
    }

    return (
        <></>
    )
}