import { Popover, PopoverGroup, PopoverButton, Switch} from '@headlessui/react'
import {useState} from 'react'
import signature from '../assets/signature.png'



function Header() {

    const [enabled, setEnabled] = useState(false);

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/*added a little logo to the header, which was a signature that I had generated for me.*/}
                <img src={signature} alt="Signature" className="h-13 w-auto mt-2 animate-pulse" />
                
                <PopoverGroup className="flex gap-x-12 items-center">
                    
                    {/*added buttons for the header to be able to navigate throughout the websites, will add functionality at a later date.*/}
                    <Popover>
                        <PopoverButton className="text-sm/6 font-semibold text-gray-900 hover:text-teal-500 transition-colors duration-200">
                            About Me
                        </PopoverButton>
                    </Popover>
                        
                    <Popover>
                        <PopoverButton className="text-sm/6 font-semibold text-gray-900 hover:text-teal-500 transition-colors duration-200">
                            Projects
                        </PopoverButton>
                    </Popover>

                    <Popover>
                        <PopoverButton className="text-sm/6 font-semibold text-gray-900 hover:text-teal-500 transition-colors duration-200">
                            Contact
                        </PopoverButton>
                    </Popover>


                </PopoverGroup>

                {/*added a dark mode toggle switch, will add functionality at a later date.*/}
                <Switch checked = {enabled} onChange = {setEnabled} className= "group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-teal-600">
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>
                    

            </nav>
        </header>
    )
}

export default Header;