import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Wallet } from 'lucide-react';

const Header = () => {
    return (
        <div className="min-h-[80vh] bg-foreground/90 text-white">
            <div className="max-w-7xl mx-auto  py-20">
                <div className="grid md:grid-cols-2 gap-28 items-center">
                    <div className="flex flex-col h-full justify-between">
                        <div className="grid gap-8">
                            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#AC46E7] to-[#8757B2] text-white bg-clip-text">
                                Automatisez vos snapshots et airdrops sur Ultra
                            </h1>
                            <p className="text-md text-white/80 font-light">
                                Gagnez du temps, engagez votre communauté et gérez vos détenteurs de tokens sans effort. Une solution puissante pour les créateurs et les collectionneurs.
                            </p>
                        </div>

                        <div className="flex flex-row gap-4">
                            <button className="bg-secondary hover:bg-secondary/90 text-white px-12 py-4 rounded-full text-sm font-semibold transition-colors shadow-[0_0_15px_rgba(172,70,231,0.3)] flex items-center justify-center gap-2">
                                <Wallet
                                    size={20}
                                />
                                <span>Connect Wallet</span>
                            </button>
                            <button className="bg-transparent text-white px-12 py-4 rounded-full text-sm font-semibold border shadow-[#FFFFFF] flex items-center justify-center gap-2">
                                <Wallet
                                    size={20}
                                />
                                <span>Create Snapshot</span>
                            </button>
                        </div>


                        <div className="flex flex-col gap-4  pt-8 w-full">
                            <p className="text-md text-white font-semibold">
                                Partners and Collaborations
                            </p>
                            <div className="flex flex-row gap-4 bg-muted-foreground p-12 w-full">

                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-8'>
                        <div className="grid grid-cols-4 gap-4">
                            <div className="col-span-3">
                                <div className="relative h-full rounded-lg overflow-hidden shadow-[0_0_15px_rgba(172,70,231,0.3)]">
                                    <Image
                                        src="/nft3.jpg"
                                        alt="Main feature"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <div className="grid grid-rows-3 gap-4">
                                <div className="relative h-[140px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(172,70,231,0.3)]">
                                    <Image
                                        src="/nft3.jpg"
                                        alt="Feature 1"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[140px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(172,70,231,0.3)]">
                                    <Image
                                        src="/nft3.jpg"
                                        alt="Feature 2"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative h-[140px] rounded-lg overflow-hidden shadow-[0_0_15px_rgba(172,70,231,0.3)]">
                                    <Image
                                        src="/nft3.jpg"
                                        alt="Feature 3"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row w-full items-center justify-between'>
                            <div className='flex flex-row gap-2 items-center'>
                                <Image
                                    src="/nft3.jpg"
                                    alt="Main feature"
                                    width={10}
                                    height={10}
                                    className="object-cover h-14 w-14 rounded-full"
                                    priority
                                />
                                <div className='flex flex-col'>
                                    <p className='text-white text-sm font-light'>Ultra</p>
                                    <p className='text-white text-sm font-light'>3,200 Snapshots</p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-2 items-center'>
                                <Image
                                    src="/nft3.jpg"
                                    alt="Main feature"
                                    width={10}
                                    height={10}
                                    className="object-cover h-14 w-14 rounded-full"
                                    priority
                                />
                                <div className='flex flex-col'>
                                    <p className='text-white text-sm font-light'>Ultra</p>
                                    <p className='text-white text-sm font-light'>3,200 Snapshots</p>
                                </div>
                            </div>

                            <div className='flex flex-row gap-2 items-center'>
                                <Image
                                    src="/nft3.jpg"
                                    alt="Main feature"
                                    width={10}
                                    height={10}
                                    className="object-cover h-14 w-14 rounded-full"
                                    priority
                                />
                                <div className='flex flex-col'>
                                    <p className='text-white text-sm font-light'>Ultra</p>
                                    <p className='text-white text-sm font-light'>3,200 Snapshots</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;