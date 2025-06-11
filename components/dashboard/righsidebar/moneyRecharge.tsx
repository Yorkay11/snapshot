import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'
import { Input } from '@/components/ui/input'

const MoneyRecharge = () => {
    return (
        <Card className="border-none shadow-sm shadow-secondary bg-primary/20">
            <CardHeader className="pb-4">
                <CardTitle className="text-sm font-bold text-white">Recharge your wallet</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex space-x-2 items-center">
                        <Image 
                            src={"/uos.jpg"}
                            alt='nft'
                            width={10}
                            height={10}
                            className='rounded-full h-8 w-8'
                        />
                        <Input 
                            placeholder='Enter amount'
                            className='w-full py-2 px-4'
                        />
                    </div>
                    <Button className='w-full' variant={"secondary"}>
                        Recharge wallet
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}

export default MoneyRecharge