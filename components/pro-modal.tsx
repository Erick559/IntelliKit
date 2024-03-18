"use client"

import { useProModal } from "@/hooks/use-pro-modal"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./ui/dialog"
import { Badge } from "./ui/badge"
import tool from "@/tools"
import { Card } from "./ui/card"
import { cn } from "@/lib/utils"
import { CheckIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import { Button } from "./ui/button"

export const ProModal = () => {
    const proModal = useProModal()
    const tools = tool

    return(
        <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex justify-center items-center flex-col gap-y-4 pb-2">
                        <div className="flex items-center gap-x-2 font-bold py-1">
                            Upgrade to Mimir
                            <Badge className="uppercase text-sm py-1" variant={"premium"}>
                                pro
                            </Badge>
                        </div>
                    </DialogTitle>
                    <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
                        {tools.map((tool)=>(
                            <Card key={tool.label} className="p-3 border-black/5 flex items-center justify-between">
                                <div className="flex items-center gap-x-4">
                                    <div className="p-2 w-fit rounded-md">
                                        <tool.icon className={cn("w-6 h-6", tool.color)}/>
                                    </div>
                                    <div className="font-bold">
                                        {tool.label}
                                    </div>
                                </div>
                                <CheckIcon className="text-primary w-5 h-5" />
                            </Card>
                        ))}
                    
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button size={"lg"} className='w-full' variant={'premium'}>
                            Upgrade
                            <LightningBoltIcon className='w-4 h-4 ml-2' />
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}