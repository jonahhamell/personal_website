import { Popover, PopoverGroup, PopoverButton } from '@headlessui/react'


function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-center p-6 lg:px-8">
                
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