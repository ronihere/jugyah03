import { BrandLogo, FooterIcons } from '@/public/svgs'
import React from 'react'

export default function Footer() {
    return (
        <footer className="bg-base_orange pt-4 md:pt-10" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 md:pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="flex flex-col-reverse justify-start md:flex md:flex-col xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <img className="mt-10 md:mt-0 h-14 md:h-20" src={BrandLogo.src} alt="Company name" />
                        <p className="text-sm leading-6">Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Diam ut id nisl tellus
                            rhoncus, imperdiet.</p>
                        <div className="flex space-x-6">
                            <img src={FooterIcons.src} alt='logos' />
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                                <ul role="list" className="mt-6 space-y-4 font-light">
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Analytics</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Commerce</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Insights</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <ul role="list" className="mt-6 space-y-4 font-light">
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Guides</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">API Status</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6">Utility Pages</h3>
                                <ul role="list" className="mt-6 space-y-4 font-light">
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">About</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Jobs</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Press</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <ul role="list" className="mt-6 space-y-4 font-light">
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Claim</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Privacy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="text-sm leading-6 hover:text-gray-900">Terms</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5">&copy; 2024 Jugyah, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
