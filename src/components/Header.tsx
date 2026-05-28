import { Popover, PopoverGroup, PopoverButton } from '@headlessui/react'
import signature from '../assets/signature.png'



function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

                {/*added a little logo to the header, which was a signature that I had generated for me.*/}
                <img src={signature} alt="Signature" className="h-13 w-auto mt-2" />
                
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

            </nav>
        </header>
    )
}

export default Header;